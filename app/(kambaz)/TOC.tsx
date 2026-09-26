import Link from "next/link";

export default function TOC() {
  return (
    <ul>
      <li>
        <Link href="/account" id="wd-account-link">
          Account
        </Link>
      </li>
      <li>
        <Link href="/dashboard">Dash Board</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
    </ul>
  );
}
