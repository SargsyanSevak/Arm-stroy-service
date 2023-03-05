import { useState } from "react";
import { instance } from "../axios";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const [isSignedUp, setIsSignedUp] = useState(false);
  const signup = async (fullName, email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await instance.post("/api/user/signup", {
        fullName,
        email,
        password,
      });
      dispatch({ type: "SIGNIN", payload: res.data });
      setIsSignedUp("Ваша регистрация прошла успешно");
      setTimeout(() => {
        setOpen(false);
        setIsSignedUp(false);
      }, 2500);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.error);
    }
  };

  return { signup, isLoading, error, isSignedUp, open, setOpen };
};
