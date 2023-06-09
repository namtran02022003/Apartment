import { FC, useState, SyntheticEvent } from 'react'
import styled from 'styled-components'
import Inputs from '../Inputs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEye } from '@fortawesome/free-solid-svg-icons'
import backgroung_login from '../../../assets/images/background_login.png'
import ValidateLogin from './ValidateLogin'
import { useNavigate } from 'react-router-dom'
import baseAxios from '../../../apis/ConfigAxios'
import AlertMessage from '../../../components/alertMessage/AlertMessage'
const LoginFormStyled = styled.div`
  background-image: url(${backgroung_login});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  form {
    width: 300px;
    border: 1px solid #ccc;
    padding: 10px 15px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    h2 {
      text-align: center;
    }
    .position-relative {
      position: relative;
    }
    #fa-eye-login {
      color: blue;
      top: 42%;
      right: 0%;
      display: block;
      cursor: pointer;
      padding: 10px 11px;
      border-radius: 0 10px 10px 0;
      position: absolute;
      &:hover {
        background: #ccc;
      }
    }
    label {
      display: block;
      margin: 10px 0 5px 0;
    }
    input {
      width: 100%;
      padding: 10px 15px;
      border-radius: 10px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      &:focus-within {
        outline: 1px solid #6666;
      }
    }
    button {
      display: block;
      border: none;
      padding: 8px 15px;
      width: 80%;
      background: #00338d;
      border-radius: 15px;
      margin: 20px auto;
      cursor: pointer;
      color: #fff;
      .icon-lock {
        margin-right: 5px;
        margin-bottom: 1px;
      }
      &:hover {
        color: #fff;
        background: blue;
      }
    }
    button:disabled {
      opacity: 0.5;
    }
  }
`

interface userFace {
  username?: string
  password?: string
}
const LoginForm: FC = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const [type, setType] = useState(true)
  const [show, setShow] = useState(false)
  const [mess, setMess] = useState('')
  const [errMessage, setErrMessage] = useState<userFace>({
    username: '',
    password: ''
  })
  const Navigate = useNavigate()
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const flag = Object.keys(ValidateLogin(user, setErrMessage)).length > 0
    if (!flag) {
      try {
        const res = await baseAxios.post(`/login`, user)
        await localStorage.setItem('token', JSON.stringify(res.data.accessToken))
        Navigate('/')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setMess(error?.response?.data?.message)
        setShow(true)
      }
    }
  }

  return (
    <LoginFormStyled>
      {show && <AlertMessage setShow={setShow} show={show} message={mess} />}
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Inputs
          onChange={(e) => {
            setUser({ ...user, username: e.target.value })
            setErrMessage({ ...errMessage, username: '' })
          }}
          name="username"
          type="text"
          label="Username"
          placeholder="Enter_username"
          value={user.username}
          err={errMessage.username}
        />
        <div className="position-relative">
          <Inputs
            type={type ? 'password' : 'text'}
            name="password"
            label="Password"
            placeholder="Enter_password"
            value={user.password}
            err={errMessage.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value })
              setErrMessage({ ...errMessage, password: '' })
            }}
          />
          <FontAwesomeIcon onClick={() => setType(!type)} id="fa-eye-login" icon={faEye} />
        </div>
        <button type="submit" disabled={!user.password || !user.username}>
          <FontAwesomeIcon className="icon-lock" icon={faLock} />
          Login
        </button>
      </form>
    </LoginFormStyled>
  )
}

export default LoginForm
