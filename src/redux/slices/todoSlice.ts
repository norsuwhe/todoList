import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from '../../utils/interfaces/ITodo'

const initialState: ITodo[] = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            return state.filter(todo => todo.id !== action.payload)
        },
        completionStatusChange: (state, action: PayloadAction<string>) => {
            const index = state.findIndex(todo => todo.id === action.payload)
            state[index].completionStatus = !(state[index].completionStatus);
        }
    }
})

export const { addTodo, deleteTodo, completionStatusChange } = todoSlice.actions;
export default todoSlice.reducer