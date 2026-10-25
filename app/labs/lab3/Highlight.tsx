import type { ReactNode } from "react";
export default function Highlight({ children }: { children: ReactNode }) {
  return <span style={{ backgroundColor: "yellow", color: "red", padding: 4 }}>{children}</span>;
}
