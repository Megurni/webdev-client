"use client";
import { useState, type ReactNode } from "react";
import { TodosContext, useTodosContext, type Todo } from "./todosContext";
function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn HTML" },
    { id: "2", title: "Learn CSS" },
    { id: "3", title: "Learn Context" },
  ]);
  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo: (title) =>
          setTodos((rows) => [...rows, { id: crypto.randomUUID(), title }]),
        updateTodo: (todo) =>
          setTodos((rows) => rows.map((t) => (t.id === todo.id ? todo : t))),
        deleteTodo: (id) => setTodos((rows) => rows.filter((t) => t.id !== id)),
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
function TodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  return (
    <section id="wd-context-todos">
      <h2>Context Todo List</h2>
      <input
        aria-label="Context todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim()) return;
          if (editingId) updateTodo({ id: editingId, title });
          else addTodo(title);
          setTitle("");
          setEditingId(null);
        }}
      >
        {editingId ? "Update" : "Add"}
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.title}{" "}
            <button
              onClick={() => {
                setTitle(t.title);
                setEditingId(t.id);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteTodo(t.id);
                if (editingId === t.id) {
                  setTitle("");
                  setEditingId(null);
                }
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default function ReactContextTodoList() {
  return (
    <TodosProvider>
      <TodoList />
    </TodosProvider>
  );
}
