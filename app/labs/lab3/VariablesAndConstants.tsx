/* eslint-disable no-var, prefer-const -- this lab demonstrates var, let, and const. */
export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  let name = "Lin";
  const greeting = "Hello" + " " + name;
  const constant1 = functionScoped - blockScoped;
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <br />
      sampleSum = {sampleSum}
      <hr />
      name = {name}
      <hr />
      greeting = {greeting}
      <hr />
    </div>
  );
}
