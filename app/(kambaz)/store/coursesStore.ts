"use client";
import { create } from "zustand";
import coursesJson from "../database/courses.json";
export type Course = (typeof coursesJson)[number] & {
  startDate: string;
};
export const emptyCourse: Course = {
  _id: "0",
  name: "New Course",
  number: "New Number",
  description: "New Description",
  image: "/images/reactjs.jpg",
  term: "Fall 2026",
  startDate: "2026-09-09",
};
type CoursesStore = {
  courses: Course[];
  addCourse: (course: Course) => void;
  updateCourse: (course: Course) => void;
  deleteCourse: (id: string) => void;
};
export const useCoursesStore = create<CoursesStore>((set) => ({
  courses: coursesJson.map((course) => ({
    ...course,
    startDate: "2026-09-09",
  })),
  addCourse: (course) => {
    const _id = crypto.randomUUID();
    set((s) => ({ courses: [...s.courses, { ...course, _id }] }));
  },
  updateCourse: (course) =>
    set((s) => ({
      courses: s.courses.map((c) => (c._id === course._id ? course : c)),
    })),
  deleteCourse: (id) =>
    set((s) => ({ courses: s.courses.filter((c) => c._id !== id) })),
}));
