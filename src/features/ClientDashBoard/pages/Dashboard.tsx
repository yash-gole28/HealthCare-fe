import useDashboard
from "../hooks/useDashboard";

import UserDetailsCard
from "../components/UserDetailsCard";

import LatestReportCard
from "../components/LatestReportCard";

import ReportHistoryTable
from "../components/ReportHistoryTable";

const DashboardPage = () => {

 const {
  loading,
  profile,
  latestReport,
  reports,

  page,
  setPage,

  pagination,
} = useDashboard();

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-slate-100">

        <p className="text-slate-500">
          Loading...
        </p>

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-slate-100 p-6">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back,
          {" "}
          {
            profile?.full_name
          }
        </p>

      </div>

      {/* Grid */}

      <div className="space-y-6">

        <UserDetailsCard
          profile={profile}
        />

        <LatestReportCard
          report={latestReport}
        />

        <ReportHistoryTable
  reports={reports}
  page={page}
  setPage={setPage}
  pagination={pagination}
/>

      </div>

    </div>
  );
};

export default DashboardPage;