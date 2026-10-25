export default function TemplateLiterals() {
  const name = "Linhao Jin", published = true, course = "RS101";
  return <section id="wd-template-literals"><h4>Template Literals</h4>
    <p>{`Hello, ${name}! ${published ? "Welcome back" : "Welcome"}.`}</p>
    <p>{`${course} published: ${published ? "Yes" : "No"}`}</p>
  </section>;
}
