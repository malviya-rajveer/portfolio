import Image from "next/image";
import { CopyPasteBlock } from "@/components/ui/CopyPasteBlock";
import Link from "next/link";
import { IconBrandGithub, IconBrandX, IconHome } from "@tabler/icons-react";
import { Preview } from "@/components/text-surf/preview";
import { UsageDoc } from "@/components/text-surf/Usagedoc";
import { Props } from "@/components/text-surf/props";
export default function home() {
  return (
    <div className="min-h-screen w-full bg-white antialiased">
      <div className="relative mx-auto flex h-full w-full flex-col px-2 md:max-w-xl">
        <nav className="mt-4 flex justify-between gap-2">
          <Link
            className="shadow-subtel shrink-0 rounded-xl border border-black/5 p-2 px-2.5"
            href={"/"}
          >
            <IconHome size={20} className="stroke-black" />{" "}
          </Link>
          <div className="flex shrink-0 gap-2">
            <Link
              target="_blank"
              className="shadow-subtel flex items-center gap-1 rounded-xl border border-black/5 px-2 text-[14px] font-medium text-black"
              href={"https://github.com/malviya-rajveer"}
            >
              <IconBrandGithub size={17} className="stroke-black" />
              GitHub
            </Link>
            <Link
              target="_blank"
              className="shadow-subtel shrink-0 rounded-xl border border-black/5 p-2 px-2.5"
              href={"https://x.com/rajveer_0077/"}
            >
              <IconBrandX size={17} className="stroke-black" />{" "}
            </Link>
          </div>
        </nav>
        <h1 className="font-myfont flex justify-center gap-3 pt-24 text-[60px] font-medium text-black">
          Text surf
          <Image
            className="-translate-y-2"
            src={"/emoji/wave.svg"}
            width={65}
            height={100}
            alt=""
          ></Image>
        </h1>
        <CopyPasteBlock
          code="npx shadcn add https://www.rajveeer.xyz/r/text-surf%20component.json"
          className="mx-auto mt-8 flex w-80 cursor-pointer justify-between rounded-2xl border border-black/5 bg-white bg-linear-to-t from-gray-50/30 px-4 py-2 text-[15px] text-neutral-900"
        />
        <Preview />
        <UsageDoc />
        <Props />
        <footer className="flex items-center justify-center gap-2 py-16 text-sm text-black">
          <Image alt="" src={"/profile.svg"} width={30} height={40} />
          <div className=" ">
            By{" "}
            <Link
              href={"/"}
              className="cursor-pointer font-semibold transition-all duration-100 hover:border-b hover:border-black"
            >
              Rajveer Malviya
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
