import './App.css';
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import todoList from './TodoStore';
import { Button } from 'antd';
import TodoItem from './TodoItems';
import { Link } from 'react-router-dom';


const ToDoList = observer(() => {
    const [AddTask, setAddTask] = useState()

    const AddTaskbtn = () => {
        if (AddTask && todoList.id !== '') {
            todoList.add(AddTask)
            setAddTask('')
        } else {
            alert(
                'Please enter a task name first'
            )
        }
    }

    return (
        <div className='App'>
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    value={AddTask}
                    className='input'
                    onChange={e => {
                        setAddTask(e.target.value);
                    }}
                />
                <Button type='dashed' onClick={AddTaskbtn}>Add Task</Button>
            </div>
            {todoList.todos.map(todo => (
                <div className='OuterContainer'>
                    <TodoItem key={todo.id} todo={todo} />
                </div>
            ))}
            {/* <Link to={'FirstTask'}>
                <Button type='dashed'>First Task</Button>
            </Link> */}
        </div>

    )
});

export default ToDoList;
