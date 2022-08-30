import React, { useState, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Test from "./Test"
import PageCount from "./PageCount"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user))
      }
    })
  }, [])

  // if (!user) {
  //   return (
  //     <>
  //       <NavBar user={user} setUser={setUser} />
  //       <Login user={user} onLogin={setUser} />
  //     </>
  //   )
  // }
  // is there some way to use this without creating an infinite loop because of the auto login
  // if (!user) {
  //   navigate("/login", {replace: true} )
  // }

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <div className="App">
        <Routes>
          {/* <Route path="/testing" element={<Test />} />
          <Route path="/" element={<PageCount />} /> */}

          <Route
            path="/"
            element={
              !user ? (
                <Login user={user} onLogin={setUser} />
              ) : (
                <Navigate replace to={"/home"} />
              )
            }
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
