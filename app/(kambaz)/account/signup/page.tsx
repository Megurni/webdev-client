"use client";
import { useState } from "react";
import * as client from "../client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const [error, setError] = useState("");
  const signup = async () => {
    if (!username || !password) return;
    if (password !== verify) { setError("Passwords do not match"); return; }
    try {
      const user = await client.signup({ ...emptyUser, username, password });
      setCurrentUser(user);
      router.push("/account/profile");
    } catch (error) { setError(axios.isAxiosError(error) ? error.response?.data?.message || error.message : "Unable to sign up"); }
  };
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      {error && <p className="mb-2 bg-red-100 p-2 text-red-800">{error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signup();
        }}
      >
        <input
          id="wd-username"
          aria-label="Username"
          placeholder="username"
          className="wd-username mb-2 w-full rounded border px-3 py-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          id="wd-password"
          aria-label="Password"
          placeholder="password"
          type="password"
          className="wd-password mb-2 w-full rounded border px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          id="wd-password-verify"
          aria-label="Verify password"
          placeholder="verify password"
          type="password"
          className="wd-password-verify mb-2 w-full rounded border px-3 py-2"
          value={verify}
          onChange={(e) => setVerify(e.target.value)}
        />
        <button
          id="wd-signup-btn"
          className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-white"
        >
          Sign up
        </button>
      </form>
      <Link href="/account/signin" id="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}
