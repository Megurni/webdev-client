import "./Classes.css";
export default function Classes() {
  const useTeal = true, useGreen = true;
  const boxes = [
    ["Red background", "wd-lab3-red"], ["Blue background", "wd-lab3-blue"],
    ["Yellow background", "wd-lab3-yellow"], ["Purple background", "wd-lab3-purple"],
    ["Orange background", "wd-lab3-orange"],
    ["Dynamic Teal background", useTeal ? "wd-lab3-teal" : "wd-lab3-red"],
    ["Dynamic Green background", useGreen ? "wd-lab3-green" : "wd-lab3-blue"],
  ];
  return <section id="wd-classes"><h4>Working with Classes</h4>
    {boxes.map(([label, color]) => <div key={label} className={`wd-lab3-box ${color}`}>{label}</div>)}
  </section>;
}
