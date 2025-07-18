import React from "react";

const UnauthorizedPage = () => {
  return (
    <div className="text-[#E7E7E4] text-3xl text-center flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-3">
        <h1>Unauthorized Access </h1>
        <p>You do not have permission to view this page.</p>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
