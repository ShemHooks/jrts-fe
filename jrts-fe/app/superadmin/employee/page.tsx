"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Bell, Search, X, Pencil } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

type Employee = {
  name: string;
  department: string;
};

type ActivityLog = {
  id: number;
  time: string;
  action: string;
  employeeName: string;
  employeeCode: string;
};

export default function EmployeePage() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showLogs, setShowLogs] = useState(false);

  const handleActivityLogs = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowLogs(true);
  };

  const closeModal = () => {
    setShowLogs(false);
    setSelectedEmployee(null);
  };

  const logs: ActivityLog[] = [
    {
      id: 1,
      time: "12:34 PM",
      action: "You edited employee",
      employeeName: "John Doe",
      employeeCode: "EMP-001",
    },
    {
      id: 2,
      time: "11:50 AM",
      action: "You edited employee",
      employeeName: "John Doe",
      employeeCode: "EMP-001",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F6] flex overflow-x-hidden">
      <Navbar />

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 md:ml-72">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pt-4">
          <p className="text-lg font-semibold">Employee Management</p>

          <Link
            href="/notifications"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 transition text-sm"
          >
            Notifications
            <Bell size={18} />
          </Link>
        </div>

        {/* Employee List */}
        <section className="mt-6 bg-white shadow-sm border">
          <div className="w-full overflow-x-auto">
            <table className="min-w-[900px] w-full text-sm">
              <thead className="border-b">
                <tr className="text-left">
                  <th className="p-3 font-semibold">Employees</th>
                  <th className="p-3 font-semibold">Department</th>
                  <th className="p-3 font-semibold">Activity Logs</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {[
                  { name: "John Doe", department: "IT" },
                  { name: "Jane Smith", department: "HR" },
                  { name: "Michael Johnson", department: "Finance" },
                ].map((row) => (
                  <tr key={row.name}>
                    <td className="p-3">{row.name}</td>
                    <td className="p-3">{row.department}</td>
                    <td className="p-3">
                      <motion.button
                        onClick={() => handleActivityLogs(row)}
                        className="text-blue-500 hover:underline"
                      >
                        View Logs
                      </motion.button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= MODAL ================= */}
        {showLogs && selectedEmployee && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-[900px] bg-white rounded-2xl shadow-xl p-6"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Activity Logs
                  </h2>
                  <p className="text-sm text-gray-500">
                    Log of actions performed by{" "}
                    <span className="font-medium">
                      {selectedEmployee.name}
                    </span>.
                  </p>
                </div>

                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Logs Table */}
              <div className="mt-6 border rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 text-gray-600">
                    <tr>
                      <th className="text-left p-3">Date</th>
                      <th className="text-left p-3">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {logs.map((log) => (
                      <tr key={log.id} className="border-t hover:bg-gray-50">
                        <td className="p-3 text-gray-500">{log.time}</td>
                        <td className="p-3">
                          <div className="flex items-start gap-2">
                            <Pencil
                              size={14}
                              className="mt-1 text-gray-400"
                            />
                            <div>
                              <p className="text-gray-700">
                                {log.action}
                              </p>
                              <p className="text-gray-500">
                                {log.employeeName} ({log.employeeCode})
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="flex justify-end mt-6">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
}