import React from "react";

const Loader = ({ message }: { message: string }) => {
  return (
    <div className="rounded-xl bg-white p-4 text-sm text-gray-700 shadow-sm ring-1 ring-gray-200">
      {message}
    </div>
  );
};

export default Loader;
