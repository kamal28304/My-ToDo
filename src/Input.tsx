import React,{InputHTMLAttributes} from "react"

type InputProps={
  className:string,
}&InputHTMLAttributes<HTMLInputElement>

function Input({className,onChange,...rest}:InputProps){
  return (
    <div>
    <input 
      
      {...rest}
      onChange={onChange}
      className={"border-2 border-gray-500 hover:border-green-500 p-2 self-start rounded-sm focus:outline-none focus:ring" + className} 
      />
    </div>
  )
}

export default Input;