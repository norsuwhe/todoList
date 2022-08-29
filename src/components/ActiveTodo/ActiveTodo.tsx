
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks"
import { deleteTodo } from "../../redux/slices/todoSlice";
import { ITodo } from "../../utils/interfaces/ITodo"

const ActiveTodo = ({ id, todo, importance, isEditing }: ITodo) => {
    const dispatch = useAppDispatch();

    const handleDeleteTodo = (id: string) => {
        dispatch(deleteTodo(id))
    }
    return (
        <>
            <div className="todo-item__text">{todo}</div>
            <div onClick={() => handleDeleteTodo(id)}>X</div>
        </>

    )
}

export default ActiveTodo