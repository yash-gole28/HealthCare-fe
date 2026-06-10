import {
  userLoginApi,
  clientLoginApi,
} from "../services/auth.service";

export const useLogin = () => {

  const login = async (
    type: "user" | "client",

    data: {
      email: string;
      password: string;
    }
  ) => {
    if (type === "user") {

      return await userLoginApi(
        data
      );

    }

    return await clientLoginApi(
      data
    );
  };

  return {
    login,
  };
};