"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import {
  emptyUser,
  useAccountContext,
  type User,
} from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";
export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  const { users, currentUser, addUser } = useAccountContext();
  const { enrollments, enroll } = useEnrollmentsStore();
  const [draft, setDraft] = useState<User>({ ...emptyUser });
  const [editing, setEditing] = useState(false);
  const canEdit =
    !currentUser || ["FACULTY", "ADMIN"].includes(currentUser.role);
  const roster = enrollments
    .filter((e) => e.course === cid)
    .flatMap((e) => {
      const user = users.find((u) => u._id === e.user);
      return user ? [{ ...user, section: e.section }] : [];
    });
  const save = () => {
    const user = { ...draft, _id: draft._id || crypto.randomUUID() };
    addUser(user);
    enroll(user._id, cid, user.section);
    setEditing(false);
    setDraft({ ...emptyUser });
  };
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      {canEdit && (
        <button
          onClick={() => {
            setDraft({ ...emptyUser });
            setEditing(true);
          }}
          className="mb-3 rounded bg-red-600 px-3 py-2 text-white"
        >
          + People
        </button>
      )}
      {editing && (
        <form
          className="mb-4 space-y-2 rounded border p-3"
          onSubmit={(e) => {
            e.preventDefault();
            save();
          }}
        >
          {(
            [
              "firstName",
              "lastName",
              "username",
              "email",
              "loginId",
              "section",
            ] as const
          ).map((key) => (
            <label key={key} className="block">
              {key}
              <input
                value={draft[key]}
                onChange={(e) => setDraft({ ...draft, [key]: e.target.value })}
                className="ml-2 rounded border px-2 py-1"
              />
            </label>
          ))}
          <select
            aria-label="Role"
            value={draft.role}
            onChange={(e) => setDraft({ ...draft, role: e.target.value })}
          >
            {["STUDENT", "TA", "FACULTY", "ADMIN", "USER"].map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
          <button className="mx-2 rounded bg-green-600 px-3 py-1 text-white">
            Save
          </button>
          <button type="button" onClick={() => setEditing(false)}>
            Cancel
          </button>
        </form>
      )}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            {[
              "Name",
              "Login ID",
              "Section",
              "Role",
              "Last Activity",
              "Total Activity",
            ].map((h) => (
              <th key={h} className="p-2">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roster.map((u) => (
            <tr key={u._id} className="odd:bg-neutral-50">
              <td className="p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                {u.firstName} {u.lastName}
              </td>
              <td className="p-2">{u.loginId}</td>
              <td className="p-2">{u.section}</td>
              <td className="p-2">{u.role}</td>
              <td className="p-2">{u.lastActivity}</td>
              <td className="p-2">{u.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
