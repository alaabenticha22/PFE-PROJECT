// HomePage.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function HomePage() {
  const { user } = useAuth();
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">🎓 PFE Project</h1>
      <p className="text-xl text-gray-500 mb-10">Your MERN stack boilerplate is ready. Start building!</p>
      <div className="flex gap-4 justify-center">
        {user ? (
          <Link to="/dashboard" className="btn-primary text-base px-6 py-3">Go to Dashboard →</Link>
        ) : (
          <>
            <Link to="/register" className="btn-primary text-base px-6 py-3">Get Started</Link>
            <Link to="/login" className="btn-secondary text-base px-6 py-3">Sign In</Link>
          </>
        )}
      </div>
    </div>
  );
}
