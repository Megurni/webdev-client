export default function Styles() {
  const colorBlack = { color: "black" };
  const padding10px = { padding: "10px" };
  const bgGreen = { ...colorBlack, ...padding10px, backgroundColor: "lightgreen" };
  const boxes = [
    { label: "Red background", style: { backgroundColor: "lightcoral" } },
    { label: "Blue background", style: { backgroundColor: "lightblue" } },
    { label: "Yellow background", style: { backgroundColor: "lightyellow" } },
    { label: "Green background", style: bgGreen },
    { label: "Gray background", style: { backgroundColor: "lightgray" } },
  ];
  return <section id="wd-styles"><h4>Working with Style Objects</h4>
    {boxes.map(({ label, style }) => <div key={label} style={{ ...style, display: "inline-block", margin: 4, padding: 12, border: "1px solid #777" }}>{label}</div>)}
  </section>;
}
