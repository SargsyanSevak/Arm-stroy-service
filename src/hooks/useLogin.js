import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import Cookies from 'js-cookie';
import { instance } from '../axios';

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)
    instance
    .post('api/user/login',{email, password })
    .then(res =>{
      if (res.status === 400) {
        setIsLoading(false)
        setError(res.data.error)
      }
      localStorage.setItem('user', JSON.stringify(res.data))
      dispatch({type: 'LOGIN', payload: res.data})
      setIsLoading(false)
    })
    // const response = await fetch('/api/user/login', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json',
    //   "Access-Control-Allow-Origin" : "*", 
    //   "Access-Control-Allow-Credentials" : true 
    // },
    //   body: JSON.stringify({email, password })
    // })
    // const json = await response.json()

    // if (!response.ok) {
    //   setIsLoading(false)
    //   setError(json.error)
    // }
    // if (response.ok) {
    //   // save the user to local storage
    //   localStorage.setItem('user', JSON.stringify(json))

    //   // update the auth context
    //   dispatch({type: 'LOGIN', payload: json})

    //   // update loading state
    //   setIsLoading(false)
    // }
  }

  return { login, isLoading, error }
}