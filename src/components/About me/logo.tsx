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
      className="shadow-primary flex size-12 shrink-0 -translate-y-1 scale-75 items-center justify-center rounded-[12px] md:translate-x-1"
    >
      <div className="size-10 overflow-hidden rounded-lg">
        <Image
          src="/profile/chinnar.png"
          alt="Profile Picture"
          width={100}
          height={105}
          className="-translate-y-1"
        />
      </div>
    </motion.div>
  );
};
