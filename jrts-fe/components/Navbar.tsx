"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Users, Building2, Briefcase, LogOut, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);


  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.replace("/login");
  };
const handleLogin = () => {
  localStorage.setItem("isLoggedIn", "true");
  router.replace("/dashboard");
};
/*
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.replace("/login");
    }
  }, [router]);
*/
  
  const exampleUser = {
    name: "Saul Cyvan Soberano",
    role: "Admin",
    profilePicture: "/userprofile.png",
  };

  const navItems = [
    { name: "Dashboard", icon: <Home size={18} />, path: "/dashboard" },
    { name: "Employee", icon: <Users size={18} />, path: "/employee" },
    { name: "Department", icon: <Building2 size={18} />, path: "/department" },
    { name: "Job Request", icon: <Briefcase size={18} />, path: "/job-request" },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#F9F8F6] shadow">
        <button onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* Overlay */}
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
        {/* Close Button (Mobile) */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div>
          {/* Admin Profile */}
          <div className="flex items-center gap-3 mb-10 border-b pb-4">
            <img
              src={exampleUser.profilePicture}
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <p className="text-xs text-gray-500 uppercase">
                {exampleUser.role}
              </p>
              <p className="font-semibold text-gray-800">
                {exampleUser.name}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <p className="text-xs text-gray-400 uppercase mb-4">Main</p>

          <motion.nav className="flex flex-col gap-3 md:gap-3"

          >
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-3 p-3 rounded-md transition cursor-pointer ${
                    pathname === item.path
                      ? "bg-gray-200"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </motion.nav>
        </div>

        {/* Logout */}
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