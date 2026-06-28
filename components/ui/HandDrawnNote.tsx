"use client";
import { motion } from "framer-motion";

interface HandDrawnNoteProps {
  text: string;
  className?: string;
}

export function HandDrawnNote({ text, className = "" }: HandDrawnNoteProps) {
  return (
    <div className={`relative ${className}`}>
      {/* The Arrow (Animated drawing effect) */}
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="absolute w-24 h-24 sm:w-32 sm:h-32 text-black"
        style={{ 
          top: "-50px", 
          right: "-30px",
          transform: "rotate(15deg)",
          zIndex: 10 
        }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The swooping arrow path */}
        <motion.path
          d="M 10,80 Q 40,60 60,30 T 90,10"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="transparent"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        />
        {/* Arrow head */}
        <motion.path
          d="M 70,10 L 90,10 L 85,30"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.1 }}
        />
      </motion.svg>

      {/* The Sticky Note */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 200, damping: 15 }}
        className="bg-[#e4e2fa] px-6 py-4 shadow-sm inline-block whitespace-nowrap"
        style={{
          fontFamily: "var(--font-patrick-hand)",
          fontSize: "1.35rem",
          color: "#1f1f1f",
          transformOrigin: "center",
          borderRadius: "2px",
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}
