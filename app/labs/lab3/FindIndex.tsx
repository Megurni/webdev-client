export default function FindIndex() {
  const numbers = [1, 2, 4, 5, 6];
  return <section id="wd-find-index"><h4>Find Index</h4>
    <p>findIndex for 3 = {numbers.findIndex(n => n === 3)}</p>
    <p>sixIndex = {numbers.findIndex(n => n === 6)}</p>
  </section>;
}
