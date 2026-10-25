export default function AddingAndRemovingToFromArrays() {
  const todos = ["Buy milk", "Walk the dog"];
  todos.push("Read a book", "Buy stamps");
  const removed = todos.shift();
  return <section id="wd-adding-and-removing"><h4>Adding and Removing From Arrays</h4>
    <p>removed = {removed}</p><ul>{todos.map(todo => <li key={todo}>{todo}</li>)}</ul>
  </section>;
}
