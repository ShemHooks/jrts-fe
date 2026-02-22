"use client";

import { motion } from "framer-motion";

interface ButtonProps {
children: React.ReactNode;
onClick?: () => void;
type?: "button" | "submit";
}

export default function Button({ children, onClick, type = "button" }: ButtonProps) {
return (
    <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    type={type}
    className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition"
    >
    {children}
    </motion.button>
);
}