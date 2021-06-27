import { useEffect, useState } from 'react'

import TodoAdd from './TodoAdd';
import TodoListMarkDone from './TodoListMarkDone';
import TodoListPending from './TodoListPending';
import TodoListDone from './TodoListDone';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todosPending, setTodosPending] = useState([]);
  const [todosDone, setTodosDone] = useState([]);

  const addTodo = (todo) => {
    console.log('i am addTodo', todo);
    const temp = [...todos];
    temp.push({ title: todo, state: 'pending' });
    setTodos(temp);
    console.log(temp);
  }

  const markDoneTodo = (todoTitle) => {
    const index = todos.findIndex(todo => todo.title === todoTitle);
    const temp = [...todos];
    temp[index].state = 'done';
    setTodos(temp);
  }

  const removeDoneTodo = (todoTitle) => {
    const index = todos.findIndex(todo => todo.title === todoTitle);
    const temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  useEffect(() => {
    console.log('updating todos', todos);
    const pendings = todos.filter(todo => todo.state === 'pending');
    setTodosPending(pendings);
    const dones = todos.filter(todo => todo.state === 'done');
    setTodosDone(dones);
  }, [todos]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="todolist not-done">
            <h1>Todos</h1>
            <TodoAdd addTodo={addTodo} />
            <TodoListMarkDone />
            <hr />
            <TodoListPending todos={todosPending} markDoneTodo={markDoneTodo} />
          </div>
        </div>
        <div className="col-md-6">
          <TodoListDone todos={todosDone} removeDoneTodo={removeDoneTodo} />
        </div>
      </div>
    </div>
  );

}


export default Todos;