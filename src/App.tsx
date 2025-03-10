import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import UserTable from './components/ui/custom/UserTable'


function App() {
  const [users, setUsers] = useState([])
  const [filterd, setFiltered] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        setFiltered(data)
      })
  }, []);

  return (
    <div className='w-[100%] h-screen bg-gray-300 text-white'>
      <ResizablePanelGroup direction="horizontal">

        <ResizablePanel>


          <UserTable  />

        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>

    </div>
  )
}

export default App
