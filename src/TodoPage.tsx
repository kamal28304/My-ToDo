import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import Todo from "./Todo"
import DoneTodo from './DoneTodo';
import Button from "./Button"
import Input from "./Input"

type Todo = {
  checked: boolean,
  value: string,
}
const TodoPage: FC = () => {

  const [click, setClick] = useState(false)
  const [todos, setTodos] = useState<Todo[]>([])
  const [doneTodos,setDoneTodos]=useState<Todo[]>([])

  const [inputValue, setInputValue] = useState("")

  
  const handleInputChangeValue = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const addToDo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(inputValue===""){
      return;
    }
  setTodos([...todos, { checked: false, value: inputValue}])

    setInputValue("")
    setClick(false)
  }

  const openForm = () => {
    setClick(true);
  }

  const closeForm = () => {
    setClick(false);
    setInputValue("")
  }
  
  const onCheckboxClick = ((todo:Todo) => {
    const filteredTodo =
      todos.filter((t) => t.value !== todo.value)
    setTodos(filteredTodo)
    setDoneTodos([...doneTodos, todo])
  })

  const onDoneCheckboxClick = ((todo:Todo) => {
    const filteredTodo =
      doneTodos.filter((t) => t.value !== todo.value)
    setDoneTodos(filteredTodo)
    setTodos([...todos, todo])
  })

  
  //console.log("done todos", doneTodos)

  const deleteTodo = (index:number) => {
    const newTodo = todos
console.log("newTodo",newTodo)
    newTodo.splice(index, 1)
     console.log("newTodo",newTodo)
    setTodos([...newTodo]);
  }
  
const deleteDoneTodo = (index:number) => {
    const newTodo = doneTodos
console.log("newTodo",newTodo)
    newTodo.splice(index, 1)
     console.log("newTodo",newTodo)
    setDoneTodos([...newTodo]);
  }


  
  useEffect(() => {
    const todosString = JSON.stringify(todos)
    localStorage.setItem("todos", todosString)
  }, [todos])


  return (
    <div >
      <div className="shadow-lg p-3 ">
        <h1 className="text-3xl font-serif font-bold text-gray-700">My ToDo</h1>
      </div>

      <div className="m-5">
        <h1 className="text-3xl font-mono font-bold text-gray-700 my-4">Things to get done</h1>
        {todos.length > 0 ? <h1 className="text-xl font-serif font-bold text-gray-700 my-3">Things to Do</h1> : <h1 className="text-xl font-serif font-bold text-gray-700">No todos here!</h1>}
        {todos.filter((t) => {
          return t.checked !== true;
        }).map((item, index) => {
          return (

            <Todo
              key={item.value}
              todo={item}
              onClick={onCheckboxClick}
              deleteTodo={() => deleteTodo(index)}

            />

          )
        })}

        {click && <form onSubmit={addToDo} className="shadow-xl  rounded-md w-full space-y-4 p-3 my-4 max-w-4xl">
          <h1 className="text-xl text-gray-600 ">Create a ToDo</h1>
          <div className="flex flex-col space-y-4">
            <Input
              type="text"
              value={inputValue}
              className="self-start px-5 rounded-lg"
              placeholder="Add an todo "
              onChange=
              {handleInputChangeValue} />
            <div className="flex space-x-10">
              <Button
                className="self-start my-4 bg-green-500" type="submit">Save</Button>

              <Button
                type="button"
                className="my-4 hover:bg-red-700 bg-red-500"
                onClick={closeForm}>Cancel</Button>
            </div>
          </div>
        </form>}

        {!click && <Button className="hover:bg-green-400 bg-indigo-500 mt-5" onClick={openForm}>Add ToDo +</Button>}
        {todos.length > 0 && <h1 className="text-xl font-serif font-bold text-gray-700 my-3">Things Done</h1>}

        {doneTodos.map((item, index) => {
          return (

            <DoneTodo
              key={item.value}
              todo={item}
              onClick={onDoneCheckboxClick}
            deleteTodo={() => deleteDoneTodo(index)}
            />
          )
        })}



        {todos.length == 0 && <h1 className="text-xl font-serif font-bold text-gray-700 my-3">No todos here!</h1>}
      </div>
    </div>
  );
}

export default TodoPage;