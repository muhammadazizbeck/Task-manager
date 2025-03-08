import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/tasks/lcview/');
    return response.data;
});


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default tasksSlice.reducer;

