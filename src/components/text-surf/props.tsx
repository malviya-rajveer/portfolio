import { Heading2 } from "./heading2";

export const Props = () => {
  return (
    <div className="flex h-auto w-full flex-col">
      <div className="my-16 flex w-full justify-center gap-2">
        <div className="h-0.5 w-4 rounded-full bg-neutral-200"></div>
        <div className="h-0.5 w-4 rounded-full bg-neutral-200"></div>
        <div className="h-0.5 w-4 rounded-full bg-neutral-200"></div>
        <div className="h-0.5 w-4 rounded-full bg-neutral-200"></div>
        <div className="h-0.5 w-4 rounded-full bg-neutral-200"></div>
        <div className="h-0.5 w-4 rounded-full bg-neutral-200"></div>
      </div>
      <Heading2 className="">Props</Heading2>
      {/* <Paragraph>Children</Paragraph>  */}
      <div className="my-4">
        <Table prop="children" options="React.ReactNode"></Table>
        <Table prop="varient" options="presets" defaultvalue="sunshine"></Table>
        <Table prop="scrollContainer" options="useRef()"></Table>
        <Table prop="theme" options="dark | light" defaultvalue="light"></Table>
        <Table prop="duration" options="number" defaultvalue="0.2"></Table>
        <Table prop="className" options="string"></Table>
      </div>
    </div>
  );
};

const Table = ({
  prop,
  options,
  defaultvalue,
}: {
  prop: string;
  options: string;
  defaultvalue?: string;
}) => {
  return (
    <div className="grid w-full grid-cols-10 items-center border-b border-neutral-200 py-2 text-sm">
      <div className="col-span-4 md:col-span-3">
        <div className="w-fit rounded-md border border-neutral-300 bg-neutral-100/70 px-4 py-1 text-[14px] font-medium text-neutral-700">
          {prop}
        </div>
      </div>
      <div className="text-tertiary col-span-4 md:col-span-5">{options}</div>
      <div className="text-tertiary col-span-2">{`"${defaultvalue}"`}</div>
    </div>
  );
};

// children,
// className,
// varient = "sunshine",
// theme = "light",
// duration = 0.2,
// scrollContainer,
