"use client";
import { cn } from "@/lib/utils";
import { linkProject } from "@/Ts/types";
import { IconExternalLink } from "@tabler/icons-react";
import { motion, useMotionValue } from "motion/react";
import { useState } from "react";

export const LinkProject = ({
  src,
  heading,
  className,
  video = false,
  href,
}: linkProject) => {
  const [hover, setHover] = useState(false);

  const [hoverImage, setHoverImage] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseY.set(e.clientY - rect.top);
    mouseX.set(e.clientX - rect.left);
  };

  // const MouseX=

  return (
    <motion.a
      href={href}
      target="_blank"
      onMouseEnter={() => {
        setHover(true);
        setHoverImage(true);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setHover(false);
        }, 200);
        setHoverImage(false);
      }}
      onMouseMove={handleMouseMove}
      animate={
        hover
          ? { backgroundColor: "var(--color-hover)" }
          : { backgroundColor: "var(--color-white)" }
      }
      transition={{
        duration: 0,
        ease: "easeInOut",
      }}
      className={cn(
        "text-tertiary hover:bg-hover relative z-0 mt-1 flex w-full",
        "cursor-pointer items-center justify-between text-[13.5px] transition-colors duration-200 ease-in-out",
      )}
    >
      {hoverImage && !video ? (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            imageRendering: "crisp-edges",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1], scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="shadow-pop pointer-events-none absolute z-100 flex h-28 w-28 -translate-x-10 -translate-y-0 items-center justify-center rounded-lg bg-white object-cover p-[2px]"
        >
          <motion.img
            src={src}
            alt=""
            className={cn(
              "pointer-events-none absolute z-100 h-27 w-27 rounded-lg object-cover",
              className,
            )}
          />
        </motion.div>
      ) : (
        <div className="hidden" />
      )}
      {hoverImage && video ? (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            imageRendering: "crisp-edges",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1], scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="shadow-pop pointer-events-none absolute z-100 flex h-28 w-28 -translate-x-13 -translate-y-21 items-center justify-center rounded-lg bg-white object-cover p-[2px]"
        >
          <video
            src={src}
            autoPlay
            muted
            playsInline
            loop
            className={cn(
              "pointer-events-none absolute z-100 h-27 w-27 rounded-lg object-cover",
              className,
            )}
          />
        </motion.div>
      ) : (
        <div className="hidden" />
      )}
      <motion.div className="py-1.5 leading-snug">{heading}</motion.div>

      <IconExternalLink
        size={20}
        strokeWidth={0.8}
        className="stroke-tertiary"
      ></IconExternalLink>
    </motion.a>
  );
};
