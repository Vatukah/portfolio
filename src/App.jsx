import { useState } from 'react'
import Nav from './components/nav'
import './App.css'
import Main from './components/mian'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex  items-center w-screen h-screen '>
    <Nav/>
    <Main/>
      </div>
  )
}

export default App
