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
  const [
    latestReport,
    setLatestReport,
  ] = useState<any>(null);

  const [reports, setReports] =
    useState<any[]>([]);

  const fetchDashboard =
    async () => {
      try {

        setLoading(true);

        const [
          profileRes,
          latestRes,
          historyRes,
        ] = await Promise.all([
          getProfileApi(),
          getLatestReportApi(),
          getReportHistoryApi(),
        ]);
        console.log("profile", profileRes.data)
        console.log("latest", latestRes.data)
        console.log("history", historyRes)
        setProfile(
          profileRes.data
        );

        setLatestReport(
          latestRes.data
        );

        setReports(
          historyRes.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

  useEffect(() => {
    console.log("entered effect")
    fetchDashboard();

  }, []);

  return {
    loading,
    profile,
    latestReport,
    reports,
  };
};

export default useDashboard;