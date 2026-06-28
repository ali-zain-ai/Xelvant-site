"use client";
import { motion } from "framer-motion";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], display: "swap" });

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
        className="absolute text-black"
        style={{ 
          top: "100%", 
          left: "40%",
          width: "40px",
          height: "40px",
          zIndex: 10 
        }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The swooping arrow path pointing down */}
        <motion.path
          d="M 50,0 Q 60,40 40,90"
          stroke="#1f1f1f"
          strokeWidth="4"
          strokeLinecap="round"
          fill="transparent"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        />
        {/* Arrow head */}
        <motion.path
          d="M 20,70 L 40,90 L 60,70"
          stroke="#1f1f1f"
          strokeWidth="4"
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
        className={caveat.className}
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 200, damping: 15 }}
        style={{
          backgroundColor: "#e2def8",
          padding: "8px 16px",
          boxShadow: "0 8px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          display: "inline-block",
          whiteSpace: "nowrap",
          fontSize: "1.3rem",
          color: "#1f1f1f",
          transformOrigin: "center",
          borderRadius: "14px",
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}
