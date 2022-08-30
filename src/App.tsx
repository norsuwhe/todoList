import Filter from "./components/Filter/Filter";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import './App.scss';
const App = () => {
  return (
    <div className="app">
      <TodoForm />
      <Filter />
      <TodoList />
    </div>
  )
}

export default App
