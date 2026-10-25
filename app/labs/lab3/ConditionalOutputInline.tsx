export default function ConditionalOutputInline() {
  const isGuest = true, isAdmin = true;
  return <section id="wd-conditional-output-inline"><h4>Conditional Output Inline</h4>
    {isGuest && <h5>Guest Inline</h5>}
    {isAdmin && <h5>Admin Inline</h5>}
  </section>;
}
