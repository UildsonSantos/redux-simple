import { createSlice } from "@reduxjs/toolkit";

export const userRegistrySlice = createSlice({
    name: 'userRegistry',
    initialState: {list: []},
    reducers: {
        add: (state, action) => {
            state.list = [ action.payload, ...state.list]
            return state;
        }
    }
});

export const list_map = (state) => state.userRegistry.list;
export const userRegistryActions = userRegistrySlice.actions;
export default userRegistrySlice.reducer;
