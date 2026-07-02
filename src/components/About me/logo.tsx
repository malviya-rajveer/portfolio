"use client";
import { motion } from "motion/react";
import Image from "next/image";

export const Logo = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -5,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="flex size-12 shrink-0 -translate-y-1 scale-75 items-center justify-center md:translate-x-1"
    >
      <div className="size-12 rounded-lg">
        <Image
          src="/profile.svg"
          alt="Profile Picture"
          width={100}
          height={105}
          className="-translate-y-0.5"
        />
      </div>
    </motion.div>
  );
};
