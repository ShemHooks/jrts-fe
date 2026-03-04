"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Bell, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DepartmentPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F8F6] flex overflow-x-hidden">
      <Navbar />

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 md:ml-72">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pt-6">
          <p className="text-xl font-semibold">Department Management</p>

          <Link
            href="/notifications"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 transition text-sm"
          >
            Notifications
            <Bell size={18} />
          </Link>
        </div>

        {/* Content Container */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          
          {/* Top Controls */}
          <div className="flex justify-between mb-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpenModal(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm"
            >
              + Add Department
            </motion.button>
          </div>

          {/* Table Placeholder */}
          <p className="text-gray-400 text-sm">
            Department table will go here...
          </p>
        </div>

        {/* ================= MODAL ================= */}
        <AnimatePresence>
          {openModal && (
            <>
              {/* Background Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                onClick={() => setOpenModal(false)}
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 flex items-center justify-center z-50 px-4"
              >
                <div
                  className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setOpenModal(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  >
                    <X size={18} />
                  </button>

                  {/* Title */}
                  <h2 className="text-lg font-semibold mb-6">
                    Add New Department
                  </h2>

                  {/* Form */}
                  <form className="space-y-4">
                    {/* Department Name */}
                    <div>
                      <label className="text-sm text-gray-600">
                        Department Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter department name"
                        className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    {/* Department Head */}
                    <div>
                      <label className="text-sm text-gray-600">
                        Department Head
                      </label>
                      <input
                        type="text"
                        placeholder="Enter department head"
                        className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    {/* Status */}
                    <div>
                      <label className="text-sm text-gray-600">
                        Status
                      </label>
                      <select
                        className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                      >
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setOpenModal(false)}
                        className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100"
                      >
                        Cancel
                      </button>

                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="px-4 py-2 rounded-md bg-green-600 text-white text-sm font-medium"
                      >
                        Save Department
                      </motion.button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        {/* ================= END MODAL ================= */}

      </main>
    </div>
  );
}