import CommonForm from "@/components/common/CommonForm";
import { loginFormControls } from "@/components/config";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);

  const onSubmit = () => {};
  return (
    <div className="mx-auto w-full max-w-md space-y6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your TrendHaven Account
        </h1>
        <p>
          Don't Have an Account ?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
      formControl={loginFormControls}
      buttonText={"Sign In"}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
      />
    </div>
  );
};

export default Login;
