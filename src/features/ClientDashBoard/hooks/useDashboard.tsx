import {
  useEffect,
  useState,
} from "react";
import { getLatestReportApi, getProfileApi, getReportHistoryApi } from "../services/clientdashboard.service";


const useDashboard = () => {

  const [loading, setLoading] =
    useState(false);

  const [profile, setProfile] =
    useState<any>(null);

  const [latestReport, setLatestReport] =
    useState<any>(null);

  const [reports, setReports] =
    useState<any[]>([]);

  const [page, setPage] =
    useState(1);

  const [pagination, setPagination] =
    useState<any>(null);

  const fetchDashboard =
    async () => {

      try {

        setLoading(true);

        const [
          profileRes,
          latestRes,
        ] = await Promise.all([
          getProfileApi(),
          getLatestReportApi(),
        ]);

        setProfile(
          profileRes.data
        );

        setLatestReport(
          latestRes.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

  const fetchReportHistory =
    async (
      pageNumber = 1
    ) => {

      try {

        const response =
          await getReportHistoryApi(
            pageNumber,
            10
          );

        setReports(
          response.data
        );

        setPagination(
          response.pagination
        );

      } catch (error) {

        console.log(error);

      }
    };

  useEffect(() => {

    fetchDashboard();

  }, []);

  useEffect(() => {

    fetchReportHistory(page);

  }, [page]);

  return {
    loading,
    profile,
    latestReport,
    reports,

    page,
    setPage,

    pagination,
  };
};

export default useDashboard;