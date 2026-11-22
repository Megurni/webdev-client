"use client";
import { useState } from "react";
export default function PathParameters() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return <div><h3>Path Parameters</h3>
    <input aria-label="Path parameter a" value={a} onChange={(e) => setA(e.target.value)} />
    <input aria-label="Path parameter b" value={b} onChange={(e) => setB(e.target.value)} />
    <div>{([ ["add", "+"], ["subtract", "−"], ["multiply", "×"], ["divide", "÷"] ]).map(([operation, symbol]) =>
      <a key={operation} id={`wd-path-parameter-${operation}`} href={`${HTTP_SERVER}/lab5/${operation}/${a}/${b}`}>
        {operation[0].toUpperCase() + operation.slice(1)} {a} {symbol} {b}
      </a>)}</div>
  </div>;
}
