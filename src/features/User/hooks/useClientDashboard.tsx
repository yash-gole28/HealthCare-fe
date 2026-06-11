import {
  useEffect,
  useState,
} from "react";

import {
  getClientDetailsApi,
  getClientLatestReportApi,
  getClientReportHistoryApi,
} from "./../services/userservice";

const useClientDashboard = (
  clientId: number
) => {

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

          getClientDetailsApi({
            clientId,
          }),
          getClientLatestReportApi({
              clientId,
            }),
            
        ]);
        console.log("profile details", profileRes)

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
          await getClientReportHistoryApi({

            clientId,

            page:
              pageNumber,

            limit: 10,

          });

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

    if (!clientId) {
      return;
    }

    fetchDashboard();

  }, [clientId]);

  useEffect(() => {

    if (!clientId) {
      return;
    }

    fetchReportHistory(page);

  }, [
    clientId,
    page,
  ]);

  return {

    loading,

    profile,

    latestReport,

    reports,

    page,
    setPage,

    pagination,
    fetchReportHistory

  };
};

export default useClientDashboard;