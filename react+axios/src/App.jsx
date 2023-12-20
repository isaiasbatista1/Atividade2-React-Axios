import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [dados, setDados] = useState()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) =>{
      console.log(res.data)
      setDados(res.data)
  })
  .catch((error)=> console.log(error)) 
  },[])
  
  return (
    <>
      <div>
        <h2>{ dados? `id: ${dados.id}` : "Carregando..."}</h2> 
        <h2>{ dados? `titulo: ${dados.title}` : "Carregando..."}</h2> 
        <h2>{ dados? `body: ${dados.body}` : "Carregando..."}</h2> 
      </div>
    </>
  )
}

export default App
