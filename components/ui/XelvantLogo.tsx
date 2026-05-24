"use client";

import React from 'react';

export default function XelvantLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center font-outfit select-none ${className}`}>
      <span className="text-3xl font-black tracking-tighter bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
        X
      </span>
      <span className="text-2xl font-bold tracking-tight text-white -ml-0.5">
        elvant
      </span>
      <div className="ml-2 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
    </div>
  );
}
