import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import Cookies from 'js-cookie';

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({email, password })
    })
    const json1 = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json1.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json1))
      //Cookies.set("user", JSON.stringify(json),{ expires: 1, path: '/' });

      // update the auth context
      dispatch({type: 'LOGIN', payload: json1})

      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}