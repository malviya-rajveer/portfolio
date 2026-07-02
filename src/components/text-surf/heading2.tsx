import { cn } from "@/lib/utils";

export const Heading2 = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  return (
    <div className={cn("text-[16px] font-medium text-neutral-800", className)}>
      {children}
    </div>
  );
};
