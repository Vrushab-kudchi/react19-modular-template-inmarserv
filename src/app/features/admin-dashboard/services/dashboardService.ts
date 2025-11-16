import type { AxiosResponse } from "axios";
import api from "../../../../libs/api";
import type { DashboardResponse, VesselResponse } from "../types";

export const dashboardService = {
  getDashboardData: async () => {
    const response: AxiosResponse<DashboardResponse> = await api.get(
      "/dashboard/my-dashboard"
    );
    return response.data;
  },

  getVesselModules: async () => {
    const response: AxiosResponse<VesselResponse> = await api.get("/vessel");
    return response.data;
  },
};
