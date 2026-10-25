import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import CourseHeader from "./CourseHeader";
import courses from "../../database/courses.json";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function CoursesLayout({ children, params }: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  const course = courses.find((item) => item._id === cid);
  if (!course) notFound();
  return (
    <div id="wd-courses">
      <Suspense fallback={<h2>{course.number} {course.name}</h2>}>
        <CourseHeader cid={cid} name={`${course.number} ${course.name}`} />
      </Suspense><hr />
      <div className="flex gap-4">
        <div className="hidden w-[140px] shrink-0 md:block"><Suspense fallback={null}><CourseNavigation cid={cid} /></Suspense></div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
