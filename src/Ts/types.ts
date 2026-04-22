export interface ProjectCard {
  heading: string;
  detail: string;
  className?: string;
  img: string;
  img2: string;
  img3: string;
  link: string;
}

export type img = Pick<ProjectCard, "className" | "img">;


export interface linkProject {
  heading: string;
  className?: string;
  src: string;
  href:string;
  video?:boolean
}