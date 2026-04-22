"use client";

import { motion } from "motion/react";
import { Card } from "../ui/projectCard";
export const Projects = () => {
  return (
    <motion.div
      className="flex h-full w-full gap-3"
      initial={{
        opacity: 0,
        y: -5,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.85,
        duration: 0.2,
        ease: "easeOut",
      }}
    >
      <Card
        link="https://huly-nu.vercel.app/"
        heading="Huly "
        img2="/huly/image-2.png"
        img3="/huly/image-3.png"
        detail="A Product System"
        img="/huly/image-11.png"
      />
      <Card
        link="https://huly-nu.vercel.app/"
        heading="Kera"
        detail="AI integrated Processor"
        img3="/kera/image-11.png"
        img2="/kera/image-22.png"
        img="/kera/image-3.png"
      />{" "}
      <Card
        link="https://dimora.vercel.app/"
        heading="Dimora"
        detail="Modern architect agency"
        img3="/dimora/image-1.png"
        img2="/dimora/image-2.png"
        img="/dimora/image-3.png"
      />
    </motion.div>
  );
};
