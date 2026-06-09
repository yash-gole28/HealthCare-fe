import CryptoJS from "crypto-js";

const SECRET_KEY =
  import.meta.env.VITE_SECRET_KEY;

export const encryptData = (
  data: unknown
) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(data),
    SECRET_KEY
  ).toString();
};

export const decryptData = (
  encryptedData: string
) => {
  const bytes = CryptoJS.AES.decrypt(
    encryptedData,
    SECRET_KEY
  );

  return JSON.parse(
    bytes.toString(CryptoJS.enc.Utf8)
  );
};