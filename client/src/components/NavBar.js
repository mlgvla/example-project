import React from "react"
import { Link } from "react-router-dom"
// Will have to alias Link if using Chakra UI

function NavBar({ user, setUser }) {
    console.log(user)
  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setUser(null)
      }
    })
  }
  return (
    <>
      <div>Mahlzeit</div>
      {/* if there is a user, then say hi user and show logout button otherwise show login and signup buttons */}
      {user ? `Hi, ${user.username}` : "Show sign up and login choices"}
      {user ? <button onClick={handleLogoutClick}>Logout</button> :  null }
      <hr />
    </>
  )
}

export default NavBar
