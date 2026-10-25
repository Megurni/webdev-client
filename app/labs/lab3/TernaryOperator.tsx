export default function TernaryOperator() {
  const hour = 9, isPremium = false;
  return <section id="wd-ternary-operator"><h4>Ternary Operator</h4>
    <p>{hour < 12 ? "Good morning" : "Good afternoon"}</p>
    <p>{isPremium ? "Premium" : "Free"}</p>
  </section>;
}
