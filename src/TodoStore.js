import { types } from 'mobx-state-tree';


const Todo = types
  .model({
    id: types.string,
    title: types.string,
    completed: false,
  })
  .actions(items => ({
    toggle() {
      items.completed = !items.completed;
    },
  }));

const TodoList = types
  .model({
    todos: types.array(Todo),
  })
  .actions(items => ({
    add(title) {
      const id = toString(Math.random());
      items.todos.push({ id, title });
    },
    remove(todo) {
      items.todos.remove(todo);
    },
  }))

const todoList = TodoList.create({
  todos: [
    {
      id: '1',
      title: 'This is the first Tasks'
    },
    {
      id: '2',
      title: 'This is the second Task'
    },
    {
      id: '3',
      title: 'This is the third Task'
    },
  ],
});

export default todoList;