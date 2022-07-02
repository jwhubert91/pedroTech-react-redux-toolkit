import React from "react"
import { useDispatch } from "react-redux"
import { login } from "../features/user"

function Login() {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "James",
              age: 30,
              email: "jwhubert91@gmail.com",
            })
          )
        }}
      >
        Login
      </button>
    </div>
  )
}

export default Login
