import Link from "next/link";
import { Bio } from "../components/About me/bio";
import { Logo } from "../components/About me/logo";
import { Links } from "../components/About me/links";
import { Projects } from "@/components/projects/projects";
import { MoreProjects } from "@/components/projects/MoreProjcts";

export default function Home() {
  return (
    <div className="font-inter flex min-h-screen items-center justify-center bg-white antialiased selection:bg-zinc-100">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center px-16 py-32 sm:items-start">
        <div className="flex w-full justify-center gap-6">
          <Logo />
          <Bio />
          <Links />
        </div>
        <div className="mt-14 ml-4 flex flex-col">
          <Projects />
          <MoreProjects />
        </div>
      </main>
    </div>
  );
}
