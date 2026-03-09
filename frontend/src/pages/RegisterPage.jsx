import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { Button, Input, Alert } from "../components/ui";

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { values, errors, setErrors, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validate = () => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = "Name is required";
    if (!values.email) newErrors.email = "Email is required";
    if (values.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (values.password !== values.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setError("");
    setLoading(true);
    try {
      await register({ name: values.name, email: values.email, password: values.password });
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="card w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Create an account</h1>
          <p className="text-gray-500 mt-1 text-sm">Join us today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Alert type="error" message={error} />

          <Input label="Full Name" name="name" value={values.name} onChange={handleChange} placeholder="John Doe" error={errors.name} required />
          <Input label="Email" type="email" name="email" value={values.email} onChange={handleChange} placeholder="you@example.com" error={errors.email} required />
          <Input label="Password" type="password" name="password" value={values.password} onChange={handleChange} placeholder="Min. 6 characters" error={errors.password} required />
          <Input label="Confirm Password" type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} placeholder="Repeat password" error={errors.confirmPassword} required />

          <Button type="submit" loading={loading} className="w-full mt-2">
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary-600 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
