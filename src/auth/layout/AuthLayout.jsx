import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <main className="flex justify-center font-montserrat flex-col">
      {children}
    </main>
  );
};
