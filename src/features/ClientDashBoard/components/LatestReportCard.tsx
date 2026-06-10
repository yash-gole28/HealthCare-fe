import { formatDate } from "../../../utils/date";

type Props = {
  report: any;
};

const LatestReportCard = ({
  report,
}: Props) => {

  return (

    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-xl font-semibold text-slate-800">
          Latest Report
        </h2>

        <p className="text-sm text-slate-500">
          {
            formatDate(report?.report_date) 
          }
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div>

          <p className="text-sm text-slate-500">
            Hemoglobin
          </p>

          <p className="text-2xl font-semibold text-slate-800">
            {
              report?.hemoglobin
            }
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            BMI
          </p>

          <p className="text-2xl font-semibold text-slate-800">
            {
              report?.bmi
            }
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Cholesterol
          </p>

          <p className="text-2xl font-semibold text-slate-800">
            {
              report?.cholesterol
            }
          </p>

        </div>

      </div>

    </div>
  );
};

export default LatestReportCard;