import CommonForm from "@/components/common/CommonForm";
import { registerFormControls } from "@/components/config";
import { registerUser } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null); // For capturing API errors
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error before making a new request

    try {
      const result = await dispatch(registerUser(formData)).unwrap();
      if (result.success) {
        console.log("Registration successful");
        navigate("/auth/login");
      } else {
        setError(result.message || "Registration failed");
        console.error("Registration failed", result);
      }
    } catch (err) {
      setError(err?.message || "An error occurred");
      console.error("API Error: ", err);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      {error && (
        <div className="text-red-500 text-sm mb-4">
          {error}
        </div>
      )}
      <CommonForm
        formControl={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Register;
