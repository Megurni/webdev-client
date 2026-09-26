export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Lin&apos;s Student Profile</h4>
      <label htmlFor="wd-your-first-name">First name:</label>
      <input id="wd-your-first-name" defaultValue="Lin" /><br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input id="wd-your-last-name" placeholder="Last name" /><br />
      <label htmlFor="wd-your-password">Student ID or password:</label>
      <input id="wd-your-password" type="password" defaultValue="webdev" /><br />
      <label htmlFor="wd-your-bio">Why I am taking this course:</label><br />
      <textarea id="wd-your-bio" rows={4} cols={40} defaultValue="I want to learn full-stack web development and build useful applications." /><br />
      <p>Class standing:</p>
      <input id="wd-your-undergraduate" type="radio" name="your-standing" defaultChecked />
      <label htmlFor="wd-your-undergraduate">Undergraduate</label>
      <input id="wd-your-graduate" type="radio" name="your-standing" />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <p>Enrollment:</p>
      <input id="wd-your-full-time" type="radio" name="your-enrollment" defaultChecked />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <input id="wd-your-part-time" type="radio" name="your-enrollment" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <p>Topics I want to practice:</p>
      <input id="wd-your-html" type="checkbox" defaultChecked />
      <label htmlFor="wd-your-html">HTML</label>
      <input id="wd-your-react" type="checkbox" defaultChecked />
      <label htmlFor="wd-your-react">React</label>
      <input id="wd-your-node" type="checkbox" />
      <label htmlFor="wd-your-node">Node.js</label><br />
      <label htmlFor="wd-your-major">Area of interest:</label>
      <select id="wd-your-major" defaultValue="FULLSTACK">
        <option value="FRONTEND">Frontend</option>
        <option value="BACKEND">Backend</option>
        <option value="FULLSTACK">Full Stack</option>
      </select><br />
      <label htmlFor="wd-your-languages">Languages:</label>
      <select id="wd-your-languages" multiple defaultValue={["TS", "PYTHON"]}>
        <option value="TS">TypeScript</option>
        <option value="PYTHON">Python</option>
        <option value="JAVA">Java</option>
        <option value="SQL">SQL</option>
      </select><br />
      <label htmlFor="wd-your-email">Email:</label>
      <input id="wd-your-email" type="email" placeholder="lin@example.com" /><br />
      <label htmlFor="wd-your-graduation-year">Expected graduation year:</label>
      <input id="wd-your-graduation-year" type="number" min={2026} max={2035} defaultValue={2027} /><br />
      <label htmlFor="wd-your-excitement">Excitement for this course (0–10):</label>
      <input id="wd-your-excitement" type="range" min={0} max={10} defaultValue={8} /><br />
      <label htmlFor="wd-your-start-date">Course start date:</label>
      <input id="wd-your-start-date" type="date" defaultValue="2026-09-01" /><br />
      <button id="wd-your-save" type="submit">Save</button>
      <button id="wd-your-cancel" type="button">Cancel</button>
    </form>
  );
}
