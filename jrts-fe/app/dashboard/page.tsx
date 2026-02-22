import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Bell } from "lucide-react";

export default function DashboardPage() {
return (
    <div className="min-h-screen bg-[#F9F8F6] md:flex">
    <Navbar />

    <div className="flex-1 p-6">
        {/* Top right notification */}
        <div className="flex justify-end">
        <Link
            href="/notifications"
            className="flex items-center gap-2  px-4 py-2 rounded-md hover:bg-gray-200 transition"
        >
            
            Notifications
            <Bell size={20} />
        </Link>
        </div>

        {/* Your dashboard content here */}
    </div>
    </div>
);
}