import {
  useState,
} from "react";
import { uploadReportApi } from "../services/userservice";

const useUploadReport =
  () => {

    const [loading, setLoading] =
      useState(false);

    const uploadReport =
      async (
        file: File,
        clientId: number
      ) => {

        try {

          setLoading(true);

          const formData =
            new FormData();

          formData.append(
            "file",
            file
          );

          formData.append(
            "clientId",
            String(clientId)
          );

          const response =
            await uploadReportApi(
              formData
            );

          return response;

        } catch (error) {

          throw error;

        } finally {

          setLoading(false);

        }
      };

    return {

      loading,

      uploadReport,

    };
  };

export default useUploadReport;