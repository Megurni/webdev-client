export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">Landscape</div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div className="wd-personal-dimension wd-bg-color-green wd-fg-color-white">A longer sentence in a fixed size box.</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension wd-bg-color-yellow">This is a long sentence that shows the declared width and height of the box.</div>
      </div>
    </div>
  );
}
