"use client";
import { create } from "zustand";
import type enrollmentsJson from "../database/enrollments.json";
export type Enrollment = (typeof enrollmentsJson)[number];
type EnrollmentsStore = {
  enrollments: Enrollment[];
  setEnrollments: (rows: Enrollment[]) => void;
  enroll: (user: string, course: string, section?: string) => void;
  unenroll: (user: string, course: string) => void;
};
export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: [],
  setEnrollments: (enrollments) => set({ enrollments }),
  enroll: (user, course, section = "") => set((s) => ({
    enrollments: s.enrollments.some((e) => e.user === user && e.course === course) ? s.enrollments : [...s.enrollments, { _id: crypto.randomUUID(), user, course, section }],
  })),
  unenroll: (user, course) => set((s) => ({ enrollments: s.enrollments.filter((e) => !(e.user === user && e.course === course)) })),
}));
