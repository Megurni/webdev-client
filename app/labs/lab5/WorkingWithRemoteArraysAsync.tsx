"use client";
import { useEffect, useState } from "react";
import { FaTrash, FaPlusCircle, FaPencilAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import axios from "axios";
import * as client from "./client";
type Todo = { id: number; title: string; completed: boolean; editing?: boolean };
export default function WorkingWithRemoteArraysAsynchronously() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const showError = (error: unknown) => setErrorMessage(axios.isAxiosError(error) ? error.response?.data?.message || error.message : "Request failed");
  useEffect(() => { client.fetchTodos().then(setTodos).catch(showError); }, []);
  const createNewTodo = async () => {
    try { setTodos(await client.createNewTodo()); } catch (error) { showError(error); }
  };
  const postNewTodo = async () => {
    try {
      const newTodo = await client.postNewTodo({ title: "New Posted Todo", completed: false });
      setTodos([...todos, newTodo]);
    } catch (error) { showError(error); }
  };
  const removeTodo = async (todo: Todo) => {
    try { setTodos(await client.removeTodo(todo)); } catch (error) { showError(error); }
  };
  const deleteTodo = async (todo: Todo) => {
    try { await client.deleteTodo(todo); setTodos(todos.filter((t) => t.id !== todo.id)); }
    catch (error) { showError(error); }
  };
  const editTodo = (todo: Todo) => setTodos(todos.map((t) => t.id === todo.id ? { ...todo, editing: true } : t));
  const updateTodo = async (todo: Todo) => {
    try { await client.updateTodo(todo); setTodos(todos.map((t) => t.id === todo.id ? todo : t)); }
    catch (error) { showError(error); }
  };
  return <div><h3>Working with Arrays Asynchronously</h3><h4>Todos</h4>
    {errorMessage && <p id="wd-todo-error-message" className="rounded bg-red-100 px-3 py-2 text-red-800">{errorMessage}</p>}
    <div className="flex gap-3">
      <button aria-label="Create Todo with GET" onClick={createNewTodo}><FaPlusCircle id="wd-create-todo" className="text-green-600" /></button>
      <button aria-label="Post Todo" onClick={postNewTodo}><FaPlusCircle id="wd-post-todo" className="text-blue-600" /></button>
    </div>
    <ul>{todos.map((todo) => <li key={todo.id} className="flex items-center gap-2 border-b py-2">
      <input type="checkbox" checked={todo.completed} onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} aria-label={`Complete ${todo.title}`} />
      {todo.editing ? <input aria-label="Edit todo title" value={todo.title}
        onChange={(e) => setTodos(todos.map((t) => t.id === todo.id ? { ...t, title: e.target.value } : t))}
        onKeyDown={(e) => { if (e.key === "Enter") void updateTodo({ ...todo, editing: false }); }} />
        : <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>}
      <button aria-label={`Edit ${todo.title}`} onClick={() => editTodo(todo)}><FaPencilAlt className="text-blue-600" /></button>
      <button aria-label={`Remove ${todo.title} with GET`} onClick={() => removeTodo(todo)}><FaTrash className="text-red-600" /></button>
      <button aria-label={`Delete ${todo.title}`} onClick={() => deleteTodo(todo)}><TiDelete className="text-2xl text-red-600" /></button>
    </li>)}</ul>
  </div>;
}
