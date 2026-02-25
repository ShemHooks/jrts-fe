"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Bell, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function DepartmentPage() {
    return(
        <div className="min-h-screen bg-[#F9F8F6] flex overflow-x-hidden">

        <Navbar />
        {/* Main content */}
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 md:ml-72">
          {/* Top right notification */}
        <div className="flex justify-end mb-4 pt-4">
            <Link
            href="/notifications"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 transition text-sm sm:text-base"
            >
            Notifications
            <Bell size={18} />
            </Link>
          </div>
            {/* Employee content */}
        </main>
      </div>
    );    
}