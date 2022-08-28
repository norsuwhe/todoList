import TodoInput from "./components/TodoInput/TodoInput"
import { useAppSelector } from "./redux/hooks"

const App = () => {
  const todos = useAppSelector(state => state.todos)
  console.log(todos);
  return (
    <>
      <TodoInput />
    </>
  )
}

export default App
