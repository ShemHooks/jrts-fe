"use client";

import { useState } from "react";
import { Search } from "lucide-react";

type Job = {
code: string;
type: string;
priority: "High" | "Medium" | "Low";
status: "Pending" | "In Progress" | "Completed";
date: string;
};

type Employee = {
id: number;
name: string;
department: string;
jobs: Job[];
};

export default function EmployeesPage() {
const [search, setSearch] = useState("");

// Mock SubAdmin Department
const subAdminDepartment = "Human Resources";

// Mock Employees
const employees: Employee[] = [
{
    id: 1,
    name: "Saul Cyan Soberano",
    department: "Human Resources",
    jobs: [
    {
        code: "JOB-1001",
        type: "Maintenance",
        priority: "High",
        status: "Pending",
        date: "2026-02-13",
    },
    ],
},
{
    id: 2,
    name: "Maria Santos",
    department: "Human Resources",
    jobs: [
    {
        code: "JOB-1005",
        type: "Printer Repair",
        priority: "Medium",
        status: "In Progress",
        date: "2026-02-11",
    },
    ],
},
{
    id: 3,
    name: "Pedro Reyes",
    department: "Human Resources",
    jobs: [],
},

// Different department (should NOT appear)
{
    id: 4,
    name: "Mark Jason Alfred",
    department: "IT",
    jobs: [],
},
];

// Filter employees by department
const filteredEmployees = employees
.filter((emp) => emp.department === subAdminDepartment)
.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
);

const priorityColor = {
High: "bg-red-100 text-red-600",
Medium: "bg-yellow-100 text-yellow-700",
Low: "bg-green-100 text-green-600",
};

const statusColor = {
Pending: "bg-yellow-100 text-yellow-700",
"In Progress": "bg-blue-100 text-blue-600",
Completed: "bg-green-100 text-green-600",
};

return (
<div className="p-6">

    {/* Title */}
    <h1 className="text-2xl font-semibold mb-4">
    Department Employees
    </h1>

    {/* Search */}
    <div className="relative w-full max-w-md mb-6">
    <Search className="absolute left-3 top-3 text-gray-400" size={18}/>
    <input
        type="text"
        placeholder="Search employee..."
        className="w-full pl-10 pr-4 py-2 border rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />
    </div>

    {/* Employee Table */}
    <div className="bg-white rounded-xl shadow-sm overflow-x-auto">

    <table className="w-full text-sm">

        <thead className="bg-gray-50 border-b">
        <tr className="text-left">
            <th className="p-4">Employee</th>
            <th className="p-4">Job Code</th>
            <th className="p-4">Type</th>
            <th className="p-4">Priority</th>
            <th className="p-4">Status</th>
            <th className="p-4">Date</th>
            <th className="p-4">Actions</th>
        </tr>
        </thead>

        <tbody>

        {filteredEmployees.map((emp) => (
            emp.jobs.length > 0 ? (
            emp.jobs.map((job, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">

                <td className="p-4 font-medium">{emp.name}</td>

                <td className="p-4">{job.code}</td>

                <td className="p-4">{job.type}</td>

                <td className="p-4">
                    <span className={`px-2 py-1 text-xs rounded ${priorityColor[job.priority]}`}>
                    {job.priority}
                    </span>
                </td>

                <td className="p-4">
                    <span className={`px-2 py-1 text-xs rounded ${statusColor[job.status]}`}>
                    {job.status}
                    </span>
                </td>

                <td className="p-4">{job.date}</td>

                <td className="p-4 space-x-3">
                    <button className="text-blue-600 hover:underline">View</button>
                    <button className="text-green-600 hover:underline">Update</button>
                    <button className="text-red-500 hover:underline">Archive</button>
                </td>

                </tr>
            ))
            ) : (
            <tr key={emp.id} className="border-b">
                <td className="p-4 font-medium">{emp.name}</td>
                <td colSpan={6} className="p-4 text-gray-400">
                No current job request
                </td>
            </tr>
            )
        ))}

        </tbody>
    </table>

    </div>
</div>
);
}