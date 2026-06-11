import {
  useState,
} from "react";

import useUploadReport
from "../hooks/useUploadReport";

type Props = {
  clientId: number;

  onSuccess?: () => void;
};

const UploadReport = ({
  clientId,
  onSuccess,
}: Props) => {

  const [file, setFile] =
    useState<File | null>(
      null
    );

  const [error, setError] =
    useState("");

  const {
    loading,
    uploadReport,
  } = useUploadReport();

 const handleUpload =
  async () => {

    try {

      setError("");

      if (!file) {

        setError(
          "Please select a CSV file"
        );

        return;
      }

      const isCsv =
        file.name
          .toLowerCase()
          .endsWith(".csv");

      if (!isCsv) {

        setError(
          "Only CSV files are allowed"
        );

        return;
      }

      const response =
        await uploadReport(
          file,
          clientId
        );

      if (
        response.data.success
      ) {

        setFile(null);

        onSuccess?.();

        alert(
          response.data.message ||
          `Uploaded ${response.data.count} records successfully`
        );

      } else {

        setError(
          response.data.message ||
          "Upload failed"
        );

      }

    } catch (error: any) {

      console.log(error);

      setError(

        error?.response?.data
          ?.message ||

        "Failed to upload report"

      );

    }

  };

  return (

    <div
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
          text-slate-800
          mb-4
        "
      >
        Upload Report
      </h2>

      <div
        className="
          border-2
          border-dashed
          border-slate-300
          rounded-xl
          p-6
        "
      >

        <input
          type="file"
          accept=".csv"

          onChange={(e) =>
            setFile(
              e.target.files?.[0] ||
              null
            )
          }

          className="
            w-full
          "
        />

        {file && (

          <p
            className="
              mt-3
              text-sm
              text-slate-600
            "
          >
            {file.name}
          </p>

        )}

        {error && (

          <p
            className="
              mt-3
              text-red-500
              text-sm
            "
          >
            {error}
          </p>

        )}

        <button

          onClick={
            handleUpload
          }

          disabled={
            loading
          }

          className="
            mt-4
            px-4
            py-2
            bg-slate-900
            text-white
            rounded-lg
            hover:bg-slate-800
            disabled:opacity-50
          "
        >

          {loading

            ? "Uploading..."

            : "Upload CSV"}

        </button>

      </div>

    </div>

  );
};

export default UploadReport;