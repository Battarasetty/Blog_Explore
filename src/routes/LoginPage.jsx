import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] bg-gray-100">
      <SignIn path="/login" routing="path" signUpUrl="/register" />
    </div>
  );
};

export default LoginPage;
