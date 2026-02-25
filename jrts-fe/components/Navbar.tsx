"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, X, Home, User, Building2, LogOut } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 h-14 bg-[#F4F2EE] border-b flex items-center px-4">
        <button onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
        <span className="ml-3 font-semibold">Dashboard</span>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-72
          bg-[#F4F2EE] border-r
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          flex flex-col justify-between
        `}
      >
        {/* Top Section */}
        <div>
          {/* Header */}
          <div className="h-16 flex items-center justify-between px-5 border-b">
            <div>
              <p className="text-xs text-gray-500 tracking-wide">ADMIN</p>
              <p className="font-semibold text-sm">
                Saul Cyvan Soberano
              </p>
              <p className="text-xs text-gray-500">ID: 2023-00001</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="md:hidden"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="px-5 py-6 space-y-4 text-sm">
            <p className="text-xs text-gray-500 tracking-wide">MAIN</p>

            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 border border-gray-400 text-gray-700 hover:bg-gray-200 transition"
            >
              <Home size={18} />
              Dashboard
            </Link>

            <Link
              href="/employee"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 border border-gray-400 text-gray-700 hover:bg-gray-200 transition"
            >
              <User size={18} />
              Employee
            </Link>

            <Link
              href="/department"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 border border-gray-400 text-gray-700 hover:bg-gray-200 transition"
            >
              <Building2 size={18} />
              Department
            </Link>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="px-5 pb-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 border border-gray-400 text-red-500 hover:bg-red-100 transition"
          >
            <LogOut size={18} />
            Logout Account
          </button>
        </div>
      </aside>
    </>
  );
}