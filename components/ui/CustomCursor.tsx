"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on desktop with fine pointer
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX - 4}px`;
      dot.style.top = `${mouseY - 4}px`;
      document.documentElement.style.setProperty('--cursor-x', `${mouseX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${mouseY}px`);
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX - 16}px`;
      ring.style.top = `${ringY - 16}px`;
      requestAnimationFrame(animate);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        document.body.classList.add("cursor-hover");
      }
    };

    const onMouseOut = () => {
      document.body.classList.remove("cursor-hover");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    animate();

    // Hide default cursor
    document.body.style.cursor = "none";
    const style = document.createElement("style");
    style.textContent = "a, button, [role='button'] { cursor: none !important; }";
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.body.style.cursor = "";
      style.remove();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
      <div className="fixed inset-0 pointer-events-none z-[99997] mix-blend-screen opacity-30">
        <div 
          className="w-[300px] h-[300px] rounded-full bg-amber-500/10 blur-[100px]"
          style={{ 
            position: 'fixed',
            left: 'calc(var(--cursor-x) - 150px)',
            top: 'calc(var(--cursor-y) - 150px)',
          }}
        />
      </div>
    </>
  );
}
