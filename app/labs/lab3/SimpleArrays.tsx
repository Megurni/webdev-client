export default function SimpleArrays() {
  const items = ["Buy milk", "Walk the dog", "Read Chapter 3", "Call the dentist"];
  return <section id="wd-simple-arrays"><h4>Simple Arrays</h4><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></section>;
}
