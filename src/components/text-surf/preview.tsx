"use client";
import Image from "next/image";
import { TextSurf } from "@/components/ui/text-surf";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
const Gradinet_Options: { name: varient; bg: string; blur: string }[] = [
  {
    name: "sunshine",
    bg: "bg-[linear-gradient(to_top,#FF7C24_0%,#FFEA75_23%,#FF7C24_41%,#FFEF42_50%,#B8F7F2_58%,#B8F7F2_66%,#B8F7F2_75%,#B8F7F2_83%,#218DFA_100%)] ",
    blur: "blur-[2px]",
  },
  {
    name: "sunsetswim",
    bg: "bg-[linear-gradient(to_top,#A00006_0%,#FE000A_1%,#F380DD_19%,#7AE5FF_44%,#7AE5FF_55%,#299BFF_66%,#023C6F_100%)] ",
    blur: "blur-[3px]",
  },
  {
    name: "dawn",
    bg: "bg-[linear-gradient(to_top,#FEAA7B_0%,#FECDBF_17%,#FFD2D8_33%,#F1C0E0_50%,#CFA8E1_67%,#A691DC_100%)]",
    blur: "",
  },
  {
    name: "ocean",
    bg: "bg-[linear-gradient(to_top,#DBE3D0_0%,#8DB8A7_30%,#076492_50%,#DBE3D0_70%,#DBE3D0_90%,#154288_100%)] ",
    blur: "blur[3px]",
  },
];

type varient = "sunshine" | "sunsetswim" | "ocean" | "dawn";
const animate = {
  hover: { scale: [1, 1.1], transition: { duration: 0.1 } },
};
const opacity = {
  hover: { opacity: 1, transition: { duration: 0 } },
};
export const Preview = () => {
  const [varient, setvarient] = useState<varient>();
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <div className="mt-16 flex w-full flex-col">
      {" "}
      <div className="relative flex">
        <div
          ref={ref}
          className="relative h-90 w-full overflow-x-hidden overflow-y-auto"
        >
          <TextSurf
            scrollContainer={ref}
            theme="light"
            varient={varient}
            duration={0.2}
            className="font-myfont w-full text-4xl"
          >
            <div className="">
              Lets have some drinks{"   "}
              <Image
                loading="eager"
                src={"/text-surf/drinks-3.svg"}
                className="relative scale-130 rotate-20"
                alt=""
                width={40}
                height={20}
              />{" "}
              and T- -ake a {""}flight{"  "}
              <Image
                loading="eager"
                src={"/text-surf/plane.svg"}
                className="relative top-1 scale-140"
                alt=""
                width={37}
                height={50}
              />
              {"  "}
              to hawaii
              {"   "}
              <Image
                loading="eager"
                src={"/text-surf/pinkflower.svg"}
                className="relative top-3 scale-200"
                alt=""
                width={38}
                height={50}
              />
              {"  "}
            </div>
            <div>
              and eat{"   "}
              <Image
                loading="eager"
                src={"/text-surf/watermelon.svg"}
                className="relative left-2 scale-230"
                alt=""
                width={32}
                height={50}
              ></Image>
              {"     "}at the beach.
            </div>
            <br />
            <br />
            And hit a japnese restraunt{"    "}
            <Image
              loading="eager"
              src={"/text-surf/japan.svg"}
              className="relative left-2 scale-300 rotate-6"
              alt=""
              width={30}
              height={50}
            ></Image>
            {"    "}
            at NYC.
          </TextSurf>
        </div>
        <ScrollIt />
      </div>
      <div className="mt-0 flex h-20 w-full flex-col items-center justify-center">
        <div className="mt-4 flex justify-center gap-4">
          {Gradinet_Options.map((data, idx) => {
            return (
              <motion.button
                initial={{
                  scale: 1,
                }}
                whileHover="hover"
                variants={animate}
                key={idx}
                className={cn(
                  "relative flex size-11 cursor-pointer flex-col items-center rounded-full ring-2 ring-violet-300",
                  data.bg,
                  varient === data.name
                    ? "ring-2 ring-neutral-500 ring-offset-1 transition-all duration-200"
                    : " ",
                )}
                onClick={() => setvarient(data.name)}
              >
                <div
                  className={cn("h-full w-full rounded-full", data.blur)}
                ></div>
                <motion.div
                  variants={opacity}
                  initial={{
                    opacity: 0,
                  }}
                  className="text-tertiary pointer-events-none translate-y-8 text-center text-sm"
                >
                  {data.name}
                </motion.div>
              </motion.button>
            );
          })}
        </div>
        {/* <Buttons setvarient={setvarient} varient={varient}></Buttons> */}
      </div>
    </div>
  );
};

const ScrollIt = () => {
  return (
    <div className="absolute right-0 hidden h-full translate-x-16 flex-col items-center justify-center gap-2 text-sm font-normal text-black md:flex">
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
        className=""
      >
        Scroll It{" "}
      </motion.span>
      <svg
        width="18"
        height="33"
        viewBox="0 0 18 33"
        fill="none"
        className="translate-y-4 scale-200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.6483 4.58632C3.58239 4.60397 3.51079 4.60036 3.44975 4.54831L0.11086 2.45607C0.0278567 2.40991 -0.0169118 2.3307 0.00422259 2.23384C0.025357 2.13697 0.0578924 2.08265 0.140062 2.03783L3.51307 0.0396049C3.67171 -0.0713047 3.89875 0.0730661 3.93295 0.200706C3.98342 0.301187 3.93461 0.382665 3.83618 0.454643L1.1856 1.98569L2.56232 2.02721C2.68356 2.04033 2.78367 2.15031 2.76823 2.26845C2.7585 2.40786 2.64379 2.507 2.52255 2.49388L1.1019 2.46413L3.7434 4.15042C3.85407 4.21197 3.89397 4.36088 3.80693 4.47541C3.75813 4.55688 3.7142 4.56866 3.6483 4.58632Z"
          fill="#020203"
        />
        <path
          d="M12.3392 32.0125C12.2513 32.0361 12.152 32.0171 12.0796 31.9225C12.0072 31.8279 12.0389 31.6826 12.1373 31.6106C12.3944 31.4277 13.3006 30.5921 13.4039 30.4504C13.4633 30.3205 13.6171 30.2793 13.7277 30.3408C13.8604 30.3965 13.906 30.5667 13.8409 30.6753C13.7213 30.8442 12.7004 31.779 12.4271 31.989L12.3392 32.0125ZM14.7592 29.3576C14.6876 29.354 14.4883 29.225 14.5582 29.0467C14.5688 28.9983 14.7323 28.8176 15.139 28.1386L15.4692 27.5258C15.5229 27.3746 15.6424 27.2057 15.8198 27.3406C16.0298 27.4211 15.9436 27.6266 15.8785 27.7353C15.8622 27.7624 15.5263 28.3541 14.9781 29.2078C14.9293 29.2893 14.8691 29.3282 14.7592 29.3576ZM16.5071 26.0392C16.3037 26.0709 16.1425 25.9089 16.2182 25.7518C16.3532 25.4648 16.6158 24.6876 16.7809 24.0734C16.8183 23.9494 16.933 23.8502 17.0656 23.9059C17.2145 23.9344 17.2764 24.0774 17.239 24.2014C17.0797 24.837 16.8113 25.5929 16.682 25.9011C16.6552 25.9767 16.595 26.0157 16.5071 26.0392ZM17.3835 22.5439C17.1744 22.5543 17.0686 22.423 17.1003 22.2778C17.1514 21.8536 17.2115 21.1991 17.1715 20.4346C17.1909 20.1558 17.6083 20.044 17.6336 20.402C17.646 21.1511 17.581 21.8753 17.5738 22.2877C17.5641 22.4271 17.5153 22.5086 17.3835 22.5439ZM17.3045 18.7345C17.1451 18.7544 17.0287 18.6716 17.0165 18.5381C16.8837 17.8668 16.7925 17.5265 16.5718 16.8788C16.5254 16.6176 16.942 16.4148 17.0332 16.7552C17.2538 17.4029 17.3638 17.989 17.4672 18.4629C17.5014 18.5905 17.4363 18.6992 17.3045 18.7345ZM16.1289 15.4014C16.0353 15.4037 15.9304 15.3634 15.8799 15.2629C15.5169 14.699 15.1767 14.2201 14.7933 13.844C14.5321 13.572 14.9421 13.2569 15.1708 13.5832C15.5322 13.9652 15.9001 14.4595 16.2248 15.0565C16.342 15.2303 16.2387 15.372 16.1289 15.4014ZM13.6711 12.7311C13.6052 12.7487 13.5336 12.7451 13.4725 12.6931C12.9517 12.331 12.4098 12.0658 11.8686 11.8916C11.5651 11.8133 11.7099 11.3869 12.0191 11.4865C12.6098 11.6702 13.1852 11.972 13.706 12.3341C13.8996 12.4418 13.8248 12.6899 13.6711 12.7311Z"
          fill="#020203"
        />
        <path
          d="M10.2063 11.9266C10.0574 11.8981 9.95733 11.7881 9.96136 11.6274L9.9825 11.5305C9.58055 11.5242 8.96379 11.5071 8.2714 11.647C7.95815 11.7082 7.85471 11.2343 8.18993 11.1672C8.94822 11.0097 9.63088 11.0091 10.0882 11.0462C10.2166 10.647 10.3117 10.2111 10.3466 9.81412C10.3938 9.55068 10.834 9.52394 10.8096 9.87247C10.7325 10.4632 10.6057 11.0444 10.4195 11.7555C10.3764 11.8582 10.3219 11.9184 10.2063 11.9266ZM5.07733 13.3465C4.82999 13.39 4.66232 13.1157 4.85349 12.9505C5.30091 12.5114 5.83133 12.1184 6.40652 11.8047C6.66443 11.7128 6.93708 12.0274 6.63036 12.2007C6.11538 12.4755 5.66142 12.8024 5.19774 13.2686C5.1595 13.3017 5.12127 13.3347 5.07733 13.3465Z"
          fill="#020203"
        />
        <path
          d="M5.76245 17.2214L5.63065 17.2568C5.29543 17.3238 5.1375 16.9101 5.48328 16.7946C5.95029 16.6923 6.37825 16.532 7.02907 16.0612C7.33578 15.8878 7.6475 16.2603 7.34078 16.4337C6.87056 16.7877 6.35558 17.0625 5.76245 17.2214ZM8.52357 15.1364C8.32016 15.1681 8.14192 14.9422 8.30542 14.7616C8.69751 14.2917 9.07249 13.758 9.26687 13.3412C9.45067 12.9727 9.85999 13.1822 9.71442 13.5176C9.28576 14.2025 8.97015 14.6063 8.70417 15.0196C8.64967 15.0798 8.61144 15.1128 8.52357 15.1364ZM3.88521 16.63C3.76968 16.6382 3.6647 16.5979 3.6362 16.4915C3.29433 15.8307 3.44713 15.0829 3.66264 14.5692C3.79765 14.2822 4.2338 14.4161 4.12646 14.7185C3.97519 15.0327 3.81098 15.7379 4.07472 16.2828C4.16426 16.4412 4.06095 16.5829 3.88521 16.63ZM10.6831 8.08231C10.5456 8.09635 10.4073 8.01942 10.3894 7.86462C10.2834 7.11778 10.1417 6.67692 10.0115 6.27861C9.95364 5.9749 10.371 5.86306 10.4614 6.11246C10.6926 6.71173 10.8131 7.24945 10.8735 7.8261C10.8808 8.02933 10.7767 8.08004 10.6831 8.08231ZM9.33828 4.90855C9.26668 4.90493 9.16741 4.88593 9.08358 4.74879C8.78327 4.41884 8.20141 4.00473 7.73106 3.74315C7.50888 3.52907 7.78139 3.22805 7.98647 3.3783C8.45682 3.63989 9.07204 4.09066 9.48386 4.57313C9.58966 4.70439 9.54739 4.89812 9.33828 4.90855ZM6.22727 3.05166C6.18333 3.06343 6.16136 3.06931 6.11173 3.05981C5.54864 2.89148 4.98068 2.79286 4.34113 2.69062C3.99938 2.64538 4.08308 2.16694 4.43053 2.23345C5.05869 2.29314 5.61038 2.41893 6.2174 2.57548C6.52091 2.65376 6.42497 2.99868 6.22727 3.05166Z"
          fill="#020203"
        />
      </svg>
    </div>
  );
};
