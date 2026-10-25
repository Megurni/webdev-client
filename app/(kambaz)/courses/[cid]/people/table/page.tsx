import { FaUserCircle } from "react-icons/fa";
import users from "../../../../database/users.json";
import enrollments from "../../../../database/enrollments.json";

export default async function PeopleTable({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const roster = enrollments.filter((enrollment) => enrollment.course === cid).flatMap((enrollment) => {
    const user = users.find((candidate) => candidate._id === enrollment.user);
    return user ? [{ ...user, section: enrollment.section }] : [];
  });
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead><tr className="border-b border-neutral-300">
          {["Name", "Login ID", "Section", "Role", "Last Activity", "Total Activity"].map((heading) => <th key={heading} className="p-2">{heading}</th>)}
        </tr></thead>
        <tbody>{roster.map((user) => (
          <tr key={user._id} className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap"><FaUserCircle className="me-2 inline text-4xl text-neutral-500" />{user.firstName} {user.lastName}</td>
            <td className="p-2">{user.loginId}</td><td className="p-2">{user.section}</td><td className="p-2">{user.role}</td>
            <td className="p-2">{user.lastActivity}</td><td className="p-2">{user.totalActivity}</td>
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}
