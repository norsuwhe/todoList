import { useAppSelector } from "../../redux/hooks"
import ActiveTodo from "../ActiveTodo/ActiveTodo"

const TodoList = () => {
    const todos = useAppSelector(state => state.todos)
    return (
        <>
            {todos.map((todo) => {
                return (
                    <ActiveTodo key={todo.id} todo={todo.todo} importance={todo.importance} id={todo.id} isEditing={todo.isEditing} />
                )
            })}
        </>
    )
}

export default TodoList