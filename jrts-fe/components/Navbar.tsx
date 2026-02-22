"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Home, Users, Building2, Briefcase, LogOut, Menu, X } from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#F9F8F6] shadow">
        <button onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0 z-50
          h-screen w-72 bg-[#F9F8F6] shadow-inner
          flex flex-col justify-between p-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Close button (mobile only) */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* TOP SECTION */}
        <div>
          {/* Admin Profile */}
          <div className="flex items-center gap-3 mb-10 border-b pb-4 ">
            <img
              src="/userprofile.png"
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="justify-center flex flex-col">
              <p className="text-xs text-gray-500 uppercase">Admin</p>
              <p className="font-semibold text-gray-800">
                Saul Cyvan Soberano
              </p>
            </div>
          </div>

          {/* Navigation */}
          <p className="text-xs text-gray-400 uppercase mb-4">Main</p>

          <nav className="flex flex-col gap-4">
            <Link href="/dashboard" className="flex items-center gap-3 border border-gray-200 p-3 rounded-md hover:bg-gray-200 transition">
              <Home size={18} />
              Dashboard
            </Link>

            <Link href="/employee" className="flex items-center gap-3 border border-gray-200 p-3 rounded-md hover:bg-gray-200 transition">
              <Users size={18} />
              Employee
            </Link>

            <Link href="/department" className="flex items-center gap-3 border border-gray-200  p-3 rounded-md hover:bg-gray-200 transition">
              <Building2 size={18} />
              Department
            </Link>

            <Link href="/job-request" className="flex items-center gap-3 border border-gray-200 p-3 rounded-md hover:bg-gray-200 transition">
              <Briefcase size={18} />
              Job Request
            </Link>
          </nav>
        </div>

        {/* BOTTOM SECTION */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 border border-gray-200 p-3 rounded-md text-red-500 hover:bg-red-100 transition"
        >
          <LogOut size={18} />
          Logout Account
        </button>
      </div>
    </>
  );
}