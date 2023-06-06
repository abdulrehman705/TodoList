import { observer } from 'mobx-react'
import todoList from './TodoStore'
import { Button, Checkbox } from 'antd'
import './App.css'

const TodoItem = observer(({ todo }) => (
    <div className='InnerContainer'>
        <Checkbox
            checked={todo.completed}
            onChange={() => todo.toggle()}
        />
        <p contentEditable={true} id="item" className={todo.completed ? "ComplteText" : "Text"}>{todo.title}</p>
        <Button className='btn' type='primary' onClick={() => RemoveTodo(todo)}>Remove</Button>
    </div>
))

const RemoveTodo = (item) => {
    todoList.remove(item)
}

export default TodoItem;