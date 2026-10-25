"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const items = [
    ["Home", "home", "wd-course-home-link"],
    ["Modules", "modules", "wd-course-modules-link"],
    ["Piazza", "piazza", "wd-course-piazza-link"],
    ["Zoom", "zoom", "wd-course-zoom-link"],
    ["Assignments", "assignments", "wd-course-assignments-link"],
    ["Quizzes", "quizzes", "wd-course-quizzes-link"],
    ["Grades", "grades", "wd-course-grades-link"],
    ["People", "people/table", "wd-course-people-link"],
    ["Announcements", "announcements", "wd-course-announcements-link"],
  ];
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      {items.map(([label, route, id]) => {
        const href = `/courses/${cid}/${route}`;
        const active = pathname === href || pathname.startsWith(href + "/");
        return <Link key={id} href={href} id={id} className={active ? "list-group-item active border-0" : "list-group-item border-0 text-red-600"}>{label}</Link>;
      })}
      <Link href={`/courses/${cid}/home`} id="wd-course-ai-link" className="list-group-item border-0 text-red-600">Sample</Link>
    </div>
  );
}
