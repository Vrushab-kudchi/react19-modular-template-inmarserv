import type { FieldErrors } from "react-hook-form";
import type { LoginFormValidation } from "../app/features/auth/validation";

interface FormErrorHandlerProps {
  name: keyof LoginFormValidation;
  errors: FieldErrors<LoginFormValidation>;
}

const FormErrorHandler = ({ name, errors }: FormErrorHandlerProps) => {
  return (
    errors[name] && (
      <p className="mt-1 text-sm text-red-400"> {errors[name]?.message}</p>
    )
  );
};

export default FormErrorHandler;
