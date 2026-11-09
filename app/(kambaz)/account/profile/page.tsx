"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";
export default function Profile() {
  const { currentUser, setCurrentUser } = useAccountContext();
  const [profile, setProfile] = useState<User | null>(null);
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    // Chapter 4.10.5.5 explicitly copies the signed-in user to an editable draft in this effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProfile({ ...currentUser });
  }, [currentUser, router]);
  if (!currentUser || !profile) return null;
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      {(
        [
          ["username", "Username", "text", "wd-username"],
          ["password", "Password", "password", "wd-password"],
          ["firstName", "First Name", "text", "wd-firstname"],
          ["lastName", "Last Name", "text", "wd-lastname"],
          ["dob", "Date of Birth", "date", "wd-dob"],
          ["email", "Email", "email", "wd-email"],
        ] as const
      ).map(([key, label, type, id]) => (
        <label key={key} className="mb-2 block">
          {label}
          <input
            id={id}
            type={type}
            value={profile[key]}
            onChange={(e) => setProfile({ ...profile, [key]: e.target.value })}
            className="block w-full rounded border px-3 py-2"
          />
        </label>
      ))}
      <label className="mb-2 block">
        Role
        <select
          id="wd-role"
          className="block w-full rounded border px-3 py-2"
          value={profile.role}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          {["USER", "ADMIN", "FACULTY", "STUDENT"].map((r) => (
            <option key={r} value={r}>
              {r[0] + r.slice(1).toLowerCase()}
            </option>
          ))}
        </select>
      </label>
      <button
        id="wd-update-profile"
        onClick={() => setCurrentUser(profile)}
        className="mb-2 w-full rounded bg-green-600 px-3 py-2 text-white"
      >
        Update
      </button>
      <button
        id="wd-signout-btn"
        onClick={() => {
          setCurrentUser(null);
          router.push("/account/signin");
        }}
        className="w-full rounded bg-blue-600 px-3 py-2 text-white"
      >
        Sign out
      </button>
    </div>
  );
}
