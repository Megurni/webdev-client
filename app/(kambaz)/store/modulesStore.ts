"use client";
import { create } from "zustand";
import modulesJson from "../database/modules.json";
export type CourseModule = (typeof modulesJson)[number] & { editing?: boolean };
type ModulesStore = {
  modules: CourseModule[];
  addModule: (module: CourseModule) => void;
  updateModule: (module: CourseModule) => void;
  deleteModule: (id: string) => void;
  editModule: (id: string) => void;
};
export const useModulesStore = create<ModulesStore>((set) => ({
  modules: modulesJson,
  addModule: (module) =>
    set((s) => ({
      modules: [...s.modules, { ...module, _id: crypto.randomUUID() }],
    })),
  updateModule: (module) =>
    set((s) => ({
      modules: s.modules.map((m) => (m._id === module._id ? module : m)),
    })),
  deleteModule: (id) =>
    set((s) => ({ modules: s.modules.filter((m) => m._id !== id) })),
  editModule: (id) =>
    set((s) => ({
      modules: s.modules.map((m) =>
        m._id === id ? { ...m, editing: true } : m,
      ),
    })),
}));
