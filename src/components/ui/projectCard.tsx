"use client";
import { IconExternalLink } from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Image_showcase } from "../ui/Image";
import Link from "next/link";
import { ProjectCard } from "@/Ts/types";
export const Card = ({
  heading,
  link,
  detail,
  className,
  img,
  img2,
  img3,
}: ProjectCard) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="hover:bg-hover relative z-0 flex h-47 w-50 flex-col rounded-lg transition-colors duration-200"
    >
      <Link
        target="_blank"
        href={link}
        className="absolute inset-0 z-10 cursor-pointer"
      ></Link>
      <div className="relative translate-x-1 mask-b-from-0% p-2.5">
        <Image
          src={"/chinnar-removebg.png"}
          height={20}
          width={20}
          className="absolute -top-[2px] -left-[1px] scale-60 rotate-160 mask-t-from-50% opacity-85"
          alt=""
        ></Image>
        <Image
          src={"/chinnar-removebg.png"}
          height={20}
          width={20}
          className="-rotate-95 opacity-85"
          alt="tree"
        ></Image>
      </div>
      <div className="-mt-2 pl-2.5">
        <div className="text-primary flex items-center gap-1 text-[16px]">
          {heading}{" "}
          <IconExternalLink
            size={15}
            strokeWidth={0.8}
            className="stroke-tertiary"
          ></IconExternalLink>
        </div>{" "}
        <div className="text-tertiary mt-0.5 text-[14px] leading-snug">
          {detail}
        </div>
      </div>
      <div className="relative z-0 mt-4 ml-2.5 flex w-full">
        <motion.div
          className="z-0"
          initial={{
            rotate: 0,
          }}
          animate={
            !hover
              ? {
                  rotate: -2,
                }
              : {
                  rotate: 0,
                }
          }
          transition={{
            duration: 0.17,
            ease: "easeInOut",
          }}
        >
          <Image_showcase className="" img={img}></Image_showcase>
        </motion.div>
        <motion.div
          initial={{
            rotate: 0,
            translateX: 10,
          }}
          animate={
            !hover
              ? {
                  rotate: 0,
                  translateX: 0,
                }
              : {
                  rotate: 0,
                  translateX: 10,
                }
          }
          transition={{
            duration: 0.17,
            ease: "easeInOut",
          }}
          className="z-10 -translate-x-10"
        >
          <Image_showcase img={img2}></Image_showcase>
        </motion.div>
        <motion.div
          initial={{
            rotate: 0,
            translateX: -60,
          }}
          animate={
            !hover
              ? {
                  rotate: 5,
                  translateX: -80,
                }
              : {
                  rotate: 0,
                  translateX: -60,
                }
          }
          transition={{
            duration: 0.17,
            ease: "easeInOut",
          }}
          className="z-20 translate-x-0 translate-y-0"
        >
          <Image_showcase className="" img={img3}></Image_showcase>
        </motion.div>
      </div>
    </motion.div>
  );
};
