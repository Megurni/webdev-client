"use client";
import { useState } from "react";
export default function WorkingWithRemoteObjects() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const API = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API = `${HTTP_SERVER}/lab5/module`;
  const [assignment, setAssignment] = useState({ id: 1, title: "NodeJS Assignment", description: "Create a NodeJS server with ExpressJS", due: "2021-10-10", completed: false, score: 0 });
  const [module, setModule] = useState({ name: "Node.js", description: "Creating HTTP servers with Express" });
  return <div><h3>Working With Objects</h3>
    <h4>Retrieving Objects</h4><a id="wd-retrieve-assignments" href={API}>Get Assignment</a>
    <h4>Retrieving Properties</h4><a id="wd-retrieve-assignment-title" href={`${API}/title`}>Get Title</a>
    <h4>Modifying Properties</h4>
    <input id="wd-assignment-title" aria-label="Assignment title" value={assignment.title} onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
    <a id="wd-update-assignment-title" href={`${API}/title/${encodeURIComponent(assignment.title)}`}>Update Title</a><br />
    <input type="number" aria-label="Assignment score" value={assignment.score} onChange={(e) => setAssignment({ ...assignment, score: Number(e.target.value) })} />
    <a href={`${API}/score/${assignment.score}`}>Update Score</a>
    <label><input type="checkbox" checked={assignment.completed} onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} /> Completed</label>
    <a href={`${API}/completed/${assignment.completed}`}>Update Completed</a>
    <h4>Module (On Your Own)</h4>
    <a href={MODULE_API}>Get Module</a><a href={`${MODULE_API}/name`}>Get Module Name</a><br />
    <input aria-label="Module name" value={module.name} onChange={(e) => setModule({ ...module, name: e.target.value })} />
    <a href={`${MODULE_API}/name/${encodeURIComponent(module.name)}`}>Update Module Name</a><br />
    <input aria-label="Module description" value={module.description} onChange={(e) => setModule({ ...module, description: e.target.value })} />
    <a href={`${MODULE_API}/description/${encodeURIComponent(module.description)}`}>Update Module Description</a>
  </div>;
}
