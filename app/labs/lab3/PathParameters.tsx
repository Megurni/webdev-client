import Link from "next/link";
const examples = [[3, 4], [12, 30], [8, 9], [5, 6]];
export default function PathParameters() {
  return <section id="wd-path-parameters"><h4>Path Parameters</h4>
    <ul>{examples.map(([a, b]) => <li key={`${a}-${b}`}><Link href={`/labs/lab3/add/${a}/${b}`}>{a} + {b}</Link></li>)}</ul>
  </section>;
}
