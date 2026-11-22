"use client";
import { create } from "zustand";
import type assignmentsJson from "../database/assignments.json";
export type Assignment = (typeof assignmentsJson)[number] & {
  group?: string;
  displayGradeAs?: string;
  submissionType?: string;
  entryOptions?: string[];
  assignTo?: string;
  notes?: string;
};
export const emptyAssignment: Assignment = {
  _id: "new",
  course: "",
  title: "New Assignment",
  description: "",
  points: 100,
  dueDate: "",
  availableFrom: "",
  availableUntil: "",
  group: "ASSIGNMENTS",
  displayGradeAs: "Points",
  submissionType: "Online",
  entryOptions: [],
  assignTo: "Everyone",
  notes: "",
};
type AssignmentsStore = {
  assignments: Assignment[];
  setAssignments: (assignments: Assignment[]) => void;
  addAssignment: (assignment: Assignment) => void;
  updateAssignment: (assignment: Assignment) => void;
  deleteAssignment: (id: string, cid: string) => void;
};
export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: [],
  setAssignments: (assignments) => set({ assignments }),
  addAssignment: (assignment) =>
    set((s) => ({
      assignments: [
        ...s.assignments,
        assignment,
      ],
    })),
  updateAssignment: (assignment) =>
    set((s) => ({
      assignments: s.assignments.map((a) =>
        a._id === assignment._id && a.course === assignment.course
          ? assignment
          : a,
      ),
    })),
  deleteAssignment: (id, cid) =>
    set((s) => ({
      assignments: s.assignments.filter(
        (a) => !(a._id === id && a.course === cid),
      ),
    })),
}));
