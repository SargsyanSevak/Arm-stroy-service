import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const [isSignedUp,setIsSignedUp] = useState('')
  const signup = async (fullName,email, password) => {
    setIsLoading(true)
    setError(null)
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ fullName,email, password})
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      setIsSignedUp('Ваша регистрация прошла успешно')
      setTimeout(()=>{
        setOpen(false)
        setIsSignedUp(null)
      },2500)
      // save the user to local storage
      //localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'SIGNIN', payload: json})

      // update loading state
      //setIsLoading(false)
    }
  }

  return { signup, isLoading, error ,isSignedUp,open,setOpen}
}