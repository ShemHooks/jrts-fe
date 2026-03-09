"use client";

export default function EmployeeArchive() {
// Mock data for employee archives
const archives = [
{ id: 1, name: "Juan Dela Cruz", position: "Developer", department: "IT" },
{ id: 2, name: "Maria Santos", position: "HR Manager", department: "HR" },
{ id: 3, name: "Pedro Reyes", position: "Accountant", department: "Finance" },
];

return (
<>
    <div className="flex items-center justify-between mb-4 pt-4">
    <p className="text-lg font-semibold">Employee Archives</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
    {archives.length === 0 ? (
        <p className="text-gray-400 text-sm">No archived employees found.</p>
    ) : (
        <table className="w-full text-left border-collapse">
        <thead>
            <tr className="border-b border-gray-200">
            <th className="py-2 px-3 text-gray-600">Name</th>
            <th className="py-2 px-3 text-gray-600">Position</th>
            <th className="py-2 px-3 text-gray-600">Department</th>
            <th className="py-2 px-3 text-gray-600">Actions</th>
            </tr>
        </thead>
        <tbody>
            {archives.map((emp) => (
            <tr key={emp.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 px-3">{emp.name}</td>
                <td className="py-2 px-3">{emp.position}</td>
                <td className="py-2 px-3">{emp.department}</td>
                <td className="py-2 px-3 space-x-2">
                <button className="text-blue-500 hover:underline">View</button>
                <button className="text-green-500 hover:underline">Restore</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    )}
    </div>
</>
);
}