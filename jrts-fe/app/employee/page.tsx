"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Bell, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function EmployeePage() {
    return(
        <div className="min-h-screen bg-[#F9F8F6] flex overflow-x-hidden">

        <Navbar />
        {/* Main content */}
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 md:ml-72">
          {/* Top right notification */}
            
              <div className="flex items-center justify-between mb-4 pt-4">
        <p className="text-lg font-semibold">
          Employee Management
        </p>

        <Link
          href="/notifications"
          className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 transition text-sm sm:text-base"
        >
          Notifications
          <Bell size={18} />
        </Link>
        </div>
            {/* Employee content */}
            {/* Search + Sort */}
                    <section className="grid grid-cols-3 gap-3 sm:grid-cols-3 ">
                      <div className="relative">
                          <motion.select
                          className="w-full p-3 rounded-lg  border border-gray-300
                          focus:outline-none focus:ring-3 focus:ring-blue-500 bg-white text-sm sm:text-base"
                        >
                          <option>10</option>
                          <option>15</option>
                          <option>20</option>
                          <option>50</option>
                        </motion.select>
            
                      </div>
                      {/* Search */}
            
                      <div className="relative">
                        <Search
                          size={18}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <motion.input
                          placeholder="Search"
                          className="w-full pl-10 p-3 rounded-lg border border-gray-300
                          focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm sm:text-base"
                        />
                      </div>
            
                      {/* Sort */}
                      <div className="relative">
                        <motion.select
                          className="w-full p-3 rounded-lg border border-gray-300
                          focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm sm:text-base"
                        >
                          <option>Sort by</option>
                          <option>Date</option>
                          <option>Status</option>
                          <option>Department</option>
                        </motion.select>
                      </div>
                    </section>
                    {/* Employee List */}
                    <section className="mt-6 bg-white rounded-xs shadow-sm border  ">
                    <div className="w-full overflow-x-auto">
                      <table className="min-w-[900px] w-full text-sm">
                        <thead className="border-b bg-gray-10">
                        <tr className="text-left whitespace-nowrap ">
                          <th className="p-3 text-sm font-semibold border-r-2 border-gray-200">Employees</th>
                          <th className="p-3 text-sm font-semibold border-l-2 border-gray-200">Department</th>
                          <th className="p-3 text-sm font-semibold border-l-2 border-gray-200">Activity Logs</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y whitespace-nowrap">
                        {[
                          { name: "John Doe", department: "IT" },
                          { name: "Jane Smith", department: "HR" },
                          { name: "Michael Johnson", department: "Finance" },
                        ].map((row) => (
                          <tr key={row.name}>
                            <td className="p-3 ">{row.name}</td>
                            <td className="p-3">{row.department}</td>
                            <td className="p-3">
                              <button className="text-blue-500 hover:underline">
                                View Logs
                              </button>
                              

                            </td>
                          </tr>
                        ))}
                      </tbody>

                        </table>
                    </div>




                    </section>
        </main>
      </div>
    );    
}