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
    }
})

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer