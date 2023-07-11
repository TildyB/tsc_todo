import { useState,useEffect } from 'react'
import {TodoList,ResponseTodo} from '../interfaces/AppComponent.interfaces'
import axios from 'axios'
import './App.css'

function App() {


 const [todoList,setTodoList] = useState<TodoList[]>([])


  useEffect(()=>{  
    const getTodoList = async() =>{
       const response: ResponseTodo = await axios.get("http://localhost:8080/")
       setTodoList(response.data)
      } 
      getTodoList()
    },[])

    const changeDone = async(id:String) =>{
       const  response: {status:number} = await axios.post(`http://localhost:8080/${id}`)
      console.log(response)
    }

  return (
    <>
    {todoList.map(todo => {
      return <div>
        <h2>{todo.name}</h2>
        <h3>{todo.location}</h3>

        <h3>{todo.isDone ? "Done" : "Pending"}</h3>
        <button onClick={()=> changeDone(todo._id)} >{todo.isDone? "Im Done" : "Not done yet"}</button>
        </div>     
    })}
    </>
  )
}

export default App
