import React, { useState } from "react"
import LoginForm from "../components/LoginForm"
import SignUpForm from "../components/SignUpForm"

function Login({ onLogin }) {
  // const [showLogin, setShowLogin] = useState(true)
  return (
    <div>
      <SignUpForm onLogin={onLogin} />
    </div>
  )
}

export default Login
