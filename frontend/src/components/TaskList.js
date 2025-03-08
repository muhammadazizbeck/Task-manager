import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/tasksSlice';

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks, status, error } = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    console.log("Tasks from Redux Store:", tasks); // Ma’lumot kelgan-kelmaganini tekshirish

    if (status === 'loading') return <p>Loading tasks...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.length === 0 ? <p>No tasks found.</p> : 
                    tasks.map(task => (
                        <li key={task.id}>{task.title} - {task.status}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default TaskList;


