"use client";
import { useState } from "react";
import Lesson from "./Lesson";
import Module from "./Module";
import ModuleEditor from "./ModuleEditor";
import ModuleControlButtons from "./ModuleControlButtons";
import { useModulesStore } from "../../../store/modulesStore";
export default function ModuleList({ cid }: { cid: string }) {
  const { modules, updateModule } = useModulesStore();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div id="wd-modules-screen">
      <div
        id="wd-modules-controls"
        className="mb-4 flex flex-wrap items-center justify-end gap-2"
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded border px-3 py-2 text-sm"
        >
          {collapsed ? "Expand All" : "Collapse All"}
        </button>
        <button className="rounded border px-3 py-2 text-sm">
          View Progress
        </button>
        <select
          aria-label="Publish modules"
          defaultValue="publish-all"
          className="rounded border px-3 py-2 text-sm"
        >
          <option value="publish-all">Publish All</option>
        </select>
        <ModuleEditor cid={cid} />
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules
          .filter((m) => m.course === cid)
          .map((module) => (
            <Module
              key={module._id}
              controls={<ModuleControlButtons moduleId={module._id} />}
              title={
                module.editing ? (
                  <input
                    aria-label="Module title"
                    autoFocus
                    className="w-full rounded border bg-white px-2 py-1 text-base"
                    value={module.name}
                    onChange={(e) =>
                      updateModule({ ...module, name: e.target.value })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter")
                        updateModule({
                          ...module,
                          name: module.name,
                          editing: false,
                        });
                    }}
                  />
                ) : (
                  module.name
                )
              }
            >
              {!collapsed &&
                module.lessons.map((lesson, index) => (
                  <Lesson key={index} title={lesson.name}>
                    {lesson.items.map((item, i) => (
                      <li key={i} className="wd-content-item">
                        {item}
                      </li>
                    ))}
                  </Lesson>
                ))}
            </Module>
          ))}
      </ul>
    </div>
  );
}
