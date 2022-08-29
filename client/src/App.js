import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Test from "./Test"
import PageCount from "./PageCount"
import Login from "./pages/Login"

function App() {
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => setUser(user))
  //     }
  //   })
  // }, [])

  if (!user) {
    return <Login onLogin={setUser} />
  }


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/testing" element={<Test />} />
          <Route path="/" element={<PageCount />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
