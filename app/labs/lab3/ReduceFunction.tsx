export default function ReduceFunction() {
  const numbers = [1, 2, 3, 4];
  return <section id="wd-reduce-function"><h4>Reduce</h4>
    <p>sum = {numbers.reduce((total, n) => total + n, 0)}</p>
    <p>product = {numbers.reduce((total, n) => total * n, 1)}</p>
    <p>joined = {["a", "b", "c"].reduce((all, n) => all + n, "")}</p>
  </section>;
}
