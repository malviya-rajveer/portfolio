"use client";

import { motion } from "motion/react";
import { Card } from "../ui/projectCard";
export const Projects = () => {
  return (
    <motion.div
      className="grid h-full w-full grid-cols-2 gap-3 md:flex"
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
        link="https://quilio-login-page.vercel.app/"
        heading="Quilio Login"
        className="brightness-105"
        detail="Cripto Wallet"
        img3="/quilio/image1.png"
        img2="/quilio/image2.png"
        img="/quilio/image.png"
      />{" "}
      <Card
        link="https://dimora.vercel.app/"
        heading="Dimora"
        className=""
        detail="Modern architect agency"
        img3="/dimora/image-1.png"
        img2="/dimora/image-2.png"
        img="/dimora/image-3.png"
      />
    </motion.div>
  );
};
