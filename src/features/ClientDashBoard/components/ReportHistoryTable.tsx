import { formatDate }
from "../../../utils/date";

type Props = {
  reports: any[];
};

const ReportHistoryTable = ({
  reports,
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

              <th className="text-left py-4 px-3 text-slate-500 text-sm font-medium">
                Report ID
              </th>

              <th className="text-left py-4 px-3 text-slate-500 text-sm font-medium">
                Date
              </th>

              <th className="text-left py-4 px-3 text-slate-500 text-sm font-medium">
                Hemoglobin
              </th>

              <th className="text-left py-4 px-3 text-slate-500 text-sm font-medium">
                Vitamin D
              </th>

              <th className="text-left py-4 px-3 text-slate-500 text-sm font-medium">
                Cholesterol
              </th>

              <th className="text-left py-4 px-3 text-slate-500 text-sm font-medium">
                Blood Sugar
              </th>

              <th className="text-left py-4 px-3 text-slate-500 text-sm font-medium">
                Creatinine
              </th>

              <th className="text-left py-4 px-3 text-slate-500 text-sm font-medium">
                Urine Protein
              </th>

              <th className="text-left py-4 px-3 text-slate-500 text-sm font-medium">
                BMI
              </th>

              <th className="text-left py-4 px-3 text-slate-500 text-sm font-medium">
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

                  className="border-b hover:bg-slate-50 transition-all"
                >

                  <td className="py-4 px-3 text-slate-700">
                    {
                      report.report_id
                    }
                  </td>

                  <td className="py-4 px-3 text-slate-700">
                    {
                      formatDate(
                        report.report_date
                      )
                    }
                  </td>

                  <td className="py-4 px-3 text-slate-700">
                    {
                      report.hemoglobin
                    }
                  </td>

                  <td className="py-4 px-3 text-slate-700">
                    {
                      report.vitamin_d
                    }
                  </td>

                  <td className="py-4 px-3 text-slate-700">
                    {
                      report.cholesterol
                    }
                  </td>

                  <td className="py-4 px-3 text-slate-700">
                    {
                      report.blood_sugar_fasting
                    }
                  </td>

                  <td className="py-4 px-3 text-slate-700">
                    {
                      report.creatinine
                    }
                  </td>

                  <td className="py-4 px-3 text-slate-700">
                    {
                      report.urine_protein
                    }
                  </td>

                  <td className="py-4 px-3 text-slate-700">
                    {
                      report.bmi
                    }
                  </td>

                  <td className="py-4 px-3 text-slate-700">
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

    </div>
  );
};

export default ReportHistoryTable;