"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const statsData = [
  {
    num: 3,
    suffix: "+",
    text: "Années d'exp.",
    icon: <FaLaptopCode className="text-accent text-sm" />,
    position: "top-[-10px] left-[-30px] lg:top-[-15px] lg:left-[-60px]",
    delay: 0,
    floatDuration: 4.5,
    floatY: [-4, 9, -4],
  },
  {
    num: 6,
    suffix: "",
    text: "Techs clés",
    icon: <FaCode className="text-accent text-sm" />,
    position: "top-[20px] right-[-30px] lg:top-[15px] lg:right-[-55px]",
    delay: 0.2,
    floatDuration: 5,
    floatY: [5, -5, 5],
  },
];

export function PhotoStats() {
  return (
    <>
      {statsData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: item.floatY,
            transition: {
              opacity: { delay: 0.5 + item.delay, duration: 0.5 },
              scale: { delay: 0.5 + item.delay, duration: 0.5, type: "spring", stiffness: 200 },
              y: {
                delay: 0.8 + item.delay,
                duration: item.floatDuration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            },
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px rgba(29, 78, 216, 0.45)",
            borderColor: "rgba(29, 78, 216, 0.8)",
            transition: { duration: 0.2 },
          }}
          className={`absolute ${item.position} z-20 flex items-center gap-2.5 px-3 py-2 lg:px-4 lg:py-2.5 rounded-xl bg-surface/80 backdrop-blur-md border border-border shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-default select-none transition-colors group`}
        >
          <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
            {item.icon}
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-baseline gap-0.5">
              <CountUp
                end={item.num}
                duration={3.5}
                delay={0.5 + item.delay}
                className="text-base lg:text-lg font-extrabold text-foreground leading-none font-mono"
              />
              {item.suffix && (
                <span className="text-accent font-bold text-xs lg:text-sm font-mono leading-none">
                  {item.suffix}
                </span>
              )}
            </div>
            <span className="text-[10px] lg:text-[11px] font-medium text-muted-fg whitespace-nowrap leading-tight mt-0.5">
              {item.text}
            </span>
          </div>
        </motion.div>
      ))}
    </>
  );
}