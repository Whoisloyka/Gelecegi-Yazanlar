import "./App.css"
import UserList from "./components/UserList"
import UserDetail from "./components/UserDetail"
import React, { useState } from "react"

function App() {
  const [activeUserId, setActiveUserId] = useState(null)
  return (
    <div className='App'>
      Active User ID:{activeUserId}
      <div className='container'>
        <UserList setActiveUserId={setActiveUserId} />
        <UserDetail activeUserId={activeUserId} />
      </div>
    </div>
  )
}

export default App
