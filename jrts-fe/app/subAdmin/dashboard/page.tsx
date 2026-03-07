"use client";

import { useState } from "react";
import { Search, Wrench, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function SubAdminDashboard() {

const [search, setSearch] = useState("");

const jobs = [
{
id: 1,
code: "JOB-1001",
department: "HR",
requestedBy: "Saul Cyan Soberano",
type: "Maintenance",
priority: "High",
status: "Pending",
date: "2026-02-13",
assignedTo: "Maintenance Team A"
},
{
id: 2,
code: "JOB-1002",
department: "Accounting",
requestedBy: "Andrie Sabio",
type: "IT Issue",
priority: "Medium",
status: "In Progress",
date: "2026-02-12",
assignedTo: "Tech Team"
},
{
id: 3,
code: "JOB-1003",
department: "IT",
requestedBy: "Mark Jason Alfred",
type: "Network",
priority: "Low",
status: "Completed",
date: "2026-02-10",
assignedTo: "Network Admin"
},
{
id: 4,
code: "JOB-1004",
department: "GSO",
requestedBy: "Mike Wilson",
type: "Electrical",
priority: "High",
status: "Overdue",
date: "2026-02-09",
assignedTo: "Electrician"
},
];

const filteredJobs = jobs.filter((job) =>
job.code.toLowerCase().includes(search.toLowerCase()) ||
job.department.toLowerCase().includes(search.toLowerCase()) ||
job.requestedBy.toLowerCase().includes(search.toLowerCase())
);

return (

<div className="p-4 sm:p-6 lg:p-8 space-y-6">

{/* DASHBOARD CARDS */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

<motion.div whileHover={{ scale: 1.05 }} className="bg-yellow-400 text-white p-5 rounded-xl shadow">
<p className="text-sm">Pending Jobs</p>
<h2 className="text-2xl lg:text-3xl font-bold">06</h2>
</motion.div>

<motion.div whileHover={{ scale: 1.05 }} className="bg-blue-500 text-white p-5 rounded-xl shadow">
<p className="text-sm">In Progress</p>
<h2 className="text-2xl lg:text-3xl font-bold">12</h2>
</motion.div>

<motion.div whileHover={{ scale: 1.05 }} className="bg-green-600 text-white p-5 rounded-xl shadow">
<p className="text-sm">Completed</p>
<h2 className="text-2xl lg:text-3xl font-bold">35</h2>
</motion.div>

<motion.div whileHover={{ scale: 1.05 }} className="bg-red-500 text-white p-5 rounded-xl shadow">
<p className="text-sm">Overdue Jobs</p>
<h2 className="text-2xl lg:text-3xl font-bold">02</h2>
</motion.div>

</div>

{/* SEARCH */}

<div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow w-full sm:w-80">

<Search size={18} />

<input
type="text"
placeholder="Search jobs..."
className="outline-none w-full text-sm"
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

</div>

{/* JOB TABLE */}

<div className="bg-white rounded-xl shadow p-4 sm:p-6">

<div className="overflow-x-auto">

<table className="w-full text-sm min-w-[900px]">

<thead>

<tr className="border-b text-left text-gray-600">

<th className="py-2">Code</th>
<th>Department</th>
<th>Requested By</th>
<th>Type</th>
<th>Priority</th>
<th>Status</th>
<th>Assigned To</th>
<th>Date</th>
<th>Actions</th>

</tr>

</thead>

<tbody>

{filteredJobs.map((job) => (

<tr key={job.id} className="border-b hover:bg-gray-50">

<td className="py-3 font-medium">{job.code}</td>

<td>{job.department}</td>

<td>{job.requestedBy}</td>

<td>{job.type}</td>

<td>

<span className={`px-2 py-1 rounded text-xs font-medium
${job.priority === "High"
? "bg-red-100 text-red-600"
: job.priority === "Medium"
? "bg-yellow-100 text-yellow-600"
: "bg-green-100 text-green-600"
}`}>
{job.priority}
</span>

</td>

<td>

<span className={`px-2 py-1 rounded text-xs font-medium
${job.status === "Pending"
? "bg-yellow-100 text-yellow-600"
: job.status === "In Progress"
? "bg-blue-100 text-blue-600"
: job.status === "Completed"
? "bg-green-100 text-green-600"
: "bg-red-100 text-red-600"
}`}>
{job.status}
</span>

</td>

<td>{job.assignedTo}</td>

<td>{job.date}</td>

<td className="flex gap-3">

<button className="text-blue-600 hover:underline text-sm">
View
</button>

<button className="text-green-600 hover:underline text-sm">
Update
</button>

<button className="text-red-600 hover:underline text-sm">
Archive
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

{/* RECENT ACTIVITY */}

<div className="bg-white rounded-xl shadow p-5">

<h3 className="font-semibold mb-3">Recent Activity</h3>

<ul className="space-y-2 text-sm">

<li className="flex items-center gap-2">
<Wrench size={14}/> HR submitted maintenance request
</li>

<li className="flex items-center gap-2">
<CheckCircle size={14}/> Job #1003 completed
</li>

<li className="flex items-center gap-2">
<AlertCircle size={14}/> Job #1004 overdue
</li>

</ul>

</div>

</div>

);

}