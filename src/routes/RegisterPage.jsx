import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] bg-gray-100">
      <SignUp path="/register" routing="path" signInUrl="/login" />
    </div>
  );
};

export default RegisterPage;
