type Person = { name?: string; a: number; b: number };
function greet({ name = "Guest" }: Pick<Person, "name">) { return `Hello, ${name}`; }
function multiply({ a, b }: Pick<Person, "a" | "b">) { return a * b; }
function divide({ a, b }: Pick<Person, "a" | "b">) { return a / b; }
export default function FunctionDestructing() {
  return <section id="wd-function-destructing"><h4>Function Destructuring</h4>
    <p>{greet({})}</p><p>multiply = {multiply({ a: 3, b: 4 })}</p>
    <p>divide quotient = {divide({ a: 20, b: 4 })}</p>
  </section>;
}
