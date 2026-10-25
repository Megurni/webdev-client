export default function TodoItem({ todo }: { todo: { title: string; status: string; done: boolean } }) {
  return <li><label><input type="checkbox" defaultChecked={todo.done} /> {todo.title} ({todo.status})</label></li>;
}
