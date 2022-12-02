import {FC} from "react";
import Input from "./Input"
import Button from "./Button"
import { TiDeleteOutline } from "react-icons/ti"

type TodoProps={
  todo:{checked:boolean,value:string},
  onClick:(newTodo:{checked:boolean,value:string})=>void,
  deleteTodo?:()=>void
}


const  Todo:FC<TodoProps>=({
  todo,
  onClick,
  deleteTodo,
  }) =>{

  function handleCheckboxClick(event:any) {
    const newTodo:{checked:boolean,value:string} ={checked:event.target.checked,value:todo.value}
    onClick(newTodo)
    }

//const deleteTodos=()=>{
  //deleteTodo()
//}
  

  return (
    <div className="flex items-center justify-between  p-2 border border-indigo-400 max-w-4xl">
   
<div className="flex items-center space-x-2 justify-center">
      <Input 
        type="checkbox"
        checked={todo.checked}
        onChange={handleCheckboxClick}
        className="hover:border-green-500 "/>
        
      {!todo.checked && <h1 className="text-lg text-red-500 mb-2" >{todo.value}</h1>  }
        
      {todo.checked==true && <h1 className="text-lg text-green-500 mb-2">{todo.value}</h1>  }
</div>
      <div>
  <TiDeleteOutline onClick={ deleteTodo} className="text-4xl text-red-400"/>
        </div>
    
  </div>
    )
}

export default Todo;