import { BsExclamationTriangle } from "react-icons/bs";
interface FormErrorProps {
  message?: string;
};

export const FormError = ({
  message,
}: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-red-15 p-3 rounded-md flex items-center gap-x-2 text-sm text-red-700 mb-4">
      <BsExclamationTriangle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};