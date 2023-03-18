import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

const LoadingIndicator = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <AiOutlineLoading className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
    </div>
  );
};

export default LoadingIndicator;
