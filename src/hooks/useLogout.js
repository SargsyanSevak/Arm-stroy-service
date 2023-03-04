import { useAuthContext } from './useAuthContext'
import { useWorkoutsContext } from './useWorkoutsContext'
import Cookies from 'js-cookie';

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchWorkouts } = useWorkoutsContext()
  const logout = () => {

    // remove user from storage
    localStorage.removeItem('user')
    //Cookies.remove('user');
    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null })
  }

  return { logout }
}