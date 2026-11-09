"use client";

const hello = () => {
  alert("Hello World!");
};

const goodbye = () => alert("Goodbye World!");

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      <button
        id="wd-onclick-linhao"
        onClick={() => alert("Hello, Linhao Jin!")}
      >
        Greet Linhao
      </button>
      <button id="wd-onclick-goodbye" onClick={goodbye}>
        Goodbye
      </button>
      <hr />
    </div>
  );
}
