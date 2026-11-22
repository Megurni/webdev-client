import { ReactNode, Suspense } from "react";
import "./kambaz.css";
import { AccountProvider } from "./account/AccountContext";
import Session from "./account/Session";
import KambazNavigation from "./Navigation";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <AccountProvider>
      <Session>
      <div id="wd-kambaz" className="font-sans">
        <Suspense fallback={null}>
          <KambazNavigation />
        </Suspense>
        <div className="wd-main-content-offset p-3">{children}</div>
      </div>
      </Session>
    </AccountProvider>
  );
}
