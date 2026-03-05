"use client";

import Navbar from "@/components/Navbar";
import { Bell } from "lucide-react";
import Link from "next/link";

export default function SuperAdminLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<div className="min-h-screen bg-[#F9F8F6] flex overflow-x-hidden">
    
    {/* Sidebar */}
    <Navbar />

    {/* Page Content */}
    <main className="flex-1 w-full px-6 sm:px-3 lg:px-8 md:ml-72">

    {/* Global Header */}
    <div className="flex justify-end mb-4 pt-4">
        <Link
        href="/notifications"
        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 transition text-sm"
        >
        Notifications
        <Bell size={18} />
        </Link>
    </div>

    {children}

    </main>
</div>
);
}