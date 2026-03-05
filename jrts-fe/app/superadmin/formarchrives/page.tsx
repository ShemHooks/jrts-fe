'use client';

import Navbar from "@/components/Navbar";

export default function FormArchivesPage() {
    return (
        <div className="min-h-screen bg-[#F9F8F6] flex overflow-x-hidden">
            <Navbar />

            <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 md:ml-72">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pt-4">
                    <p className="text-lg font-semibold">Form Archives</p>
                </div>  
                {/* Content Container */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-gray-400 text-sm">
                        Form archives content will go here...
                    </p>
                </div>
            </main>
        </div>
    );
}