
import { useTodos } from "../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";




export const TodoApp = () => {
  const {todos, handlerNewTodo, handlerRemoveTodo, handlerToggleTodo, todosCounter, todosPending} = useTodos();

  return (
    <>
    <h1>Todos App: {todosCounter} <small>({todosPending} Pendientes)</small></h1>
    <hr />
    <div className="row">
        <div className="col-7">
            <TodoList 
                todos={todos}
                onDeleteTodo={id=>handlerRemoveTodo(id)}
                onToggleTodo={id=>handlerToggleTodo(id)}
                 />
        </div>
        <div className="col-5">
            <h2>Agregar Todo</h2>
            <hr />
            <TodoAdd onNewTodo={handlerNewTodo}/>          

        </div>        

    </div>
    </>
  )
}
