import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import { useEffect } from "react";
import axios from "axios";
import apiUrl from "../../handler/apiUrl";
import { useNavigate } from "react-router-dom";


const RegisterForm = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
      password2: "",
    })

  const { username, email, password, password2 } = formData;
  const [isPwMatch, setPwMatch] = useState(true)

  const [isUnameCheck, setUnameCheck] = useState(false)
  const [isEmailCheck, setEmailCheck] = useState(false)
  const [usernameError, setUnameError] = useState('')
  const [emailError, setEmailError] = useState('')

  const onChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(()=>{
    (async()=>{
      if(password !== password2){
        setPwMatch(false)
      }else{
        setPwMatch(true)
      }
    })()
  },[password2, password])

  
    const onRegister = async (e) =>{
      e.preventDefault()
      if(usernameError !== '' || emailError !== '' || isUnameCheck === false || isEmailCheck === false){
        alert('please check username or email first!')
        return
      }
      await axios.post(apiUrl.PostRegister(), {
        username : formData.username,
        email : formData.email,
        password : formData.password
      })
      navigate('/registerSuccess')
    }

    const onUsernameCheck = async (e) =>{
      if(formData.username === ''){
        alert('please insert username first !')
        return
      }
      await axios.get(apiUrl.CheckUsername(formData.username)).then(res=>setUnameError('')).catch(error=>setUnameError(error.response.data.meta.message))
      setUnameCheck(true)
    }

    const onEmailCheck = async (e) =>{
      if(formData.email === ''){
        alert('please insert email first !')
        return
      }
      await axios.get(apiUrl.CheckEmail(formData.email)).then(res=>setEmailError('')).catch(error=>setEmailError(error.response.data.meta.message))
      setEmailCheck(true)
    }

  return (
      <div className="w-full bg-[#2c3038] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Register your account
          </h1>
              <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Username
                  </label>
                  {!isUnameCheck? null : usernameError?(<div className="text-red-600">{usernameError}</div>):(<div className="text-green-600">Aman</div>)}
                  <div className="flex flex-row">
                    <input type="username" name="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-r-none rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" value={username} onChange={onChange} required />
                    <button onClick={onUsernameCheck} className={usernameError? 'bg-red-700 text-white rounded-r-lg': 'bg-slate-500 text-black rounded-r-lg'}>check username</button>
                  </div>
                  
              </div>

              <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your email
                  </label>
                  {!isEmailCheck? null : emailError?(<div className="text-red-600">{emailError}</div>):(<div className="text-green-600">Aman</div>)}
                  <div className="flex flex-row">
                    <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-r-none rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" value={email} onChange={onChange} required />
                    <button onClick={onEmailCheck} className={emailError? 'bg-red-700 text-white rounded-r-lg': 'bg-slate-500 text-black rounded-r-lg'}>check email</button>
                  </div>
              </div>

              <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                  </label>
                  <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password} onChange={onChange} required/>
              </div>
              <div>
                  <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Conffirm your password
                  </label>
                  <input type="password" name="password2" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password2} onChange={onChange} required/>
                  {isPwMatch? null : <label htmlFor="password2" className="text-[#fc3f3f]">Password doesn't match!</label>}
              </div>

              <button type="submit" className="w-full text-white bg-[#1b8cc0] hover:bg-[#11b0fa] transition ease-in focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={onRegister}>
                  Sign up
              </button>

              <p className="text-sm font-light text-gray-300">
                  Already have an account?{" "}
                  <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Sign in
                  </Link>
              </p>
      </div>
      </div>
  )
}

const register = () => {
  return (
    <section className="flex flex-col bg-[#26282D]">
        <div>
            <Header />
        </div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link
                to="/"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                Pwipper-Play
                </Link>
                <RegisterForm/>
            </div>
        </section>
  )
}

export default register