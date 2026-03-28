import React from "react";

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="rounded-xl bg-red-50 p-4 text-sm text-red-600 ring-1 ring-red-200">
      {message}
    </div>
  );
};

export default ErrorMessage;
