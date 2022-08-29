import { nanoid } from "nanoid"
import { useState } from "react"
import { useAppDispatch } from "../../redux/hooks"
import { addTodo } from "../../redux/slices/todoSlice"
import { ITodo } from "../../utils/interfaces/ITodo"
import { TodoImportanceButtons } from "./TodoImportanceButtonsList"

const TodoForm = () => {
    const dispatch = useAppDispatch()
    const newTodoInitialState: ITodo = {
        todo: '',
        id: nanoid(),
        importance: 'common',
        completionStatus: false,
        isEditing: false
    }
    const [newTodo, setNewTodo] = useState(newTodoInitialState);
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
    const handleTodoImportanceChange = (id: string) => {
        setNewTodo({ ...newTodo, importance: id })
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
            <div>
                {TodoImportanceButtons.map((button) => {
                    return (
                        <div key={button.id}>
                            <input
                                type="radio"
                                id={button.id}
                                name="todoImportance"
                                defaultChecked={button.defaultChecked}
                                onClick={() => handleTodoImportanceChange(button.id)}
                            />
                        </div>
                    )
                })

                }
            </div>
        </form>
    )
}

export default TodoForm