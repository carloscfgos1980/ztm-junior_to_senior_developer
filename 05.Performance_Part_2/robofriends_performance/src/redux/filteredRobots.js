// import { CHANGE_SEARCHFIELD } from "./constant";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const getUsersAsync = createAsyncThunk(
    'users/getUsersAsync',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
            const users = await response.json();
            return { users }
        }
    }
);


const initialState = {        
    robots:[],
    searchfield: '',
    loading: true,
}



export const filteredRobotsSlice = createSlice({
    name: 'filteredRobots',
    initialState,
    reducers: {
        filterRobot: (state, action) => {
            state.searchfield = action.payload;
        }
    },
    extraReducers: (builder) => {
    builder.addCase(getUsersAsync.fulfilled, (state, action) => {     
      console.log('loading state', state.loading)
      state.robots = action.payload.users
      state.loading = false
    })
  },

})

export const { filterRobot } = filteredRobotsSlice.actions

export default filteredRobotsSlice.reducer