import Link from "next/link";

export default async function AssignmentEditor({ params }: { params: Promise<{ cid: string; aid: string }> }) {
  const { cid } = await params;
  const assignmentsPath = `/courses/${cid}/assignments`;
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <label htmlFor="wd-description">Description</label><br />
      <textarea id="wd-description" defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel." />
      <br />
      <table><tbody>
        <tr><td align="right" valign="top"><label htmlFor="wd-points">Points</label></td><td><input id="wd-points" defaultValue={100} /></td></tr>
        <tr><td align="right"><label htmlFor="wd-group">Assignment Group</label></td><td><select id="wd-group" defaultValue="ASSIGNMENTS"><option>ASSIGNMENTS</option><option>QUIZZES</option><option>EXAMS</option><option>PROJECT</option></select></td></tr>
        <tr><td align="right"><label htmlFor="wd-display-grade-as">Display Grade as</label></td><td><select id="wd-display-grade-as" defaultValue="Points"><option>Points</option><option>Percentage</option><option>Complete/Incomplete</option></select></td></tr>
        <tr><td align="right"><label htmlFor="wd-submission-type">Submission Type</label></td><td><select id="wd-submission-type" defaultValue="Online"><option>Online</option><option>On Paper</option><option>No Submission</option></select></td></tr>
        <tr><td align="right" valign="top">Online Entry Options</td><td>
          <input id="wd-text-entry" type="checkbox" /><label htmlFor="wd-text-entry">Text Entry</label><br />
          <input id="wd-website-url" type="checkbox" /><label htmlFor="wd-website-url">Website URL</label><br />
          <input id="wd-media-recordings" type="checkbox" /><label htmlFor="wd-media-recordings">Media Recordings</label><br />
          <input id="wd-student-annotation" type="checkbox" /><label htmlFor="wd-student-annotation">Student Annotation</label><br />
          <input id="wd-file-upload" type="checkbox" /><label htmlFor="wd-file-upload">File Uploads</label>
        </td></tr>
        <tr><td align="right"><label htmlFor="wd-assign-to">Assign to</label></td><td><input id="wd-assign-to" defaultValue="Everyone" /></td></tr>
        <tr><td align="right"><label htmlFor="wd-due-date">Due</label></td><td><input id="wd-due-date" type="date" defaultValue="2026-10-13" /></td></tr>
        <tr><td align="right"><label htmlFor="wd-available-from">Available from</label></td><td><input id="wd-available-from" type="date" defaultValue="2026-10-06" /></td></tr>
        <tr><td align="right"><label htmlFor="wd-available-until">Until</label></td><td><input id="wd-available-until" type="date" defaultValue="2026-10-20" /></td></tr>
      </tbody></table>
      <Link href={assignmentsPath} id="wd-cancel">Cancel</Link>{" "}
      <Link href={assignmentsPath} id="wd-save">Save</Link>
    </div>
  );
}
