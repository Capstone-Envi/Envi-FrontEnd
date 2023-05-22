import { useState } from 'react'
import Navbar from './components/Pages/Navbar/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar/>
    </div>
  )
}

export default App
