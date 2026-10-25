export default function MapFunction() {
  const todos = ["Buy milk", "Walk the dog", "Email the TA"];
  const doubles = [1, 2, 3].map(n => n * 2);
  return <section id="wd-map-function"><h4>Map Function</h4>
    <ul>{todos.map(todo => <li key={todo}>{todo}</li>)}</ul><p>doubles = {doubles.join(", ")}</p>
  </section>;
}
