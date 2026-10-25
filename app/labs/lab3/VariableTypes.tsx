/* eslint-disable prefer-const -- this lab demonstrates variables declared with let. */
export default function VariableTypes() {
  let numberVariable = 123;
  let secondNumberVariable = 456;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let secondStringVariable = "Second string";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isSecondNumber = typeof secondNumberVariable;
  let isString = typeof stringVariable;
  let isSecondString = typeof secondStringVariable;
  let isBoolean = typeof booleanVariable;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      secondNumberVariable = {secondNumberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      secondStringVariable = {secondStringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isSecondNumber = {isSecondNumber}
      <br />
      isString = {isString}
      <br />
      isSecondString = {isSecondString}
      <br />
      isBoolean = {isBoolean}
      <hr />
      sampleCount = {sampleCount}
      <br />
      isSampleCount = {isSampleCount}
      <br />
      sampleLabel = {sampleLabel}
      <br />
      isSampleLabel = {isSampleLabel}
      <hr />
    </div>
  );
}
