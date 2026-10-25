export default function BooleanVariables() {
  const equals = (a: number, b: number) => a === b;
  const true1 = equals(1, 1), false1 = equals(1, 2), true6 = "lab" === "lab";
  return <section id="wd-boolean-variables"><h4>Boolean Variables</h4>
    <p>true1 = {String(true1)}</p><p>false1 = {String(false1)}</p><p>true6 = {String(true6)}</p>
    <p>3 === 3 = {String(3 === 3)}</p>
  </section>;
}
