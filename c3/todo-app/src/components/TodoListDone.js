const TodoListDone = ({ todos, removeDoneTodo }) => {

  const removeTodo = (todo) => {
    console.log(todo);
    removeDoneTodo(todo.title);
  }

  return (<div className="todolist">
    <h1>Already Done</h1>

    <ul id="done-items" className="list-unstyled">
      {todos.map((todo, i) => {
        return (
          <li key={i}  >{todo.title}<button className="remove-item btn btn-default btn-xs pull-right" onClick={() => { removeTodo(todo) }}><span className="glyphicon glyphicon-remove"></span></button></li>
        )
      })}
    </ul>
  </div>);
}

export default TodoListDone;