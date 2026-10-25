export default function ForLoops() {
  const strings = ["RED", "GREEN", "BLUE"];
  const lowercased: string[] = [], stringLengths: number[] = [];
  for (const value of strings) { lowercased.push(value.toLowerCase()); stringLengths.push(value.length); }
  return <section id="wd-for-loops"><h4>For Loops</h4>
    <p>lowercased = {lowercased.join(", ")}</p><p>stringLengths = {stringLengths.join(", ")}</p>
  </section>;
}
