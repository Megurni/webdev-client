"use client";
import * as enrollmentsClient from "../enrollments/client";
import Image from "next/image";
import Link from "next/link";
import { type Course } from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
export default function CourseCard({
  course,
  canEdit,
  onEdit,
  onDelete,
  onEnrollmentChange,
}: {
  course: Course;
  canEdit: boolean;
  onEdit: () => void;
  onDelete: () => Promise<void>;
  onEnrollmentChange: () => Promise<void>;
}) {
  const { currentUser } = useAccountContext();
  const { enrollments } = useEnrollmentsStore();
  const enrolled =
    !!currentUser &&
    enrollments.some(
      (e) => e.user === currentUser._id && e.course === course._id,
    );
  const accessible = !currentUser || enrolled;
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <Link
        href={accessible ? `/courses/${course._id}/home` : "/dashboard"}
        className="wd-dashboard-course-link block text-neutral-900 no-underline"
      >
        <Image
          src={course.image}
          width={300}
          height={160}
          alt={course.name}
          className="h-40 w-full object-cover"
        />
        <div className="p-4">
          <h5 className="wd-dashboard-course-title m-0 mb-2 truncate text-lg font-semibold">
            {course.number} {course.name}
          </h5>
          <p className="wd-dashboard-course-description m-0 mb-3 h-[100px] overflow-hidden text-sm text-neutral-600">
            {course.description}
          </p>
          <button
            type="button"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          >
            Go
          </button>
        </div>
        <div className="flex flex-wrap gap-2 px-4 pb-4">
          {canEdit && (
            <>
              <button
                id="wd-edit-course-click"
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  onEdit();
                }}
                className="rounded bg-yellow-400 px-3 py-1.5 text-sm"
              >
                Edit
              </button>
              <button
                id="wd-delete-course-click"
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  void onDelete();
                }}
                className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
              >
                Delete
              </button>
            </>
          )}
          {currentUser && (
            <button
              onClick={async (event) => {
                event.preventDefault();
                if (enrolled) await enrollmentsClient.unenrollFromCourse(course._id);
                else await enrollmentsClient.enrollIntoCourse(course._id);
                await onEnrollmentChange();
              }}
              className={`rounded px-3 py-1.5 text-sm text-white ${enrolled ? "bg-red-600" : "bg-green-600"}`}
            >
              {enrolled ? "Unenroll" : "Enroll"}
            </button>
          )}
        </div>
      </Link>
    </div>
  );
}
