"use client";
import { motion } from "motion/react";
import { LinkProject } from "./link-project";

export const MoreProjects = () => {
  return (
    <div className="mt-10">
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
          delay: 2.2,
          duration: 0.2,
          ease: "easeOut",
        }}
        className="text-tertiary text-[16px] leading-snug"
      >
        More Components / Projects
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
          delay: 2.4,
          duration: 0.2,
          ease: "easeOut",
        }}
        className="mt-2"
      >
        {" "}
        <LinkProject
          href="https://quilio-login-page.vercel.app/"
          heading="Quilio Login"
          className="brightness-105"
          src="/quilioLogin.png
          "
          posterImage="/posterImages/osloAI.png"
        />
        <LinkProject
          href="https://oslo-ai.vercel.app/"
          heading="Oslo AI"
          className="brightness-105"
          src="/videos/6.mp4"
          posterImage="/posterImages/osloAI.png"
          video
        />{" "}
        <LinkProject
          href="https://pro-website-nine.vercel.app/"
          heading="Shia Devs"
          className="brightness-200"
          src="/videos/2.mp4"
          posterImage="/posterImages/shiaDevs.png"
          video
        />
        <LinkProject
          href="https://ruby-arc-button.vercel.app/"
          heading="Ruby Arc"
          className="brightness-150"
          posterImage="/posterImages/rubyArc.png"
          src="/videos/1.mp4"
          video
        />
        <LinkProject
          href="https://shimmer-psi.vercel.app/"
          heading="Shimmer"
          className="brightness-110"
          src="/videos/4.mp4"
          posterImage="/posterImages/shimmer.png"
          video
        />
      </motion.div>
    </div>
  );
};
