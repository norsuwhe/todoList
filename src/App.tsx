import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { useAppSelector } from "./redux/hooks"

const App = () => {
  const todos = useAppSelector(state => state.todos)
  console.log(todos);
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  )
}

export default App
