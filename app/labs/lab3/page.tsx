import { Suspense } from "react";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import NullUndefined from "./NullUndefined";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import IncludesSomeEvery from "./IncludesSomeEvery";
import ReduceFunction from "./ReduceFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import Spreader from "./Spreader";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import OptionalChaining from "./OptionalChaining";
import Classes from "./Classes";
import Styles from "./Styles";
import TypeScriptExamples from "./TypeScriptExamples";
import ClientComponentDemo from "./ClientComponentDemo";
import ServerComponentDemo from "./ServerComponentDemo";
import PathParameters from "./PathParameters";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import TodoList from "./todos/TodoList";

export default function Lab3() {
  return <main id="wd-lab3" className="space-y-5 p-4">
    <h2>Lab 3 — JavaScript and TypeScript</h2>
    <h3>3.2 Introduction to JavaScript</h3>
    <VariablesAndConstants />
    <VariableTypes />
    <BooleanVariables />
    <IfElse />
    <TernaryOperator />
    <ConditionalOutputIfElse />
    <ConditionalOutputInline />
    <NullUndefined />
    <h3>3.3 JavaScript Functions</h3>
    <LegacyFunctions />
    <ArrowFunctions />
    <ImpliedReturn />
    <TemplateLiterals />
    <h3>3.4 JavaScript Data Structures</h3>
    <SimpleArrays />
    <ArrayIndexAndLength />
    <AddingAndRemovingToFromArrays />
    <ForLoops />
    <MapFunction />
    <FindFunction />
    <FindIndex />
    <FilterFunction />
    <IncludesSomeEvery />
    <ReduceFunction />
    <JsonStringify />
    <House />
    <Spreader />
    <Destructing />
    <FunctionDestructing />
    <DestructingImports />
    <OptionalChaining />
    <TypeScriptExamples />
    <h3>3.6 Dynamic Styling</h3>
    <Classes />
    <Styles />
    <h3>3.7 Client and Server Components</h3>
    <Suspense fallback={<p>Loading pathname…</p>}><ClientComponentDemo /></Suspense>
    <ServerComponentDemo />
    <h3>3.8 Parameterizing Components</h3>
    <PathParameters />
    <h4>Add, Square, and Highlight</h4>
    <Add a={3} b={4} /><Add a={10} b={20} /><Add a={7} b={8} />
    <Square>4</Square><Square>9</Square><Square>5</Square>
    <p><Highlight>JavaScript makes this page dynamic.</Highlight></p>
    <p><Highlight>Children can be <strong>any JSX</strong>.</Highlight></p>
    <TodoList />
  </main>;
}
