import type { AxiosResponse } from "axios";
import api from "../../../../libs/api";
import type { LoginFormData, LoginResponse } from "../types";

export const authService = {
  login: async (data: LoginFormData) => {
    const response: AxiosResponse<LoginResponse> = await api.post(
      "/auth/login",
      {
        email: data.email,
        password: data.password,
      }
    );
    return response.data;
  },
};
