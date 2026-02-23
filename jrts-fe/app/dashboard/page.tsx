"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Bell,Search} from "lucide-react";
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
{/* Search + Sort */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
  {/* Search */}
  <div className="relative">
    <Search
      size={18}
      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
    />
    <motion.input
      placeholder="Search"
      className="w-full pl-10 p-3 rounded-lg border border-gray-300
      focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
    />
  </div>

  {/* Sort */}
  <div className="relative">
    <motion.select
      className="w-full p-3 rounded-lg border border-gray-300
      focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
    >
      <option>Sort by</option>
      <option>Date</option>
      <option>Status</option>
      <option>Department</option>
    </motion.select>
  </div>
</div>

{/* Job Requests Table */}
<div className="mt-6 bg-white rounded-xl border shadow-sm overflow-x-auto">
<table className="w-full text-sm">
<thead className="border-b bg-gray-50">
    <tr className="text-left">
    <th className="p-3">#</th>
    <th className="p-3">Job Order Code</th>
    <th className="p-3">Department</th>
    <th className="p-3">Users</th>
    <th className="p-3">Date</th>
    <th className="p-3">Details</th>
    <th className="p-3">Status</th>
    <th className="p-3">Actions</th>
    </tr>
</thead>

<tbody className="divide-y">
    {[
    {
        id: 1,
        dept: "ICTD",
        user: "Saul Cyvan Soberano",
        status: "PENDING",
    },
    {
        id: 2,
        dept: "Text",
        user: "Shem Mayo Regidor",
        status: "PENDING",
    },
    {
        id: 3,
        dept: "Text",
        user: "Venz Amiel Marquez",
        status: "PENDING",
    },
    {
        id: 4,
        dept: "Text",
        user: "Andrie Sabio",
        status: "PENDING",
    },
    {
        id: 5,
        dept: "Text",
        user: "Mark Jason Aldred",
        status: "DONE",
    },
    {
        id: 6,
        dept: "Text",
        user: "Mike Gray Wilson",
        status: "TO BE APPROVE",
    },
    ].map((row) => (
        <tr key={row.id}>
        <td className="p-3">{row.id}</td>
        <td className="p-3">Text</td>
        <td className="p-3 text-blue-500">{row.dept}</td>
        <td className="p-3 text-blue-500">{row.user}</td>
        <td className="p-3">2026/02/13</td>
        <td className="p-3 text-green-600 font-medium">
            MENTAINANCE
        </td>
        <td
            className={`p-3 font-semibold
            ${
                row.status === "DONE"
                ? "text-green-600"
                : row.status === "TO BE APPROVE"
                ? "text-red-600"
                : "text-yellow-500"
            }
            `}
        >
            {row.status}
        </td>
        <td className="p-3 text-xs font-semibold text-gray-600">
            VIEW DETAILS
        </td>
        </tr>
    ))}
    </tbody>
</table>
</div>

{/* Bottom boxes */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
  {/* Top 5 Active */}
<div className="bg-white rounded-xl border shadow-sm p-4 h-[220px]">
    <p className="text-sm font-semibold text-gray-600">
    TOP 5 ACTIVE
    </p>
</div>

  {/* Recent */}
<div className="bg-white rounded-xl border shadow-sm p-4 h-[220px]">
    <p className="text-sm font-semibold text-gray-600 flex items-center gap-2">
    ⏱ RECENT
    </p>
</div>
</div>


    </div>
    </div>




);
}