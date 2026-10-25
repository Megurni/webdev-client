"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "Home", href: "/labs", id: "wd-home-link" },
  { label: "Lab 1", href: "/labs/lab1" },
  { label: "Lab 2", href: "/labs/lab2" },
  { label: "Lab 3", href: "/labs/lab3" },
  { label: "Lab 4", href: "/labs/lab4" },
  { label: "Lab 5", href: "/labs/lab5" },
  { label: "Kambaz", href: "/", id: "wd-kambaz-link" },
  { label: "Book Ch3", href: "https://kambaz.dev/book/ch3" },
];

export default function TOC() {
  const pathname = usePathname();
  return <nav aria-label="Labs navigation" className="w-40 space-y-1">
    {LINKS.map(({ label, href, id }) => {
      const active = href === "/labs" ? pathname === href : href.startsWith("/labs/lab") && (pathname === href || pathname.startsWith(`${href}/`));
      return <Link key={label} href={href} id={id} aria-current={active ? "page" : undefined}
        className={`block rounded px-3 py-2 no-underline ${active ? "bg-blue-600 text-white" : "text-blue-700 hover:bg-blue-50"}`}>
        {label}
      </Link>;
    })}
  </nav>;
}
