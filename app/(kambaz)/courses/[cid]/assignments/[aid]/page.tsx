import Link from "next/link";
import assignments from "../../../../database/assignments.json";
import { notFound } from "next/navigation";

const fieldClass = "w-full rounded border border-neutral-300 px-3 py-2";
const labelClass = "mb-1 block font-medium";

export default async function AssignmentEditor({ params }: { params: Promise<{ cid: string; aid: string }> }) {
  const { cid, aid } = await params;
  const assignment = assignments.find((item) => item._id === aid && item.course === cid);
  if (!assignment) notFound();
  const assignmentsPath = `/courses/${cid}/assignments`;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <p>Assignment id: {aid}</p>
      <div className="mb-4"><label htmlFor="wd-name" className={labelClass}>Assignment Name</label><input id="wd-name" defaultValue={assignment.title} className={fieldClass} /></div>
      <div className="mb-4"><label htmlFor="wd-description" className={labelClass}>Description</label><textarea id="wd-description" defaultValue={assignment.description} className={`${fieldClass} min-h-32`} /></div>
      <div className="mb-4"><label htmlFor="wd-points" className={labelClass}>Points</label><input id="wd-points" defaultValue={assignment.points} className={fieldClass} /></div>
      <div className="mb-4"><label htmlFor="wd-group" className={labelClass}>Assignment Group</label><select id="wd-group" defaultValue="ASSIGNMENTS" className={fieldClass}><option>ASSIGNMENTS</option><option>QUIZZES</option><option>EXAMS</option><option>PROJECT</option></select></div>
      <div className="mb-4"><label htmlFor="wd-display-grade-as" className={labelClass}>Display Grade as</label><select id="wd-display-grade-as" defaultValue="Points" className={fieldClass}><option>Points</option><option>Percentage</option><option>Complete/Incomplete</option></select></div>
      <div className="mb-4"><label htmlFor="wd-submission-type" className={labelClass}>Submission Type</label><select id="wd-submission-type" defaultValue="Online" className={fieldClass}><option>Online</option><option>On Paper</option><option>No Submission</option></select></div>
      <fieldset className="mb-4"><legend className={labelClass}>Online Entry Options</legend>
        {[["wd-text-entry", "Text Entry"], ["wd-website-url", "Website URL"], ["wd-media-recordings", "Media Recordings"], ["wd-student-annotation", "Student Annotation"], ["wd-file-upload", "File Uploads"]].map(([id, label]) => <label key={id} className="mb-1 block"><input id={id} type="checkbox" className="mr-2" />{label}</label>)}
      </fieldset>
      <div className="mb-4"><label htmlFor="wd-assign-to" className={labelClass}>Assign to</label><input id="wd-assign-to" defaultValue="Everyone" className={fieldClass} /></div>
      <div className="mb-4"><label htmlFor="wd-due-date" className={labelClass}>Due</label><input id="wd-due-date" type="date" defaultValue={assignment.dueDate} className={fieldClass} /></div>
      <div className="mb-4"><label htmlFor="wd-available-from" className={labelClass}>Available from</label><input id="wd-available-from" type="date" defaultValue={assignment.availableFrom} className={fieldClass} /></div>
      <div className="mb-4"><label htmlFor="wd-available-until" className={labelClass}>Until</label><input id="wd-available-until" type="date" defaultValue={assignment.availableUntil} className={fieldClass} /></div>
      <div className="mb-4"><label htmlFor="wd-ai-editor-notes" className={labelClass}>Sample notes</label><textarea id="wd-ai-editor-notes" className={fieldClass} /></div>
      <div className="flex justify-end gap-2"><Link href={assignmentsPath} id="wd-cancel" className="rounded border border-neutral-300 px-4 py-2 no-underline">Cancel</Link><Link href={assignmentsPath} id="wd-save" className="rounded bg-red-600 px-4 py-2 text-white no-underline">Save</Link></div>
    </div>
  );
}
