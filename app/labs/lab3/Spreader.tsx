export default function Spreader() {
  const obj1 = { a: 1, b: 2 }, obj2 = { b: 3, c: 4 };
  const obj4 = { ...obj1, ...obj2, d: 5 };
  const arr3 = [...[1, 2], ...[3, 4]];
  return <section id="wd-spreader"><h4>Spread Operator</h4>
    <p>obj4 = {JSON.stringify(obj4)}</p><p>arr3 = {JSON.stringify(arr3)}</p>
  </section>;
}
