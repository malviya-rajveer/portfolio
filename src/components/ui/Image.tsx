import { cn } from "@/lib/utils";
import { img } from "@/Ts/types";
import Image from "next/image";

export const Image_showcase = ({ className, img }: img) => {
  return (
    <div
      className={cn(
        "shadow-boxes w-20 rounded-[6px] bg-white p-[2px]",
        className,
      )}
    >
      <Image
        src={img}
        height={500}
        width={500}
        className={cn("h-19 w-20 rounded-sm bg-amber-300 object-cover")}
        alt=""
      ></Image>
    </div>
  );
};
