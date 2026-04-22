"use client";
import { motion } from "motion/react";
import Link from "next/link";

export const Links = () => {
  return (
    <div className="text-primary flex flex-col gap-1 text-[14px]">
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.2,
          delay: 1.4,
        }}
      >
        <Link target="_blank" href={"https://x.com/rajveer_0077"}>
          Twitter
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.2,
          delay: 1.6,
        }}
      >
        <Link target="_blank" href={"https://github.com/malviya-rajveer"}>
          GitHub
        </Link>
      </motion.div>
    </div>
  );
};
