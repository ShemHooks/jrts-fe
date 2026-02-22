"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginCard() {
const router = useRouter();

const handleLogin = () => {
    router.replace("/dashboard");
};

return (
    <div className="relative w-[400px] bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-8 pt-20">

      {/* Logo Circle */}
{/* Logo Circle */}
<div className="absolute -top-16 left-1/2 -translate-x-1/2">
<motion.div
    whileHover={{ scale: 1.1 }}
    className="w-28 h-28 rounded-full overflow-hidden shadow-lg"
>
    <img
    src="/Logo.png"
    alt="Logo"
    className="w-full h-full object-cover"
    />
</motion.div>
</div>

    <h2 className="text-black text-xl mb-6 font-semibold text-center">
        Sign In
    </h2>

    <div className="flex flex-col gap-4">
        <motion.input
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
        type="text"
        placeholder="Enter Gmail"
        className="p-3 rounded-lg bg-white/70 outline-none"
        />

        <motion.input
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
        type="password"
        placeholder="Password"
        className="p-3 rounded-lg bg-white/70 outline-none"
        />

        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogin}
        className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
        Login
        </motion.button>
    </div>
    </div>
);
}