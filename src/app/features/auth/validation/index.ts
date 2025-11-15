import { z } from "zod";

export const loginFormValidation = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .max(255, "Email must be at most 255 characters"),
  password: z.string().min(1, "Password is required"),
});

export type LoginFormValidation = z.infer<typeof loginFormValidation>;
