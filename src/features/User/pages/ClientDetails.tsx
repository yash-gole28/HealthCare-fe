import {
  useLocation,
  Navigate,
} from "react-router-dom";

import useClientDashboard
  from "../hooks/useClientDashboard";
import UserDetailsCard from "../../ClientDashBoard/components/UserDetailsCard";
import LatestReportCard from "../../ClientDashBoard/components/LatestReportCard";
import ReportHistoryTable from "../../ClientDashBoard/components/ReportHistoryTable";
import UploadReport from "../components/UploadReport";


const ClientDetails = () => {

  const location =
    useLocation();

  const clientId =
    location.state?.clientId;

  /*
    Prevent Direct Access
  */

  if (!clientId) {

    return (
      <Navigate
        to="/clients"
        replace
      />
    );

  }

  const {

    loading,

    profile,

    latestReport,

    reports,

    page,

    setPage,

    pagination,

    fetchReportHistory

  } = useClientDashboard(
    clientId
  );

  if (loading) {

    return (

      <div
        className="
          min-h-[400px]
          flex
          items-center
          justify-center
        "
      >

        Loading...

      </div>

    );

  }

  return (

    <div className="space-y-6 p-6">

      <div>

        <h1
          className="
            text-2xl
            font-bold
            text-slate-800
          "
        >
          Client Details
        </h1>

        <p
          className="
            text-slate-500
            mt-1
          "
        >
          View client profile and health reports
        </p>

      </div>

      {/* Client Information */}

      <UserDetailsCard
        profile={profile}
      />

      {/* Latest Report */}

      <LatestReportCard
        report={latestReport}
      />

      {/* Report History */}

      <ReportHistoryTable
        reports={reports}
        page={page}
        setPage={setPage}
        pagination={pagination}
      />

      {/* Upload CSV */}

      <UploadReport
        clientId={
          profile?.client_id
        }

        onSuccess={() => {
          fetchReportHistory(1)
        }}  
      />

      {/* <div
        className="
          bg-white
          rounded-2xl
          shadow
          p-6
        "
      >

        <h2
          className="
            text-xl
            font-semibold
            mb-4
          "
        >
          Upload Health Report
        </h2>

        <button
          className="
            px-4
            py-2
            bg-slate-900
            text-white
            rounded-lg
          "
        >
          Upload CSV
        </button>

      </div> */}

    </div>

  );
};

export default ClientDetails;