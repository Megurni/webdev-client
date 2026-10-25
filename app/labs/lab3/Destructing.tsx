export default function Destructing() {
  const [first, second, third, fourth] = ["red", "green", "blue", "yellow"];
  const { city, zip } = { city: "Boston", zip: "02115" };
  return <section id="wd-destructing"><h4>Destructuring</h4>
    <p>first = {first}, second = {second}, third = {third}, fourth = {fourth}</p>
    <p>city = {city}</p><p>zip = {zip}</p>
  </section>;
}
