import type { ReactNode } from "react";
import { Suspense } from "react";
import TOC from "./TOC";

export default function LabsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <table><tbody><tr>
      <td valign="top" width="160"><Suspense fallback={null}><TOC /></Suspense></td>
      <td valign="top">{children}</td>
    </tr></tbody></table>
  );
}
