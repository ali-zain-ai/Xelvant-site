"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-2xl shadow-primary/20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-black font-outfit font-bold text-3xl">X</span>
            </motion.div>

            <div className="flex flex-col items-center -space-y-1">
              <span className="font-outfit font-bold text-3xl text-gradient-gold tracking-tighter uppercase">
                XELVANT
              </span>
              <span className="text-[10px] font-inter font-bold text-primary tracking-[0.4em] uppercase">
                Intelligence
              </span>
            </div>

            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
              <motion.div
                className="h-full bg-primary"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1, ease: EASE }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
