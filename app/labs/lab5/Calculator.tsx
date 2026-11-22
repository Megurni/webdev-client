"use client";
import { useState } from "react";
export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("10");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const calculate = async (op = operation) => {
    setError("");
    try {
      const response = await fetch(`/api/lab5/calculator?${new URLSearchParams({ a, b, operation: op })}`);
      const data = await response.json();
      if (!response.ok) { setError(data.error); setResult(""); return; }
      const symbols: Record<string, string> = { add: "+", subtract: "−", multiply: "×", divide: "÷" };
      setResult(`${data.a} ${symbols[op]} ${data.b} = ${data.result}`);
    } catch { setError("Unable to calculate"); }
  };
  return <div><h3>Calculator (Next.js Web API)</h3>
    <input type="number" aria-label="Calculator a" value={a} onChange={(e) => setA(e.target.value)} />
    <select aria-label="Calculator operation" value={operation} onChange={(e) => { setOperation(e.target.value); void calculate(e.target.value); }}>
      {['add','subtract','multiply','divide'].map((op) => <option key={op}>{op}</option>)}
    </select>
    <input type="number" aria-label="Calculator b" value={b} onChange={(e) => setB(e.target.value)} />
    <button type="button" onClick={() => calculate()} className="rounded bg-blue-600 px-3 py-1.5 text-white">Calculate</button>
    <input aria-label="Calculator result" readOnly value={result} />
    {error && <p className="rounded bg-red-100 px-3 py-2 text-red-800">{error}</p>}
  </div>;
}
