export default function FindFunction() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const two = numbers.find(n => n === 2);
  const missing = numbers.find(n => n === 9);
  return <section id="wd-find-function"><h4>Find Function</h4>
    <p>two = {two}</p><p>missing find = {String(missing)}</p>
  </section>;
}
