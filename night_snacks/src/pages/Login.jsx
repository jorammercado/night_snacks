
import {
  LoginWrapper,
  LoginBackground,
  LoginHeader,
  LoginLabel,
  ErrorList,
  ErrorList2,
  FormInput,
  LoginButton,
  OkButton
} from '../styles/loginElements'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
const VITE_API_URL = import.meta.env.VITE_API_URL


const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])

  const validatesEmail = () => {

    const emailErrors = []

    if (!email.length) {
      emailErrors.push('Email is required.')
      return emailErrors
    }

    if (email.split(".").length !== 2 || email.split("@").length !== 2) {
      emailErrors.push(`Email must contain one '@' and one '.'`)
    }
    if (email.length < 5 || email.length > 150) {
      emailErrors.push('Email must be between 5 and 150 characters.')
    }

    return emailErrors
  }

  const validatesPassword = () => {

    const passwordErrors = []

    if (!password.length) {
      passwordErrors.push('Password is required.')
      return passwordErrors
    }

    if (!/\d/.test(password)) {
      passwordErrors.push('Password must include at least one numeric character.')
    }
    if (password.length < 8 || password.length > 150 || !/^[\x00-\x7F]*$/.test(password)) {
      passwordErrors.push('Password must be between 8 and 50 ASCII characters.')
    }

    return passwordErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post(`${VITE_API_URL}/users/login`, {
      email,
      password
    })
      .then(res => {
        setCurrentUser(res.data.oneUser)
        setErrors([])
        navigate(`/users/${res.data.oneUser.user_id}/profile`)
      })
      .catch(err => {
        console.error(err.response.data.error)
        processLoginErrors(err.response.data.error)
      })
  }

  const processLoginErrors = (serverRes) => {
    if (!serverRes)
      setErrors([...validatesPassword(), ...validatesEmail()])
    else
      setErrors([...validatesPassword(), ...validatesEmail(), `server: ${serverRes}`])
  }

  const handleOk = (event) => {
    event.preventDefault()
    setEmail("")
    setPassword("")
    setErrors([])
  }

  return (
    <LoginWrapper>
      <LoginBackground onSubmit={handleSubmit}>
        {
          !errors.length ?
            <>
              <LoginLabel>
                <LoginHeader>{!errors.length ? `Login to Your Account` : null}</LoginHeader>
                <ErrorList>
                  <li>{null}</li>
                </ErrorList>
              </LoginLabel>
              <FormInput type="text" onChange={e => setEmail(e.currentTarget.value)} placeholder="Email" />
              <FormInput type="password" onChange={e => setPassword(e.currentTarget.value)} placeholder="Password" />
              <LoginButton >{'Sign In'}</LoginButton>
            </> :
            <>
              <ErrorList2>
                {errors.length ? errors.map((error, i) => <li key={`error-${i}`}>&bull;&nbsp;{error}</li>) : null}
              </ErrorList2>
              <OkButton onClick={handleOk}>
                OK
              </OkButton>
            </>
        }
      </LoginBackground>
    </LoginWrapper >
  )
}

export default Login
