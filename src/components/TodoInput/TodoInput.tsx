import { nanoid } from "nanoid"
import { useState } from "react"
import { useAppDispatch } from "../../redux/hooks"
import { addTodo } from "../../redux/slices/todoSlice"
import { ITodo } from "../../utils/interfaces/ITodo"


const TodoInput = () => {
    const dispatch = useAppDispatch()
    const newTodoInitialState: ITodo = {
        todo: '',
        id: nanoid(),
        importance: 'common',
        completionStatus: false,
        isEditing: false
    }
    const [newTodo, setNewTodo] = useState<ITodo>(newTodoInitialState);
    const handleTodoTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo({ ...newTodo, todo: e.target.value })
    }
    const handleTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newTodo.todo.trim() === '') return setNewTodo({ ...newTodoInitialState, importance: newTodo.importance, todo: '' });
        dispatch(addTodo(newTodo));
        setNewTodo({
            ...newTodoInitialState,
            importance: newTodo.importance,
        })
    }

    return (
        <form onSubmit={handleTodoSubmit}>
            <input
                type="text"
                placeholder="Enter a todo..."
                autoFocus={true}
                value={newTodo.todo}
                onChange={handleTodoTextChange}
            />
        </form>
    )
}

export default TodoInput