"use client";

import React, { RefObject, useMemo, useRef, useState } from "react";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

type Unit =
  | {
      type: "char";
      value: string;
    }
  | {
      type: "element";
      value: React.ReactNode;
    }
  | {
      type: "br";
    };

type theme = "dark" | "light";
const Pallate = {
  sunshine: [
    "#000000",
    "#FF7C24",
    "#FF7C24",
    "#FF7C24",
    "#FFEA75",
    "#FF7C24",
    "#FFEF42",
    "#B8F7F2",
    "#B8F7F2",
    "#B8F7F2",
    "#B8F7F2",
    "#218DFA",
    "#000000",
  ],
  sunsetswim: [
    "#A00006",
    "#FE000A",
    "#FF5C63",
    "#FF5C63",
    "#7AE5FF",
    "#7AE5FF",
    "#299BFF",
    "#023C6F",
    "#023C6F",
    "#000000",
  ],
  dawn: [
    "#FEAA7B", // Bottom - warm orange
    "#FECDBF", // Peach
    "#FFD2D8", // Soft pink
    "#F1C0E0", // Pink-lavender
    "#CFA8E1", // Lavender
    "#A691DC", // Light purple
    "#000000",
  ],
  ocean: [
    "#DBE3D0", // Soft sage
    "#8DB8A7", // Muted seafoam
    "#2D8E9A", // Teal
    "#076492", // Ocean blue
    "#076492", // Ocean blue
    "#DBE3D0",
    "#DBE3D0",
    "#DBE3D0",
    "#154288", // Deep cobalt
    "#262C81", // Indigo
    "#000000",
  ],
};

type varient = keyof typeof Pallate;

function collectUnits(node: React.ReactNode, units: Unit[] = []): Unit[] {
  // text
  if (typeof node === "string") {
    node.split("").forEach((char) => {
      units.push({
        type: "char",
        value: char,
      });
    });

    return units;
  }

  // number
  if (typeof node === "number") {
    return collectUnits(String(node), units);
  }

  // array
  if (Array.isArray(node)) {
    node.forEach((child) => collectUnits(child, units));
    return units;
  }

  // react element
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    // preserve <br />
    if (node.type === "br") {
      units.push({
        type: "br",
      });

      return units;
    }
    const hasChildren = node.props && node.props.children !== undefined;

    // native html tags that contain text
    if (typeof node.type === "string" && hasChildren) {
      collectUnits(node.props.children, units);
      return units;
    }

    // custom components, svg, icons etc.
    units.push({
      type: "element",
      value: node,
    });

    return units;
  }

  return units;
}

function RevealUnit({
  children,
  index,
  total,
  unit,
  progress,
  varient,
  theme,
  duration,
}: {
  children: React.ReactNode;
  index: number;
  total: number;
  unit: Unit;
  progress: MotionValue<number>;
  varient: varient;
  theme: theme;
  duration: number;
}) {
  const start = (index + 1) / total;
  const [active, setActive] = useState(false);
  useMotionValueEvent(progress, "change", (latest) => {
    setActive(latest >= start);
  });

  const textTheme = theme === "dark" ? "#FFFFFF" : "#000000";
  const pallate = Pallate[varient].map((color) =>
    color === "#000000" ? textTheme : color,
  );
  return (
    <motion.span
      animate={
        active
          ? unit.type === "char"
            ? {
                opacity: 1,
                color: pallate,
                transition: {
                  duration: duration || 0.2,
                },
              }
            : {
                opacity: 1,
                scale: [0, 1.3, 0.92, 1],
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              }
          : { opacity: 0 }
      }
      transition={{
        duration: 0,
        ease: "easeOut",
      }}
      className="relative inline-flex font-extralight"
    >
      {children}{" "}
    </motion.span>
  );
}

export function TextSurf({
  children,
  className,
  varient = "sunshine",
  theme = "light",
  duration = 0.2,
  scrollContainer,
}: {
  children: React.ReactNode;
  className: string;
  scrollContainer?: RefObject<HTMLElement | null>;
  varient?: varient;
  duration?: number;
  theme?: theme;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: scrollContainer,
    target: containerRef,
    offset: ["start 0%", "end 100%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.0005,
  });

  const units = useMemo(() => collectUnits(children), [children]);

  return (
    <section
      ref={containerRef}
      className={cn("relative min-h-[220vh]", className)}
    >
      <div className="sticky top-5 flex items-center justify-center">
        {/* {mount && ( */}
        <div className="items-center gap-[1px] leading-tight font-bold">
          {units.map((unit, index) => {
            if (unit.type === "br") {
              return <br key={index} />;
            }
            return (
              <span key={index}>
                <RevealUnit
                  theme={theme}
                  index={index}
                  unit={unit}
                  duration={duration}
                  total={units.length}
                  progress={smoothProgress}
                  varient={varient}
                >
                  {unit.type === "char"
                    ? unit.value === " "
                      ? "\u00A0"
                      : unit.value
                    : unit.value}
                </RevealUnit>
              </span>
            );
          })}
        </div>
        {/* )} */}
      </div>
    </section>
  );
}
