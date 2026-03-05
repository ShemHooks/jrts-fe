"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DepartmentPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-6">
        <p className="text-xl font-semibold">Department Management</p>
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

        <p className="text-gray-400 text-sm">
          Department table will go here...
        </p>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {openModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setOpenModal(false)}
            />

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
                <button
                  onClick={() => setOpenModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>

                <h2 className="text-lg font-semibold mb-6">
                  Add New Department
                </h2>

                <form className="space-y-4">
                  <input
                    placeholder="Department Name"
                    className="w-full p-3 rounded-lg border"
                  />

                  <input
                    placeholder="Department Head"
                    className="w-full p-3 rounded-lg border"
                  />

                  <select className="w-full p-3 rounded-lg border bg-white">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>

                  <div className="flex justify-end gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setOpenModal(false)}
                      className="px-4 py-2 border rounded-md text-sm"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded-md text-sm"
                    >
                      Save Department
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}