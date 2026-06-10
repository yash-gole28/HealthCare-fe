import { formatDate } from "../../../utils/date";

type Props = {
  report: any;
};

const LatestReportCard = ({
  report,
}: Props) => {

  return (

    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

        <h2 className="text-xl font-semibold text-slate-800">
          Latest Health Report
        </h2>

        <p className="text-sm text-slate-500">
          Report Date: {formatDate(report?.report_date)}
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div>
          <p className="text-sm text-slate-500">
            Hemoglobin
          </p>

          <p className="text-2xl font-semibold text-slate-800">
            {report?.hemoglobin}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Vitamin D
          </p>

          <p className="text-2xl font-semibold text-slate-800">
            {report?.vitamin_d}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Cholesterol
          </p>

          <p className="text-2xl font-semibold text-slate-800">
            {report?.cholesterol}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Blood Sugar
          </p>

          <p className="text-2xl font-semibold text-slate-800">
            {report?.blood_sugar_fasting}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Creatinine
          </p>

          <p className="text-2xl font-semibold text-slate-800">
            {report?.creatinine}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            BMI
          </p>

          <p className="text-2xl font-semibold text-slate-800">
            {report?.bmi}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Urine Protein
          </p>

          <p className="text-2xl font-semibold text-slate-800">
            {report?.urine_protein}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Report ID
          </p>

          <p className="text-lg font-semibold text-slate-800">
            {report?.report_id}
          </p>
        </div>

      </div>

      <div className="mt-8 pt-6 border-t">

        <p className="text-sm text-slate-500 mb-2">
          Doctor Notes
        </p>

        <p className="text-slate-800">
          {report?.doctor_notes || "-"}
        </p>

      </div>

    </div>
  );
};

export default LatestReportCard;