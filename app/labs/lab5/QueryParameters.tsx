"use client";
import { useState } from "react";
export default function QueryParameters() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return <div><h3>Query Parameters</h3>
    <input aria-label="Query parameter a" value={a} onChange={(e) => setA(e.target.value)} />
    <input aria-label="Query parameter b" value={b} onChange={(e) => setB(e.target.value)} />
    <div>{([ ["add", "+"], ["subtract", "−"], ["multiply", "×"], ["divide", "÷"] ]).map(([operation, symbol]) =>
      <a key={operation} id={`wd-query-parameter-${operation}`} href={`${HTTP_SERVER}/lab5/calculator?operation=${operation}&a=${a}&b=${b}`}>
        {operation[0].toUpperCase() + operation.slice(1)} {a} {symbol} {b}
      </a>)}</div>
  </div>;
}
