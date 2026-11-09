"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? [["Profile", "/account/profile"]]
    : [
        ["Signin", "/account/signin"],
        ["Signup", "/account/signup"],
      ];
  return (
    <nav id="wd-account-navigation" className="wd-list-group w-[140px]">
      {links.map(([label, href]) => (
        <Link
          key={href}
          href={href}
          className={`wd-list-group-item block border-l-[3px] px-3 py-2 no-underline ${pathname === href ? "border-l-black text-black" : "border-l-transparent text-red-700"}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
