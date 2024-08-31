import AddToDo from "./compoonents/Addtodo"
import Navbar from "./compoonents/navbar"
import Todos from "./compoonents/todos2"


function App() {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT </h1>
      <Navbar/>
      <AddToDo/>
      <Todos/>
      </main>
  )
}

export default App