import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    useEffect(() => {
      axios.get('http://localhost:3000/auth/logout',{withCredentials:true})
      .then((response)=>{
        navigate('/login')
      })
      .catch((error)=>{
        console.log(error);
      })
    }, [])
  return (
    <div>
      <h1>Logging Out...</h1>
    </div>
  )
}

export default Logout
