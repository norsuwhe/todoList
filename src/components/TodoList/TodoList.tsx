import { useAppSelector } from "../../redux/hooks"
import ActiveTodo from "../ActiveTodo/ActiveTodo"
import CompletedTodo from "../CompletedTodo/CompletedTodo"

const TodoList = () => {
    const todos = useAppSelector(state => state.todos)
    const completedTodos = todos.filter((todo) => todo.completionStatus === true)
    const activeTodos = todos.filter((todo) => todo.completionStatus === false)

    return (
        <>
            <div>
                {activeTodos.map((todo) => {
                    return (<ActiveTodo key={todo.id} todo={todo.todo} importance={todo.importance} id={todo.id} isEditing={todo.isEditing} />)
                })}
            </div>
            <div>
                {completedTodos.map((todo) => {
                    return (<CompletedTodo key={todo.id} todo={todo.todo} id={todo.id} />)
                })}
            </div>
        </>
    )
}

export default TodoList