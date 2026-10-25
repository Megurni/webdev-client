import Math from "./Math";
import * as Matematica from "./Math";
import { add, subtract, multiply, divide, remainder } from "./Math";
export default function DestructingImports() {
  const extraSum = add(10, 20);
  const rows = [
    ["Math.add(1, 2)", "default", Math.add(1, 2)],
    ["Matematica.add(2, 3)", "namespace", Matematica.add(2, 3)],
    ["subtract(5, 3)", "named", subtract(5, 3)],
    ["multiply(3, 4)", "named", multiply(3, 4)],
    [extraSum, extraSum, extraSum],
    ["remainder(10, 3)", "named", remainder(10, 3)],
    ["divide(20, 4)", "named", divide(20, 4)],
  ] as const;
  return <section id="wd-destructing-imports"><h4>Destructuring Imports</h4>
    <p>add(10, 20) appears in the fifth row below.</p>
    <table><thead><tr><th>Expression</th><th>Import</th><th>Result</th></tr></thead>
      <tbody>{rows.map(([expression, kind, value]) => <tr key={expression}><td>{expression}</td><td>{kind}</td><td>{value}</td></tr>)}</tbody>
    </table>
  </section>;
}
