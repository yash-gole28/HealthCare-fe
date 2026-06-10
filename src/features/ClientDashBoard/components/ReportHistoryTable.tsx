import {
  formatDate,
} from "../../../utils/date";

type Props = {
  reports: any[];

  page: number;

  setPage: (
    page: number
  ) => void;

  pagination: any;
};

const ReportHistoryTable = ({
  reports,
  page,
  setPage,
  pagination,
}: Props) => {

  return (

    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-semibold text-slate-800 mb-6">
        Report History
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full min-w-[1200px]">

          <thead>

            <tr className="border-b bg-slate-50">

              <th className="text-left py-3 px-3">
                Report ID
              </th>

              <th className="text-left py-3 px-3">
                Date
              </th>

              <th className="text-left py-3 px-3">
                Hemoglobin
              </th>

              <th className="text-left py-3 px-3">
                Vitamin D
              </th>

              <th className="text-left py-3 px-3">
                Cholesterol
              </th>

              <th className="text-left py-3 px-3">
                Blood Sugar
              </th>

              <th className="text-left py-3 px-3">
                Creatinine
              </th>

              <th className="text-left py-3 px-3">
                Urine Protein
              </th>

              <th className="text-left py-3 px-3">
                BMI
              </th>

              <th className="text-left py-3 px-3">
                Doctor Notes
              </th>

            </tr>

          </thead>

          <tbody>

            {reports.map(
              (report) => (

                <tr
                  key={
                    report._id
                  }

                  className="border-b hover:bg-slate-50"
                >

                  <td className="py-3 px-3">
                    {
                      report.report_id
                    }
                  </td>

                  <td className="py-3 px-3">
                    {
                      formatDate(
                        report.report_date
                      )
                    }
                  </td>

                  <td className="py-3 px-3">
                    {
                      report.hemoglobin
                    }
                  </td>

                  <td className="py-3 px-3">
                    {
                      report.vitamin_d
                    }
                  </td>

                  <td className="py-3 px-3">
                    {
                      report.cholesterol
                    }
                  </td>

                  <td className="py-3 px-3">
                    {
                      report.blood_sugar_fasting
                    }
                  </td>

                  <td className="py-3 px-3">
                    {
                      report.creatinine
                    }
                  </td>

                  <td className="py-3 px-3">
                    {
                      report.urine_protein
                    }
                  </td>

                  <td className="py-3 px-3">
                    {
                      report.bmi
                    }
                  </td>

                  <td className="py-3 px-3">
                    {
                      report.doctor_notes
                    }
                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

      {/* Pagination */}

      <div className="flex items-center justify-between mt-6">

        <p className="text-sm text-slate-500">

          Page {pagination?.currentPage}
          {" "}
          of
          {" "}
          {pagination?.totalPages}

        </p>

        <div className="flex gap-2">

          <button
            disabled={page === 1}
            onClick={() =>
              setPage(
                page - 1
              )
            }
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Previous
          </button>

          <button
            disabled={
              page ===
              pagination?.totalPages
            }
            onClick={() =>
              setPage(
                page + 1
              )
            }
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
};

export default ReportHistoryTable;