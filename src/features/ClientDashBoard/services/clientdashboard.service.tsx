import { GET } from "../../../services/methods";


export const getProfileApi =
  async () => {

    return GET(
      "/client/profile"
    );
  };

export const getLatestReportApi =
  async () => {

    return GET(
      "/client/latest-report"
    );
  };

export const getReportHistoryApi =
  async () => {

    return GET(
      "/client/report-history"
    );
  };