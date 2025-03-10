import { useState, useEffect } from 'react'
import './App.css'
import UserTable from './components/ui/custom/UserTable'
import SearchForm from './components/ui/custom/SearchForm'
import people from './util/Person'
import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import AddUser from './components/ui/custom/AddUser'


function App() {
  const [users, setUsers] = useState(people)
  const [filtered, setFiltered] = useState(people)


  const removeUser = (id: number) => {
    setUsers((prevUsers) => {
      const updtUser = prevUsers.filter((user) => user.id !== id)
      setFiltered(updtUser)
      return updtUser;
    })

  }

  return (
    <div className='w-[95%] h-[95%] mx-auto bg-white text-white p-4 rounded-2xl shadow-[0px_0px_20px_-1px_gainsboro]' >
      <ResizablePanelGroup direction="horizontal" className='h-full'>

        <ResizablePanel>

          <SearchForm users={users} setFiltered={setFiltered} />
          <UserTable filter={filtered} setDelete={removeUser} />

        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel>
          <AddUser />
        </ResizablePanel>
      </ResizablePanelGroup>

    </div>
  )
}

export default App
