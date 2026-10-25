import { ReactNode, Suspense } from "react";
import "./kambaz.css";
import KambazNavigation from "./Navigation";

export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz" className="font-sans">
      <Suspense fallback={null}><KambazNavigation /></Suspense>
      <div className="wd-main-content-offset p-3">{children}</div>
    </div>
  );
}
