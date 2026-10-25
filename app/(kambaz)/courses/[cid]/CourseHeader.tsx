"use client";

import { usePathname } from "next/navigation";

const sections: Record<string, string> = {
  home: "Home", modules: "Modules", assignments: "Assignments",
  people: "People", piazza: "Piazza", zoom: "Zoom",
  quizzes: "Quizzes", grades: "Grades", announcements: "Announcements",
};

export default function CourseHeader({ name, cid }: { name: string; cid: string }) {
  const pathname = usePathname();
  const section = pathname.split(`/courses/${cid}/`)[1]?.split("/")[0] ?? "home";
  return <h2 id="wd-course-heading">{name} ({cid}) &gt; {sections[section] ?? "Home"}</h2>;
}
