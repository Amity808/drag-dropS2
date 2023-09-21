
import React from 'react'
import { Link } from "react-router-dom"
import { getAuth } from 'firebase/auth'
import { signOut } from 'firebase/auth'
import firebase_app from "../config" 
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import { useAuthContext } from '../context/AuthContext'

const NavBar = () => {
  const navigate = useNavigate()
  const auth = getAuth(firebase_app)
  const { user } = useAuthContext()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/signin")
      console.log("Sign out Successfully")
      toast.success("Sign Out Successfully")
    }).catch((error) => {
      toast.error(`${error}`)
    })
  }
  return (
    <div className=' fixed font-bold top-0 w-full bg-white text-black shadow-md flex flex-row shadow-orange-500 justify-between py-4 px-5'>
        <div className=' flex flex-row'>
            <p>Welcome</p>
        </div>
            <p>Gallery Show</p>
        <div>
          { user ? <button onClick={handleSignOut}>Sign Out</button> : <Link to="/signup" on>Sign Up</Link>}
        </div>
    </div>
  )
}

export default NavBar
