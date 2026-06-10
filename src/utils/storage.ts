import { decryptData } from "./crypto";

export const getUserData =
  () => {

    const userData =
      localStorage.getItem(
        "user_data"
      );

    if (!userData) {
      return null;
    }

    try {

      return decryptData(
        userData
      );

    } catch {

      return null;

    }
  };