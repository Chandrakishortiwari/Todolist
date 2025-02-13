import { useState } from 'react'



function App() {
  const [todolist, setTodolist] = useState([])

  const fomeHendler = (e)=>{
    e.preventDefault();


    let todoname= e.target.todo.value;
    if(!todolist.includes(todoname)){
      let finalTodolist = [...todolist, todoname]
      setTodolist(finalTodolist);

    }else{
      alert("todo already add")
    }

    console.log(todoname)
  }
  
 

  return (
    <>
    <h1 className=' text-3xl font-bold'>Todo list</h1>
 
    <form onSubmit={fomeHendler}>
    <input placeholder='name ' name='todo' className='border text-red-500'></input> 
    <button className="bg-cyan-500 ...">Add</button>
    </form>
    </>
  )
}

export default App
