import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeLogginStatus } from '../../features/login/loginSlice'

const Logout = () => {
  const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
      axios.get('http://localhost:3000/auth/logout',{withCredentials:true})
      .then((response)=>{
        dispatch(changeLogginStatus(false))
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
