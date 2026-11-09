"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";
export default function Dashboard() {
  const { courses, addCourse, updateCourse } = useCoursesStore();
  const { enrollments } = useEnrollmentsStore();
  const { currentUser } = useAccountContext();
  const [course, setCourse] = useState<Course>({ ...emptyCourse });
  const [showAllCourses, setShowAllCourses] = useState(false);
  const canEdit =
    !currentUser || ["FACULTY", "ADMIN"].includes(currentUser.role);
  const visibleCourses =
    !currentUser || showAllCourses
      ? courses
      : courses.filter((c) =>
          enrollments.some(
            (e) => e.user === currentUser._id && e.course === c._id,
          ),
        );
  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <button
          id="wd-enrollments-toggle"
          aria-pressed={showAllCourses}
          onClick={() => setShowAllCourses(!showAllCourses)}
          className="rounded bg-blue-600 px-3 py-2 text-white"
        >
          {showAllCourses ? "My Courses" : "Enrollments"}
        </button>
      </div>
      <hr />
      {canEdit && (
        <div id="wd-course-form" className="my-4 max-w-2xl space-y-2">
          <label className="block">
            Course Name
            <input
              id="wd-course-name"
              value={course.name}
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
              className="block w-full rounded border px-3 py-2"
            />
          </label>
          <label className="block">
            Description
            <textarea
              id="wd-course-description"
              value={course.description}
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
              className="block w-full rounded border px-3 py-2"
            />
          </label>
          <label className="block">
            Course Number
            <input
              id="wd-course-number"
              value={course.number}
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
              className="block w-full rounded border px-3 py-2"
            />
          </label>
          <label className="block">
            Start Date
            <input
              id="wd-course-start-date"
              type="date"
              value={course.startDate}
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
              className="block w-full rounded border px-3 py-2"
            />
          </label>
          <button
            id="wd-add-new-course-click"
            onClick={() => {
              addCourse(course);
            }}
            className="mr-2 rounded bg-blue-600 px-3 py-2 text-white"
          >
            Add
          </button>
          <button
            id="wd-update-course-click"
            onClick={() => {
              updateCourse(course);
            }}
            className="rounded bg-yellow-400 px-3 py-2"
          >
            Update
          </button>
        </div>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({visibleCourses.length})
      </h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            canEdit={canEdit}
            onEdit={() => {
              setCourse({ ...c });
            }}
          />
        ))}
      </div>
    </div>
  );
}
