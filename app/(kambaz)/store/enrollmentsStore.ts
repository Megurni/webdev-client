"use client";
import { create } from "zustand";
import enrollmentsJson from "../database/enrollments.json";
export type Enrollment = (typeof enrollmentsJson)[number];
type EnrollmentsStore = {
  enrollments: Enrollment[];
  enroll: (user: string, course: string, section?: string) => void;
  unenroll: (user: string, course: string) => void;
};
export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: enrollmentsJson,
  enroll: (user, course, section = "") =>
    set((s) =>
      s.enrollments.some((e) => e.user === user && e.course === course)
        ? s
        : {
            enrollments: [
              ...s.enrollments,
              { _id: crypto.randomUUID(), user, course, section },
            ],
          },
    ),
  unenroll: (user, course) =>
    set((s) => ({
      enrollments: s.enrollments.filter(
        (e) => !(e.user === user && e.course === course),
      ),
    })),
}));
