import { useAuth } from "../context/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();

  const stats = [
    { label: "Role", value: user?.role || "—" },
    { label: "Email", value: user?.email || "—" },
    { label: "Member since", value: user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "—" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome back, <span className="font-medium text-gray-700">{user?.name}</span>! 👋</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className="card">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-lg font-semibold text-gray-800 mt-1 truncate">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">👷 Build your features here</h2>
        <p className="text-gray-500 text-sm">
          This dashboard is a starting point. Add your own components, charts, tables, and data.
        </p>
      </div>
    </div>
  );
}
