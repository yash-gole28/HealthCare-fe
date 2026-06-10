import { POST } from "../../../services/methods";

  export const getClientsApi =
  (
    data: any
  ) => {

    return POST(
      "/user/client-list",
      data
    );
  };