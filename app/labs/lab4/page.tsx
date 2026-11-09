"use client";
import Link from "next/link";
import "./lab4.css";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import Effect from "./Effect";
import PassingFunctions from "./PassingFunctions";
import ProfileForm from "./profile/ProfileForm";
import ContextExamples from "./context/ContextExamples";
import ContextProfileForm from "./context/ContextProfileForm";
import ZustandExamples from "./zustand/ZustandExamples";
import ZustandProfileForm from "./zustand/ZustandProfileForm";
import ReduxExamples from "./redux/ReduxExamples";
import HooksPage from "./hooks/page";
export default function Lab4() {
  return (
    <div id="wd-lab4">
      <h1>Lab 4 — Managing Client State</h1>
      <p>
        Linhao Jin — CS4550 01 ·{" "}
        <a href="https://github.com/Megurni/webdev-client">GitHub Repository</a>
      </p>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        message="Hello World"
        theFunction={(message) => alert(message)}
        personalFunction={() => alert("Linhao Jin")}
        theOtherFunction={() => alert("Sample from parent")}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileForm />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <ContextExamples />
      <ContextProfileForm />
      <ZustandExamples />
      <ZustandProfileForm />
      <ReduxExamples />
      <Effect />
      <HooksPage />
      <Link href="/labs">Back to Labs</Link>
    </div>
  );
}
