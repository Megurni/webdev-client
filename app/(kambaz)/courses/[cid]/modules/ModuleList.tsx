import Lesson from "./Lesson";
import Module from "./Module";
import modules from "../../../database/modules.json";

export default function ModuleList({ cid }: { cid: string }) {
  const courseModules = modules.filter((module) => module.course === cid);
  return (
    <div id="wd-modules-screen">
      <div className="mb-4 flex flex-wrap items-center justify-end gap-2">
        <button type="button" className="rounded border border-neutral-300 bg-white px-3 py-2 text-sm">Collapse All</button>
        <button type="button" className="rounded border border-neutral-300 bg-white px-3 py-2 text-sm">View Progress</button>
        <select defaultValue="publish-all" className="rounded border border-neutral-300 bg-white px-3 py-2 text-sm"><option value="publish-all">Publish All</option></select>
        <button type="button" className="rounded bg-red-600 px-3 py-2 text-sm text-white">+ Module</button>
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        {courseModules.map((module) => (
          <Module key={module._id} title={module.name}>
            {module.lessons.map((lesson) => (
              <Lesson key={lesson.name} title={lesson.name}>
                {lesson.items.map((item) => <li key={item} className="wd-content-item">{item}</li>)}
              </Lesson>
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
