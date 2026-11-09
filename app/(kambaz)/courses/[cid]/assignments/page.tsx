"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import { useAccountContext } from "../../../account/AccountContext";
export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const { assignments, deleteAssignment } = useAssignmentsStore();
  const [search, setSearch] = useState("");
  const { currentUser } = useAccountContext();
  const canEdit =
    !currentUser || ["FACULTY", "ADMIN"].includes(currentUser.role);
  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            id="wd-search-assignment"
            aria-label="Search for Assignments"
            placeholder="Search for Assignments"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded border py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        {canEdit && (
          <div className="flex gap-2">
            <button
              id="wd-add-assignment-group"
              className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
            >
              <FaPlus /> Group
            </button>
            <Link
              id="wd-add-assignment"
              href={`/courses/${cid}/assignments/new`}
              className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm text-white no-underline"
            >
              <FaPlus /> Assignment
            </Link>
          </div>
        )}
      </div>
      <h3
        id="wd-assignments-title"
        className="mb-3 rounded bg-neutral-200 p-3 text-lg"
      >
        ASSIGNMENTS 40% of Total
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {assignments
          .filter(
            (a) =>
              a.course === cid &&
              a.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((a) => (
            <AssignmentItem
              key={a._id}
              cid={cid}
              aid={a._id}
              title={a.title}
              details={`Due ${a.dueDate} | ${a.points} pts`}
              controls={
                canEdit && (
                  <button
                    aria-label={`Delete ${a.title}`}
                    onClick={() => {
                      if (
                        window.confirm(
                          `Are you sure you want to remove ${a.title}?`,
                        )
                      )
                        deleteAssignment(a._id, cid);
                    }}
                    className="ml-auto p-2 text-red-600"
                  >
                    <FaTrash />
                  </button>
                )
              }
            />
          ))}
      </ul>
    </div>
  );
}
