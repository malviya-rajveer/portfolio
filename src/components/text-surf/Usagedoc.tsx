"use client";
import { cn } from "@/lib/utils";
import { Heading2 } from "./heading2";
import { Prism } from "react-syntax-highlighter";
import { Paragraph } from "./paragraph";
import { motion } from "motion/react";
import { useState } from "react";

export const myTheme = {
  'pre[class*="language-"]': {
    background: "",
    color: "#",
  },

  'code[class*="language-"]': {
    color: "#24292f",
    background: "transparent",
  },

  comment: {
    color: "#6e7781",
    fontStyle: "normal",
  },

  punctuation: {
    color: "#6f6f6f",
  },
  props: {
    color: "#6f6f6f",
  },

  keyword: {
    color: "#6f6f6f",
  },

  string: {
    color: "#6f6f6f",
  },

  function: {
    color: "#000000",
  },

  className: {
    color: "#953800",
  },

  "maybe-class-name": {
    color: "#000000",
  },

  builtin: {
    color: "#00000",
  },

  boolean: {
    color: "#0550ae",
  },

  number: {
    color: "#6f6f6f",
  },

  constant: {
    color: "#0550ae",
  },

  property: {
    color: "#0550ae",
  },

  operator: {
    color: "#24292f",
  },

  tag: {
    color: "#000000",
  },

  attrName: {
    color: "#0550ae",
  },

  attrValue: {
    color: "#FFD2D8",
  },

  regex: {
    color: "#0550ae",
  },

  entity: {
    color: "#6f6f6f",
  },

  url: {
    color: "#0a3069",
  },

  variable: {
    color: "#6f6f6f",
  },
};

const BasicUsage = `"use client";
import { TextSurf } from "@/components/ui/text-surf";
import Image from "next/image";

export default function Home() {
  return (      
    <TextSurf theme="light" varient="sunshine" 
      className="text-5xl">
      <div>
        Lets have some drinks {"  "}
        <Image
          src={"/drinks-3.svg"}
          className="relative scale-130 rotate-20"
          alt=""
          width={45}
          height={20}
        />{" "}</div>
       <br />  
       <div>and Takea flight.</div>
    </TextSurf> 
)};
    `;

const CustomeUsage = `"use client";
import { TextSurf } from "@/components/ui/text-surf";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  return (   
      <div
          ref={ref}
          className={cn("relative h-90 w-2xl",
          "overflow-x-hidden overflow-y-auto")}
        >
          <TextSurf
            scrollContainer={ref}
            theme="light"
            varient={"ocean"}
            duration={0.2}
            className="font-myfont w-full text-4xl"
          >  
            <div>
              Lets have some drinks <br />
              and Takea flight.
            </div>....
          </TextSurf>
      </div> 
)};`;

export const UsageDoc = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="my-16 flex w-full justify-center gap-2">
        <div className="h-0.5 w-4 rounded-full bg-neutral-200"></div>
        <div className="h-0.5 w-4 rounded-full bg-neutral-200"></div>
        <div className="h-0.5 w-4 rounded-full bg-neutral-200"></div>
        <div className="h-0.5 w-4 rounded-full bg-neutral-200"></div>
        <div className="h-0.5 w-4 rounded-full bg-neutral-200"></div>
        <div className="h-0.5 w-4 rounded-full bg-neutral-200"></div>
      </div>
      <div className="w-full">
        <Heading2>Basic Usage</Heading2>
        <Paragraph>{`Use <divs/> inside for more structured code and <br/> for breaking lines.`}</Paragraph>
        <CodeBlock code={BasicUsage} />
        <Heading2 className="mt-16">Inside a Custom Scroll Container</Heading2>
        <Paragraph>
          Pass a scrollContainer when the animation should respond to scrolling
          within an element instead of the browser window.
        </Paragraph>
        <CodeBlock code={CustomeUsage} />
      </div>
    </div>
  );
};

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  async function Copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div
      className={cn(
        "shadow-subtel relative mt-4 w-full overflow-auto rounded-2xl border border-black/5 bg-white bg-linear-to-t from-zinc-50/30 p-8",
      )}
    >
      <button
        onClick={Copy}
        className={cn(
          "absolute top-4 right-4 flex items-center rounded-2xl border-neutral-400 p-1",
        )}
      >
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
            fill="black"
            className="icon icon-tabler icons-tabler-filled icon-tabler-check scale-80"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20.707 6.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1 -1.414 0l-5 -5a1 1 0 0 1 1.414 -1.414l4.293 4.293l9.293 -9.293a1 1 0 0 1 1.414 0" />
          </motion.svg>
        )}
      </button>
      <Prism className="text-sm" language="tsx" style={myTheme}>
        {code}
      </Prism>
    </div>
  );
};
