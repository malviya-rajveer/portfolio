"use client";
import { cn } from "@/lib/utils";
import { AnimationSequence } from "motion";
import { useAnimate, motion, stagger } from "motion/react";
import { useEffect } from "react";

const Myself = "Hi, I'm Rajveer.";

const whatIthinkline1 = ` I think what makes a product go millione dollars in revenue,`;
const whatIthinkline2 =
  "in the world full of competition with same feauters even less pricing. Is that";
const whatIthinkline3 = "how the product feels to use.";

const MyselfwithNbsp = Myself.replace(/ /g, "\u00A0");
const whatIthinkline1withNbsp = whatIthinkline1.replace(/ /g, "\u00A0");
const whatIthinkline2withNbsp = whatIthinkline2.replace(/ /g, "\u00A0");
const whatIthinkline3withNbsp = whatIthinkline3.replace(/ /g, "\u00A0");
export const Bio = () => {
  // const{}
  // const matches = useMediaQuery("(min-width: 768px)");
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(startAnimation);
  }, []);

  const startAnimation: AnimationSequence = [
    [
      ".line1",
      { opacity: 1, y: 0, x: 0 },
      { duration: 0.15, delay: stagger(0.015) },
    ],
    [
      ".line2",
      { opacity: 1, y: 0, x: 0 },
      { duration: 0.15, delay: stagger(0.015), at: "-1" },
    ],
    [
      ".line3",
      { opacity: 1, y: 0, x: 0 },
      { duration: 0.15, delay: stagger(0.015), at: "-0.7" },
    ],
  ];
  return (
    <div ref={scope}>
      <div
        className={cn(
          "text-primary relative z-0 flex h-full -translate-x-1 flex-col text-[14px] text-pretty",
          "hidden md:flex md:max-w-125",
        )}
      >
        <div>
          <span className="flex">
            {MyselfwithNbsp.split("").map((char, idx) => {
              if (char === " ") {
                return <span key={idx}> </span>; // preserve space
              }
              return (
                <motion.span key={idx} className="overflow-hidden leading-snug">
                  {" "}
                  <motion.span
                    initial={{ y: 22, x: -2 }}
                    className="text-secondary line1 inline-block"
                  >
                    {char}
                  </motion.span>
                </motion.span>
              );
            })}

            {whatIthinkline1withNbsp.split("").map((char, idx) => {
              if (char === " ") {
                return <span key={idx}> </span>; // preserve space
              }
              return (
                <motion.span
                  key={idx}
                  className="translate-y-0.5 overflow-hidden leading-4"
                >
                  <motion.span
                    initial={{ y: 22, x: -2 }}
                    className="text-primary line1 inline-block overflow-hidden"
                  >
                    {char}
                  </motion.span>
                </motion.span>
              );
            })}
          </span>
        </div>
        <div className="translate-y-0">
          <span className="flex">
            {whatIthinkline2withNbsp.split("").map((char, idx) => {
              if (char === " ") {
                return (
                  <span className="" key={idx}>
                    {char}
                  </span>
                );
              }
              return (
                <span key={idx} className="overflow-hidden leading-snug">
                  <motion.span
                    initial={{
                      y: 20,
                      x: -2,
                    }}
                    className="line2 inline-block"
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        </div>
        <div className="translate-y-0">
          <span className="flex">
            {whatIthinkline3withNbsp.split("").map((char, idx) => {
              if (char === " ") {
                return (
                  <span className="" key={idx}>
                    {char}
                  </span>
                );
              }
              return (
                <span key={idx} className="overflow-hidden leading-snug">
                  <motion.span
                    key={idx}
                    initial={{
                      y: 20,
                      x: -2,
                    }}
                    className="line3 inline-block"
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        </div>
      </div>
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
          delay: 0.3,
          duration: 0.4,
          ease: "easeOut",
        }}
        className={cn(
          "text-primary relative z-0 h-full -translate-x-1 text-[14px] text-pretty",
          "md:hidden",
        )}
      >
        <span className="text-secondary">Hi, I'm Rajveer.</span> I think what
        makes a product go millione dollars in revenue,in the world full of
        competition with same feauters even less pricing. Is that how the
        product feels to use.
      </motion.div>
    </div>
  );
};
