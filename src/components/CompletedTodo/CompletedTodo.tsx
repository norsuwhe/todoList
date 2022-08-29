import { useAppDispatch } from "../../redux/hooks"
import { completionStatusChange, deleteTodo } from "../../redux/slices/todoSlice";
import { ITodo } from "../../utils/interfaces/ITodo"

const CompletedTodo = ({ todo, id }: ITodo) => {
    const dispatch = useAppDispatch();

    const handleCompletion = (id: string) => {
        dispatch(completionStatusChange(id))
    }
    const handleDelete = (id: string) => {
        dispatch(deleteTodo(id))
    }
    return (
        <>
            <div className="todo-item__text">{todo}</div>
            <div onClick={() => handleCompletion(id)}>uncomplete</div>
            <div onClick={() => handleDelete(id)}>delete</div>
        </>
    )
}

export default CompletedTodo