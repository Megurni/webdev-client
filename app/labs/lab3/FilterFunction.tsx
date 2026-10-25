export default function FilterFunction() {
  const numbers = [1, 2, 3, 4, 5, 6];
  return <section id="wd-filter-function"><h4>Filter Function</h4>
    <p>numbers &gt;= 5 = {numbers.filter(n => n >= 5).join(", ")}</p>
    <p>numbersLessThan2 = {numbers.filter(n => n < 2).join(", ")}</p>
  </section>;
}
