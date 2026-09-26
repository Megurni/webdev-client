import AnchorTag from "./AnchorTag";
import Forms from "./forms/Forms";
import HeadingTags from "./HeadingTags";
import HighlightedBox from "./HighlightedBox";
import HighlightedParagraph from "./HighlightedParagraph";
import ParagraphTag from "./ParagraphTag";
import ListTags from "./ListTags";
import Tables from "./Tables";
import Images from "./Images";
export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <HeadingTags />
      <ParagraphTag />
      <ListTags />
      <Tables />
      <Images />
      <Forms />
      <HighlightedParagraph />
      <HighlightedBox />
      <AnchorTag />
    </div>
  );
}
