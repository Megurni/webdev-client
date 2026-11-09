import type { ReactNode } from "react";
import GreenCheckmark from "./GreenCheckmark";

export default function Module({
  title,
  children,
  controls,
}: {
  title: ReactNode;
  children?: ReactNode;
  controls?: ReactNode;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
        <span className="min-w-0 flex-1">{title}</span>
        {controls ?? <GreenCheckmark />}
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
