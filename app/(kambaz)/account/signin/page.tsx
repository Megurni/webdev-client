"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as db from "../../database";
import { useAccountContext } from "../AccountContext";
export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signin = () => {
    const user = db.users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password,
    );
    if (!user) return;
    setCurrentUser(user);
    router.push("/dashboard");
  };
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signin();
        }}
      >
        <input
          id="wd-username"
          aria-label="Username"
          placeholder="username"
          autoComplete="username"
          className="wd-username mb-2 w-full rounded border px-3 py-2"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          id="wd-password"
          aria-label="Password"
          placeholder="password"
          type="password"
          autoComplete="current-password"
          className="wd-password mb-2 w-full rounded border px-3 py-2"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <label htmlFor="wd-ai-signin-note" className="mb-1 block">
          Sample note
        </label>
        <input
          id="wd-ai-signin-note"
          placeholder="sample note"
          className="mb-2 w-full rounded border px-3 py-2"
        />
        <button
          id="wd-signin-btn"
          type="submit"
          className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-white"
        >
          Sign in
        </button>
      </form>
      <Link id="wd-signup-link" href="/account/signup">
        Sign up
      </Link>
    </div>
  );
}
