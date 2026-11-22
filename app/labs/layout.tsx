import type { ReactNode } from "react";
import { Suspense } from "react";
import TOC from "./TOC";

export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <table>
      <tbody>
        <tr>
          <td valign="top" width="160">
            <Suspense fallback={null}>
              <TOC />
            </Suspense>
          </td>
          <td valign="top">
            <header className="mb-4 p-2">
              <strong>Linhao Jin — CS4550 01</strong> ·{" "}
              <a
                id="wd-github"
                href="https://github.com/Megurni/webdev-client"
                className="text-blue-700 underline"
              >
                GitHub Repository
              </a>
              {" · "}<a className="text-blue-700 underline" href="https://github.com/Megurni/webdev-server/tree/a5">Node GitHub Repository</a>
              {" · "}<a className="text-blue-700 underline" href={process.env.NEXT_PUBLIC_HTTP_SERVER}>Node Server</a>
            </header>
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
