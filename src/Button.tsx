import React,{FC,ButtonHTMLAttributes} from "react"

type ButtonProps={
  theme?:"primary"|"secondary";
}&
ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<ButtonProps>=({theme,className,...rest})=>{
  
  return (
    <div>
    <button
      {...rest}
      className={"px-3 py-1 bg-indigo-500 text-white " + className}
      ></button>
    </div>
  )
}
export default Button;