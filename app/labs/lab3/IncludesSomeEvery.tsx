export default function IncludesSomeEvery() {
  const numbers = [1, 2, 3, 4, 5, 6];
  return <section id="wd-includes-some-every"><h4>Includes, Some, and Every</h4>
    <p>includes(5) = {String(numbers.includes(5))}</p>
    <p>every(n &gt; 4) = {String(numbers.every(n => n > 4))}</p>
    <p>some(n === 1) = {String(numbers.some(n => n === 1))}</p>
  </section>;
}
