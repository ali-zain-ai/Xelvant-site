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
        className="absolute text-black"
        style={{ 
          top: "100%", 
          left: "20%",
          width: "60px",
          height: "60px",
          zIndex: 10 
        }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The swooping arrow path pointing down */}
        <motion.path
          d="M 30,0 Q 40,50 30,90"
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
          d="M 10,70 L 30,90 L 45,65"
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
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 200, damping: 15 }}
        style={{
          backgroundColor: "#e2def8",
          padding: "12px 24px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          display: "inline-block",
          whiteSpace: "nowrap",
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
