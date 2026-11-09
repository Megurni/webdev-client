"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter, notFound } from "next/navigation";
import {
  useAssignmentsStore,
  emptyAssignment,
  type Assignment,
} from "../../../../store/assignmentsStore";
import { useAccountContext } from "../../../../account/AccountContext";
const fieldClass = "w-full rounded border border-neutral-300 px-3 py-2";
const labelClass = "mb-1 block font-medium";
function Editor({
  initial,
  cid,
  aid,
  canEdit,
}: {
  initial: Assignment;
  cid: string;
  aid: string;
  canEdit: boolean;
}) {
  const [assignment, setAssignment] = useState<Assignment>({ ...initial });
  const { addAssignment, updateAssignment } = useAssignmentsStore();
  const router = useRouter();
  const save = () => {
    if (!canEdit) return;
    if (aid === "new") addAssignment({ ...assignment, course: cid });
    else updateAssignment({ ...assignment, course: cid });
    router.push(`/courses/${cid}/assignments`);
  };
  const assignmentsPath = `/courses/${cid}/assignments`;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <p>Assignment id: {aid}</p>
      <fieldset disabled={!canEdit}>
        <div className="mb-4">
          <label htmlFor="wd-name" className={labelClass}>
            Assignment Name
          </label>
          <input
            id="wd-name"
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
            className={fieldClass}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="wd-description" className={labelClass}>
            Description
          </label>
          <textarea
            id="wd-description"
            value={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
            className={`${fieldClass} min-h-32`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="wd-points" className={labelClass}>
            Points
          </label>
          <input
            id="wd-points"
            type="number"
            min="0"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: Number(e.target.value) })
            }
            className={fieldClass}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="wd-group" className={labelClass}>
            Assignment Group
          </label>
          <select
            id="wd-group"
            value={assignment.group ?? "ASSIGNMENTS"}
            onChange={(e) =>
              setAssignment({ ...assignment, group: e.target.value })
            }
            className={fieldClass}
          >
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECT</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="wd-display-grade-as" className={labelClass}>
            Display Grade as
          </label>
          <select
            id="wd-display-grade-as"
            value={assignment.displayGradeAs ?? "Points"}
            onChange={(e) =>
              setAssignment({ ...assignment, displayGradeAs: e.target.value })
            }
            className={fieldClass}
          >
            <option>Points</option>
            <option>Percentage</option>
            <option>Complete/Incomplete</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="wd-submission-type" className={labelClass}>
            Submission Type
          </label>
          <select
            id="wd-submission-type"
            value={assignment.submissionType ?? "Online"}
            onChange={(e) =>
              setAssignment({ ...assignment, submissionType: e.target.value })
            }
            className={fieldClass}
          >
            <option>Online</option>
            <option>On Paper</option>
            <option>No Submission</option>
          </select>
        </div>
        <fieldset className="mb-4">
          <legend className={labelClass}>Online Entry Options</legend>
          {[
            ["wd-text-entry", "Text Entry"],
            ["wd-website-url", "Website URL"],
            ["wd-media-recordings", "Media Recordings"],
            ["wd-student-annotation", "Student Annotation"],
            ["wd-file-upload", "File Uploads"],
          ].map(([id, label]) => (
            <label key={id} className="mb-1 block">
              <input
                id={id}
                checked={assignment.entryOptions?.includes(id) ?? false}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    entryOptions: e.target.checked
                      ? [...(assignment.entryOptions ?? []), id]
                      : (assignment.entryOptions ?? []).filter(
                          (option) => option !== id,
                        ),
                  })
                }
                type="checkbox"
                className="mr-2"
              />
              {label}
            </label>
          ))}
        </fieldset>
        <div className="mb-4">
          <label htmlFor="wd-assign-to" className={labelClass}>
            Assign to
          </label>
          <input
            id="wd-assign-to"
            value={assignment.assignTo ?? "Everyone"}
            onChange={(e) =>
              setAssignment({ ...assignment, assignTo: e.target.value })
            }
            className={fieldClass}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="wd-due-date" className={labelClass}>
            Due
          </label>
          <input
            id="wd-due-date"
            type="date"
            value={assignment.dueDate}
            onChange={(e) =>
              setAssignment({ ...assignment, dueDate: e.target.value })
            }
            className={fieldClass}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="wd-available-from" className={labelClass}>
            Available from
          </label>
          <input
            id="wd-available-from"
            type="date"
            value={assignment.availableFrom}
            onChange={(e) =>
              setAssignment({ ...assignment, availableFrom: e.target.value })
            }
            className={fieldClass}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="wd-available-until" className={labelClass}>
            Until
          </label>
          <input
            id="wd-available-until"
            type="date"
            value={assignment.availableUntil}
            onChange={(e) =>
              setAssignment({ ...assignment, availableUntil: e.target.value })
            }
            className={fieldClass}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="wd-ai-editor-notes" className={labelClass}>
            Sample notes
          </label>
          <textarea
            id="wd-ai-editor-notes"
            value={assignment.notes ?? ""}
            onChange={(e) =>
              setAssignment({ ...assignment, notes: e.target.value })
            }
            className={fieldClass}
          />
        </div>
      </fieldset>
      <div className="flex justify-end gap-2">
        <Link
          href={assignmentsPath}
          id="wd-cancel"
          className="rounded border border-neutral-300 px-4 py-2 no-underline"
        >
          Cancel
        </Link>
        <button
          type="button"
          disabled={!canEdit}
          onClick={save}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const assignments = useAssignmentsStore((s) => s.assignments);
  const { currentUser } = useAccountContext();
  const initial =
    aid === "new"
      ? { ...emptyAssignment, course: cid }
      : assignments.find((a) => a._id === aid && a.course === cid);
  if (!initial) notFound();
  return (
    <Editor
      key={`${cid}/${aid}`}
      initial={initial}
      cid={cid}
      aid={aid}
      canEdit={!currentUser || ["FACULTY", "ADMIN"].includes(currentUser.role)}
    />
  );
}
