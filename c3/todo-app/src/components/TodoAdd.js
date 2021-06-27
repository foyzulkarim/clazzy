import { useEffect, useState } from 'react'

const TodoAdd = ({ addTodo }) => {

  const [title, setTitle] = useState('');

  const updateText = (e) => {
    setTitle(e.target.value);
  }

  const submit = (e) => {
    if (e.key === 'Enter') {
      addTodo(title);
      setTitle('');
      e.target.value = '';
    }
  }

  return (
    <input type="text" className="form-control add-todo" placeholder="Add todo" onChange={updateText} onKeyPress={submit} />
  );
}

export default TodoAdd;