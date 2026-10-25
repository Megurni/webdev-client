"use client";
import { usePathname } from "next/navigation";
export default function ClientComponentDemo() {
  const pathname = usePathname();
  return <section id="wd-client-component-demo"><h4>Client Component</h4>
    <p>Pathname: {pathname}</p><p>Pathname length: {pathname.length}</p>
    <p>Last segment: {pathname.split("/").filter(Boolean).at(-1)}</p>
  </section>;
}
