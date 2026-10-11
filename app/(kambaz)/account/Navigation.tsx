"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();
  return (
    <nav id="wd-account-navigation" className="wd-list-group w-[140px]">
      {[["Signin", "/account/signin"], ["Signup", "/account/signup"], ["Profile", "/account/profile"]].map(([label, href]) => (
        <Link key={href} href={href} className={`wd-list-group-item block border-l-[3px] px-3 py-2 no-underline ${pathname === href ? "border-l-black text-black" : "border-l-transparent text-red-700"}`}>{label}</Link>
      ))}
    </nav>
  );
}
