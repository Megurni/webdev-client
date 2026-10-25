import { readdir } from "node:fs/promises";
import path from "node:path";
export default async function ServerComponentDemo() {
  const files = (await readdir(path.join(process.cwd(), "app/labs/lab3"))).filter(name => !name.startsWith(".")).slice(0, 8);
  return <section id="wd-server-component-demo"><h4>Server Component</h4>
    <h5>Server Information</h5><pre>{JSON.stringify({ arch: process.arch, pid: process.pid }, null, 2)}</pre>
    <ul>{files.map(file => <li key={file}>{file}</li>)}</ul>
  </section>;
}
