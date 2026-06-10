import { POST } from "../../../services/methods";


export const userLoginApi = (
  data: {
    email: string;
    password: string;
  }
) => {

  return POST(
    "/user/login",
    data
  );

};

export const clientLoginApi = (
  data: {
    email: string;
    password: string;
  }
) => {

  return POST(
    "/client/login",
    data
  );

};