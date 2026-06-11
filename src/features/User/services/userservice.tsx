import { POST } from "../../../services/methods";
import api from "../../../services/service";

  export const getClientsApi =
  (
    data: any
  ) => {

    return POST(
      "/user/client-list",
      data
    );
  };

  export const getClientDetailsApi =
  (data: {
    clientId: number;
  }) =>
    POST(
      "/user/details",
      data
    );

export const getClientLatestReportApi =
  (data: {
    clientId: number;
  }) =>
    POST(
      "/user/latest-report",
      data
    );

export const getClientReportHistoryApi =
  (data: {
    clientId: number;
    page: number;
    limit: number;
  }) =>
    POST(
      "/user/report-history",
      data
    );

export const uploadReportApi =
  (
    formData: FormData
  ) => {

    return api.post(
      "/user/upload-report",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",

          "x-encrypted":
            "false",
        },
      }
    );
  };