"use client";
import { useEffect, useState, type ReactNode } from "react";
import { useParams, redirect, notFound } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import * as client from "../client";
import * as enrollmentsClient from "../../enrollments/client";
import CourseNavigation from "./Navigation";
import CourseHeader from "./CourseHeader";
import { useCoursesStore } from "../../store/coursesStore";
import { useEnrollmentsStore } from "../../store/enrollmentsStore";
import { useAccountContext } from "../../account/AccountContext";
export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams<{ cid: string }>();
  const [showCourseNavigation, setShowCourseNavigation] = useState(true);
  const course = useCoursesStore((s) => s.courses.find((c) => c._id === cid));
  const enrollments = useEnrollmentsStore((s) => s.enrollments);
  const { currentUser } = useAccountContext();
  const setCourses = useCoursesStore((s) => s.setCourses);
  const setEnrollments = useEnrollmentsStore((s) => s.setEnrollments);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    const load = async () => {
      try {
        setCourses(await client.fetchAllCourses());
        setEnrollments(currentUser ? await enrollmentsClient.findMyEnrollments() : []);
      } finally { setPending(false); }
    };
    void load();
  }, [currentUser, cid, setCourses, setEnrollments]);
  if (pending) return null;
  if (!course) notFound();
  if (
    currentUser &&
    !enrollments.some((e) => e.user === currentUser._id && e.course === cid)
  )
    redirect("/dashboard");
  return (
    <div id="wd-courses">
      <div className="flex items-center gap-3">
        <button
          id="wd-course-navigation-toggle"
          aria-label="Toggle Course Navigation"
          aria-expanded={showCourseNavigation}
          onClick={() => setShowCourseNavigation(!showCourseNavigation)}
          className="p-2 text-red-600"
        >
          <FaAlignJustify />
        </button>
        <CourseHeader cid={cid} name={`${course.number} ${course.name}`} />
      </div>
      <hr />
      <div className="flex gap-4">
        {showCourseNavigation && (
          <div id="wd-course-navigation-panel" className="w-[140px] shrink-0">
            <CourseNavigation cid={cid} />
          </div>
        )}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
