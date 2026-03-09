import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-gray-100 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} PFE Project
      </footer>
    </div>
  );
}
