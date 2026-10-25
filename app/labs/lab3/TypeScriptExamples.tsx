type Course = { id: string; title: string; credits: number };
interface Student { name: string; enrolled: boolean; }
type Status = "draft" | "published";
enum Role { Student = "student", Teacher = "teacher" }
type Formatter = (course: Course) => string;
function CourseSummary({ course, formatter }: { course: Course; formatter: Formatter }) {
  return <p>{formatter(course)}</p>;
}
export default function TypeScriptExamples() {
  const course: Course = { id: "RS101", title: "Rocket Propulsion", credits: 4 };
  const student: Student = { name: "Lin", enrolled: true };
  const status: Status = "published";
  const optional: Partial<Course> = { title: "Aerodynamics" };
  const labels: Record<Role, string> = { [Role.Student]: "Student", [Role.Teacher]: "Teacher" };
  const key: keyof Course = "title";
  const value: unknown = course.credits;
  const numericValue = typeof value === "number" ? value : 0;
  return <section id="wd-typescript-examples"><h3>3.5 TypeScript Types</h3>
    <h4>Type Annotations, Aliases, Interfaces, Unions, and Enums</h4>
    <p>{student.name} is {student.enrolled ? "enrolled" : "not enrolled"} in {course.title}.</p>
    <p>Status: {status}; role: {labels[Role.Student]}</p>
    <h4>Function Types and Typed React Props</h4>
    <CourseSummary course={course} formatter={item => `${item.id}: ${item.title} (${item.credits} credits)`} />
    <h4>Null, Undefined, Narrowing, and Utility Types</h4>
    <p>Partial title: {optional.title}; keyof Course: {key}; unknown narrowed: {numericValue}</p>
  </section>;
}
