import { house } from "./House";
export default function OptionalChaining() {
  const unknown: { address?: { zip?: string } } = {};
  return <section id="wd-optional-chaining"><h4>Optional Chaining and Nullish Coalescing</h4>
    <p>house.garage?.cars ?? 0 = {house.garage?.cars ?? 0}</p>
    <p>zip = {unknown.address?.zip ?? "unknown"}</p>
  </section>;
}
