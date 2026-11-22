"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState({ title: "" });
  const [error, setError] = useState("");
  useEffect(() => { client.fetchAssignment().then(setAssignment).catch(() => setError("Unable to fetch assignment")); }, []);
  const updateTitle = async () => {
    try { setAssignment(await client.updateTitle(assignment.title)); } catch { setError("Unable to update assignment"); }
  };
  return <div><h3>Working with Objects Asynchronously</h3><h4>Assignment</h4>
    <input aria-label="Async assignment title" value={assignment.title} onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
    <button type="button" onClick={updateTitle} className="rounded bg-blue-600 px-3 py-1.5 text-white">Update Title</button>
    <pre>{JSON.stringify(assignment, null, 2)}</pre>{error && <p className="text-red-800">{error}</p>}
  </div>;
}
