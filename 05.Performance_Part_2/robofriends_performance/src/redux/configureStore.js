import { configureStore } from '@reduxjs/toolkit';
import { filteredRobotsSlice } from './filteredRobots';

export const store = configureStore({
    reducer: {
        filteredRobots: filteredRobotsSlice.reducer
    }
})

