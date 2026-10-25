import type { ReactNode } from "react";
export default function Square({ children }: { children: ReactNode }) {
  const number = Number(children);
  return <p>Square of {number} = {number * number}</p>;
}
