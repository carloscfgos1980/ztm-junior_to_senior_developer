// import { CHANGE_SEARCHFIELD } from "./constant";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

  type robotsData = {
    id:number,
    name:string,
    email:string,

}

type RobotState = {
    robots:robotsData[]
    searchfield: string,
    loading: boolean
}


export const getUsersAsync = createAsyncThunk(
    'users/getUsersAsync',
    async (): Promise</*unresolved*/ any> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
            const users = await response.json();
            return { users }
        }
    }
);


const initialState: RobotState = {        
    robots:[],
    searchfield: '',
    loading: true,
}


export const filteredRobotsSlice = createSlice({
    name: 'filteredRobots',
    initialState,
    reducers: {
        filterRobot: (state, action: PayloadAction<string>) => {
            state.searchfield = action.payload;
        }
    },
    extraReducers: (builder) => {
    builder.addCase(getUsersAsync.fulfilled, (state, action: PayloadAction<any>) => {   
        state.robots = action.payload.users
        state.loading = false
    })
  },

})

export const { filterRobot } = filteredRobotsSlice.actions

export default filteredRobotsSlice.reducer