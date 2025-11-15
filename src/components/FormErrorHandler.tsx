import type { FieldErrors, FieldValues, Path } from "react-hook-form";

interface FormErrorHandlerProps<T extends FieldValues> {
  name: Path<T>;
  errors: FieldErrors<T>;
}

const FormErrorHandler = <T extends FieldValues>({
  name,
  errors,
}: FormErrorHandlerProps<T>) => {
  const error = errors[name];

  if (!error?.message) {
    return null;
  }

  return <p className="mt-1 text-sm text-red-400">{error.message as string}</p>;
};

export default FormErrorHandler;
