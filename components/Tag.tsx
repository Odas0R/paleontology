import { ComponentPropsWithoutRef } from "react";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

const classes = {
  base: "text-xs h-7 px-2 inline-flex font-medium items-center ring-1 rounded-full ml-auto",
  color: {
    yellow: "ring-yellow-100 bg-yellow-700/80 text-yellow-100",
    indigo: "ring-indigo-100 bg-indigo-700/80 text-indigo-100",
    blue: "ring-blue-100 bg-blue-700/80 text-blue-100",
    amber: "ring-amber-100 bg-amber-700/80 text-amber-100",
    teal: "ring-teal-100 bg-teal-700/80 text-teal-100",
    cyan: "ring-cyan-100 bg-cyan-700/80 text-cyan-100",
    green: "ring-green-100 bg-green-700/80 text-green-100",
    gray: "ring-gray-100 bg-gray-700/80 text-gray-100",
    slate: "ring-slate-100 bg-slate-700/80 text-slate-100",
    orange: "ring-orange-100 bg-orange-700/80 text-orange-100",
    purple: "ring-purple-100 bg-purple-700/80 text-purple-100",
    rose: "ring-rose-100 bg-rose-700/80 text-rose-100",
  },
};

export type TagColor =
  | "yellow"
  | "teal"
  | "blue"
  | "amber"
  | "indigo"
  | "cyan"
  | "green"
  | "gray"
  | "slate"
  | "orange"
  | "purple"
  | "rose";

export type TagProps = {
  color: TagColor;
} & ComponentPropsWithoutRef<"div">;

export default function Tag({ color, children, ...otherProps }: TagProps) {
  const className = classNames(
    classes.base,
    classes.color[color],
    otherProps.className ?? "",
  );
  return (
    <div {...otherProps} className={className}>
      {children}
    </div>
  );
}
