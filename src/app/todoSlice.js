import { createSlice } from "@reduxjs/toolkit";

const initialState =
{
    option: 0
}



const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addPost(state, action) {
            state.push(action.payload);
        },
        removePost(state, action) {
            state.splice(action.payload, 1)
        },
        setOption(state, action) {
            state.option = action.payload
        }
    }
});
const { actions, reducer } = todoSlice;
export const { addPost, removePost, setOption } = actions;
export default reducer;