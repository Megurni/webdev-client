"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import { FaFlask } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import courses from "./database/courses.json";

const navigation = [
  { label: "Account", href: "/account", id: "wd-account-link", icon: FaRegCircleUser },
  { label: "Dashboard", href: "/dashboard", id: "wd-dashboard-link", icon: AiOutlineDashboard },
  { label: "Courses", href: `/courses/${courses[0]._id}/home`, id: "wd-course-link", icon: LiaBookSolid },
  { label: "Calendar", href: "/calendar", id: "wd-calendar-link", icon: IoCalendarOutline },
  { label: "Inbox", href: "/inbox", id: "wd-inbox-link", icon: FaInbox },
  { label: "Labs", href: "/labs", id: "wd-labs-link", icon: FaFlask },
  { label: "History", href: "/history", id: "wd-history-link", icon: FaCircleQuestion },
  { label: "Help", href: "/labs", id: "wd-ai-nav-help", icon: FaCircleQuestion },
];

export default function KambazNavigation() {
  const pathname = usePathname();
  return (
    <nav id="wd-kambaz-navigation" className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" rel="noreferrer" className="block bg-black py-3 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/NEU.png" width={75} height={75} alt="Northeastern University" className="mx-auto" />
      </a>
      {navigation.map(({ label, href, id, icon: Icon }) => {
        const active = label === "Courses"
          ? pathname.startsWith("/courses/")
          : label === "Labs"
            ? pathname.startsWith("/labs")
            : label !== "Help" && (pathname === href || pathname.startsWith(`${href}/`));
        return (
          <Link key={id} href={href} id={id} aria-current={active ? "page" : undefined}
            className={`block py-3 text-center text-sm no-underline ${active ? "active bg-white text-red-600" : "bg-black text-white"}`}>
            <Icon className={`inline-block text-3xl ${active ? "text-red-600" : "text-white"}`} /><br />{label}
          </Link>
        );
      })}
    </nav>
  );
}
