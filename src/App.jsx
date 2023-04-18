import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setName(name)
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id='name' value={name} onChange={(e)=>{setName(e.target.value)}} />
      <button>Enviar</button>
    </form>
  )
}

export default App
