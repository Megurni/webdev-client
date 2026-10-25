const square = (n: number) => n * n;
const divide = (a: number, b: number) => a / b;
export default function ImpliedReturn() {
  return <section id="wd-implied-return"><h4>Implied Return</h4>
    <p>square(9) = {square(9)}</p><p>divide(20, 4) = {divide(20, 4)}</p>
  </section>;
}
