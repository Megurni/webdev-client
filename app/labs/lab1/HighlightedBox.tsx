import type { ReactNode } from "react";

function HighlightedBox({
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
  children,
}: {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
  children?: ReactNode;
}) {
  return (
    <div style={{ backgroundColor, borderColor, borderWidth, borderStyle: "solid", borderRadius, padding: "0.75rem 1rem", marginBottom: "0.75rem" }}>
      {children}
    </div>
  );
}

export default function HighlightedBoxLab() {
  return (
    <div id="wd-highlighted-box">
      <h3>Highlighted Box</h3>
      <HighlightedBox backgroundColor="lavender" borderColor="purple" borderWidth={3} borderRadius={12}>
        <h4>Callout</h4>
        <p>This box wraps <strong>any</strong> children — headings, paragraphs, lists, and more.</p>
        <ul>
          <li>backgroundColor</li><li>borderColor</li><li>borderWidth</li><li>borderRadius</li>
        </ul>
      </HighlightedBox>
      <HighlightedBox backgroundColor="honeydew" borderColor="green">
        <h4>My goals</h4>
        <ul><li>Master React fundamentals</li><li>Build a complete full-stack application</li><li>Deploy a reliable project</li></ul>
      </HighlightedBox>
      <HighlightedBox backgroundColor="aliceblue" borderColor="steelblue" borderRadius={16}>
        <h4>Reusable content</h4>
        <p>A component using children can wrap any nested React markup.</p>
      </HighlightedBox>
    </div>
  );
}
