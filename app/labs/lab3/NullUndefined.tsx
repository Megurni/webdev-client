export default function NullUndefined() {
  const nullValue: null = null;
  const undefinedValue: undefined = undefined;
  return <section id="wd-null-undefined"><h4>Null vs Undefined</h4>
    <p>nullValue = {String(nullValue)}</p><p>undefinedValue = {String(undefinedValue)}</p>
    <p>nullValue ?? &quot;default&quot; = {nullValue ?? "default"}</p>
    <p>null == undefined = {String(null == undefined)}</p>
    <p>null === undefined = {String((null as unknown) === undefined)}</p>
  </section>;
}
