import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { authService } from "../services/authService";
import { useForm } from "../hooks/useForm";
import { Button, Input, Alert } from "../components/ui";

export default function ProfilePage() {
  const { user, updateUser } = useAuth();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { values, handleChange } = useForm({
    name: user?.name || "",
    email: user?.email || "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");
    setLoading(true);
    try {
      const updated = await authService.updateProfile({
        name: values.name,
        email: values.email,
        ...(values.password && { password: values.password }),
      });
      updateUser(updated);
      setSuccess("Profile updated successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Update failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>
      <div className="card">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Alert type="error" message={error} />
          <Alert type="success" message={success} />
          <Input label="Full Name" name="name" value={values.name} onChange={handleChange} required />
          <Input label="Email" type="email" name="email" value={values.email} onChange={handleChange} required />
          <Input label="New Password (optional)" type="password" name="password" value={values.password} onChange={handleChange} placeholder="Leave blank to keep current" />
          <Button type="submit" loading={loading} className="w-full">Save Changes</Button>
        </form>
      </div>
    </div>
  );
}
