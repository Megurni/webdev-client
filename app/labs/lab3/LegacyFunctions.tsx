function add(a: number, b: number) { return a + b; }
function subtract(a: number, b: number) { return a - b; }
export default function LegacyFunctions() {
  console.log("multiply(3, 7) =", 3 * 7);
  return <section id="wd-legacy-functions"><h4>Legacy Functions</h4>
    <p>add(2, 4) = {add(2, 4)}</p><p>subtract(7, 3) = {subtract(7, 3)}</p>
    <p>multiply(3, 7) = {3 * 7}</p>
  </section>;
}
