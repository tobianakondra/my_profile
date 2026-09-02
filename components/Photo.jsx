"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { PhotoStats } from "./PhotoStats";

const Photo = () => {
  const spinControls = useAnimation();

  const startSpin = (duration) => {
    spinControls.start({
      strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
      rotate: [120, 360],
      transition: { duration, repeat: Infinity, repeatType: "reverse" },
    });
  };

  useEffect(() => {
    startSpin(20);
  }, []);

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0, duration: 0.4, ease: "easeInOut" },
        }}
        className="relative"
      >
        <motion.div
          className="relative w-[300px] h-[300px] lg:w-[406px] lg:h-[406px]"
          whileHover="photoHover"
          onHoverStart={() => startSpin(5)}
          onHoverEnd={() => startSpin(20)}
        >
          <motion.div className="w-[298px] h-[298px] lg:w-[398px] lg:h-[398px] absolute">
            <Image
              src="/public/assets/photo.png"
              priority
              quality={100}
              fill
              alt="Richard Claude Emile Diatta"
              className="object-cover rounded-full"
            />
          </motion.div>

          <motion.svg
            className="w-[300px] h-[300px] lg:h-[406px] lg:w-[406px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
            variants={{ photoHover: { scale: 1.08 } }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#1d4ed8"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={spinControls}
            />
          </motion.svg>

          <PhotoStats />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;