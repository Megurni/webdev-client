export default function JsonStringify() {
  const person = { name: "Linhao", active: true };
  const sampleCourse = { id: "RS101", title: "Rocket Propulsion", credits: 4 };
  return <section id="wd-json-stringify"><h4>JSON Stringify</h4>
    <p>{JSON.stringify(person)}</p><p>sampleCourse = {JSON.stringify(sampleCourse)}</p>
  </section>;
}
