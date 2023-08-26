"use client"
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

export function AnimationWraper({ children }: React.PropsWithChildren) {
    const path = usePathname();
    return (
        <motion.div
            key={path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-full"
        >
            {children}
        </motion.div>
    )
}