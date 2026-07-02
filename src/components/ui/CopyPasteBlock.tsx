"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "motion/react";

export const CopyPasteBlock = ({
  className,
  code,
}: {
  className: string;
  code: string;
}) => {
  const [copied, setCopied] = useState(false);

  async function Copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <button
      onClick={Copy}
      className={cn(
        "shadow-subtel flex items-center overflow-hidden",
        className,
      )}
    >
      <div className="w-50 mask-r-from-70% mask-r-to-100% text-nowrap">
        $ {code}
      </div>
      {copied === false ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-copy scale-70 stroke-neutral-400"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
          <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
        </svg>
      ) : (
        <motion.svg
          initial={{
            scale: 1,
          }}
          animate={
            copied
              ? {
                  scale: [1, 0.75, 1],
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }
              : {}
          }
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon icon-tabler icons-tabler-filled icon-tabler-check scale-80"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M20.707 6.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1 -1.414 0l-5 -5a1 1 0 0 1 1.414 -1.414l4.293 4.293l9.293 -9.293a1 1 0 0 1 1.414 0" />
        </motion.svg>
      )}
    </button>
  );
};
