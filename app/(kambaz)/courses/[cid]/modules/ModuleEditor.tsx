"use client";
import { useState } from "react";
import { useModulesStore } from "../../../store/modulesStore";
export default function ModuleEditor({ cid }: { cid: string }) {
  const [show, setShow] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const addModule = useModulesStore((s) => s.addModule);
  return (
    <>
      <button
        id="wd-add-module-btn"
        onClick={() => setShow(true)}
        className="rounded bg-red-600 px-3 py-2 text-sm text-white"
      >
        + Module
      </button>
      {show && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="wd-module-dialog-title"
            className="w-full max-w-lg rounded bg-white p-5 shadow-lg"
          >
            <h3 id="wd-module-dialog-title" className="mb-4 text-xl">
              Add a new module
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!moduleName.trim()) return;
                addModule({
                  _id: "",
                  course: cid,
                  name: moduleName.trim(),
                  lessons: [],
                });
                setModuleName("");
                setShow(false);
              }}
            >
              <label htmlFor="wd-module-name">Module Name</label>
              <input
                autoFocus
                id="wd-module-name"
                placeholder="Module name"
                value={moduleName}
                onChange={(e) => setModuleName(e.target.value)}
                className="mb-4 block w-full rounded border px-3 py-2"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShow(false);
                    setModuleName("");
                  }}
                  className="rounded border px-3 py-2"
                >
                  Cancel
                </button>
                <button
                  id="wd-add-module"
                  disabled={!moduleName.trim()}
                  className="rounded bg-red-600 px-3 py-2 text-white disabled:opacity-50"
                >
                  Add Module
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
