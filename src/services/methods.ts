import api from "./service";

export const GET = async (
  endpoint: string,
  params?: unknown
) => {
  const response = await api.get(
    endpoint,
    {
      params,
    }
  );

  return response.data;
};

export const POST = async (
  endpoint: string,
  data?: unknown
) => {
  const response = await api.post(
    endpoint,
    data
  );

  return response.data;
};

export const PUT = async (
  endpoint: string,
  data?: unknown
) => {
  const response = await api.put(
    endpoint,
    data
  );

  return response.data;
};

export const PATCH = async (
  endpoint: string,
  data?: unknown
) => {
  const response = await api.patch(
    endpoint,
    data
  );

  return response.data;
};

export const DELETE = async (
  endpoint: string
) => {
  const response = await api.delete(
    endpoint
  );

  return response.data;
};