import todos from "./todos.json";
import TodoItem from "./TodoItem";
export default function TodoList() {
  console.log(todos);
  return <section id="wd-todo-list"><h4>Todo List</h4>
    <ul>{todos.map(todo => <TodoItem key={todo.title} todo={todo} />)}</ul>
  </section>;
}
