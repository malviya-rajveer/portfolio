import Link from "next/link";
import { Bio } from "../components/About me/bio";
import { Logo } from "../components/About me/logo";
import { Links } from "../components/About me/links";
import { Projects } from "@/components/projects/projects";
import { MoreProjects } from "@/components/projects/MoreProjcts";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="font-inter flex min-h-screen items-center justify-center bg-white antialiased selection:bg-zinc-100">
      <main
        className={cn(
          "flex h-full w-full flex-col items-center px-2 py-32 sm:items-start md:max-w-3xl md:px-16",
        )}
      >
        <div className="flex w-full justify-center gap-3 md:gap-6">
          <Logo />
          <Bio />
          <Links />
        </div>
        <div className="mt-14 ml-4 flex w-full flex-col overflow-hidden pr-2.5 md:overflow-visible md:pr-0">
          <Projects />
          <MoreProjects />
        </div>
      </main>
    </div>
  );
}
