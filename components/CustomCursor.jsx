"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ACCENT_COLOR = "#1d4ed8";
const ACCENT_GLOW = "rgba(29, 78, 216, 0.6)";

function CursorRing({ isHovered }) {
  return (
    <motion.svg
      className="w-full h-full"
      viewBox="0 0 100 100"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="50"
        cy="50"
        r="44"
        stroke={ACCENT_COLOR}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDasharray: "20 40 65 30 10 50 25 36" }}
        animate={{
          strokeDasharray: [
            "20 40 65 30 10 50 25 36",
            "50 25 15 55 40 30 8 53",
            "12 70 35 20 55 45 8 31",
          ],
          rotate: [0, 360],
        }}
        transition={{
          strokeDasharray: {
            duration: isHovered ? 3 : 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          rotate: {
            duration: isHovered ? 3 : 8,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{ transformOrigin: "50% 50%" }}
      />
    </motion.svg>
  );
}

function CursorDot({ isHovered }) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{
        backgroundColor: ACCENT_COLOR,
        boxShadow: `0 0 8px ${ACCENT_COLOR}`,
      }}
      animate={{ scale: isHovered ? 1.4 : 1 }}
      transition={{ duration: 0.2 }}
    />
  );
}

function CursorInner({ isHovered, mousePosition }) {
  const { x, y } = mousePosition;
  return (
    <motion.div
      className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
      style={{
        transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
      }}
      animate={{
        width: isHovered ? 56 : 38,
        height: isHovered ? 56 : 38,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <CursorRing isHovered={isHovered} />
      <CursorDot isHovered={isHovered} />
    </motion.div>
  );
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer");
      setIsHovered(!!target);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      <CursorInner isHovered={isHovered} mousePosition={mousePosition} />
    </div>
  );
}