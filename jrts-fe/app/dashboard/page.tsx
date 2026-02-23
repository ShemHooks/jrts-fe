"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Bell } from "lucide-react";
import {motion} from "framer-motion";

export default function DashboardPage() {
    
return (
    <div className="min-h-screen bg-[#F9F8F6] md:flex">
    <Navbar />

    <div className="flex-1 p-6">
        {/* Top right notification */}
        <div className="flex justify-end mb-4">
        <Link
            href="/notifications"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 transition"
        >
            
            Notifications
            <Bell size={20} />
        </Link>
        </div>

        {/*DasboardContent*/}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Active */}
<motion.div className="relative rounded-2xl bg-[#F9F8F6] text-black p-6 shadow-sm border"
whileHover={{ scale: 1.05, borderCollapse: "separate", borderSpacing: "0 4px", borderColor: "#E5E7EB", backgroundColor: "#A0BC9B" }}
transition={{ type: "spring", stiffness: 300 }}
>
    
    <div className="absolute top-4 right-4">
    👥
    </div>

    <p className="text-sm opacity-90">Active</p>
    <h2 className="text-4xl font-semibold mt-3">23</h2>
    <p className="text-xs mt-4 opacity-80">+9% from last month</p>
</motion.div>

  {/* Completed */}
<motion.div className="relative rounded-2xl bg-[#F9F8F6] p-6 shadow-sm border"
whileHover={{ scale: 1.05, borderCollapse: "separate", borderSpacing: "0 4px", borderColor: "#E5E7EB", backgroundColor: "#A0BC9B"}}
transition={{ type: "spring", stiffness: 300 }}

>
    
    <div className="absolute top-4 right-4">
    ✔️
    </div>

    <p className="text-sm text-gray-600">Completed</p>
    <h2 className="text-4xl font-semibold mt-3 text-black">21</h2>
    <p className="text-xs mt-4 text-gray-400">99% uptime</p>
</motion.div>

  {/* Pending */}
<motion.div className="relative rounded-2xl bg-[#F9F8F6] p-6 shadow-sm border"
whileHover={{ scale: 1.05, borderCollapse: "separate", borderSpacing: "0 4px", borderColor: "#E5E7EB",  backgroundColor: "#A0BC9B"}}
transition={{ type: "spring", stiffness: 300 }}


>
    <div className="absolute top-4 right-4">
    👥
    </div>

    <p className="text-sm text-gray-600">Pending</p>
    <h2 className="text-4xl font-semibold mt-3 text-black">0</h2>
    <p className="text-xs mt-4 text-gray-400">Job Request pending</p>
</motion.div>
</div>      
    </div>
    </div>
);
}