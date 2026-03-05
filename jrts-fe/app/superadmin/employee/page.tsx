"use client";

import { useState } from "react";
import { X, Pencil } from "lucide-react";
import { motion } from "framer-motion";

type Employee = {
  name: string;
  department: string;
};

export default function EmployeePage() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showLogs, setShowLogs] = useState(false);

  const logs = [
    { id: 1, time: "12:34 PM", action: "You edited employee", employeeName: "John Doe", employeeCode: "EMP-001" },
    { id: 2, time: "11:50 AM", action: "You edited employee", employeeName: "John Doe", employeeCode: "EMP-001" },
  ];

  const handleActivityLogs = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowLogs(true);
  };

  const closeModal = () => {
    setShowLogs(false);
    setSelectedEmployee(null);
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pt-4">
        <p className="text-lg font-semibold">Employee Management</p>
      </div>

      {/* Table */}
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

      {/* Activity Logs Modal */}
      {showLogs && selectedEmployee && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-[900px] bg-white rounded-2xl shadow-xl p-6"
          >
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">
                Activity Logs ({selectedEmployee.name})
              </h2>

              <button onClick={closeModal}>
                <X size={20} />
              </button>
            </div>

            <div className="mt-6 border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left">Date</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {logs.map((log) => (
                    <tr key={log.id} className="border-t">
                      <td className="p-3">{log.time}</td>
                      <td className="p-3 flex gap-2">
                        <Pencil size={14} />
                        {log.action} ({log.employeeCode})
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}