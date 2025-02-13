import { useState } from 'react'



function App() {
  const [todolist, setTodolist] = useState([])

  
  // Add todo value

  const fomeHendler = (e)=>{
    e.preventDefault();


    let todoname= e.target.todo.value;
    if(!todolist.includes(todoname)){
      let finalTodolist = [...todolist, todoname]
      setTodolist(finalTodolist);

    }else{
      alert("todo already add")
    }
    e.target.reset();
    console.log(todoname)
  }
  

  let list = todolist.map((value, index)=>{
     return(
      <TodoListeItem value={value} key={index} indexN={index}  todolist={todolist} setTodolist={setTodolist} />
     )
  })
 

  return (
    <>
    <h1 className=' text-3xl font-bold'>Todo list</h1>
     
     {/* from section */}


    <form onSubmit={fomeHendler}>
    <input placeholder='name ' name='todo' className='border text-red-500'></input> 
    <button className="bg-cyan-500 ...">Add</button>
    </form>

    {/* Todo list represent section */}

    <ul>
      {list}
    
    </ul>


    </>
  )
}

export default App;

function TodoListeItem({value, indexN, todolist, setTodolist}){
  let delet = ()=>{
    let finalData = todolist.filter((v, i)=> i !== indexN);
     setTodolist(finalData);
  }
  return(
    <li> {value}   <button className="bg-cyan-500 ...">Reanme</button> <button onClick={delet} className="bg-cyan-500 ...">Delete</button></li>
  )
}
