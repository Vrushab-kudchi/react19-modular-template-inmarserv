import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormValidation, type LoginFormValidation } from "../validation";
import { authService } from "../services/authService";
import storage from "../../../../libs/storage";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { useStore } from "../../../../store";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const setAuth = useStore((state) => state.setAuth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValidation>({
    resolver: zodResolver(loginFormValidation),
  });

  const onSubmit = async (data: LoginFormValidation) => {
    try {
      const response = await authService.login(data);
      storage.setToken(response.access_token);
      setAuth({
        email: data.email,
        name: response.user.name,
        role: response.user.role,
      });
      navigate("/");
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || axiosError.message;
      toast.error(errorMessage);
    }
  };

  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};
