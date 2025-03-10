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


function App() {
  const [users] = useState(people)
  const [filtered, setFiltered] = useState(people)

  return (
    <div className='w-[95%] h-[95%] mx-auto bg-white text-white p-4 rounded-2xl shadow-[0px_0px_20px_-1px_gainsboro]' >
      <ResizablePanelGroup direction="horizontal" className='h-full'>

        <ResizablePanel>

          <SearchForm users={users} setFiltered={setFiltered} />
          <UserTable filter={filtered} />

        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>

    </div>
  )
}

export default App
