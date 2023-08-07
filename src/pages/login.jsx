import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";


const LoginForm = () => {
    const [getLogin, setLogin] = useState({
        email: '',
        password: ''
    })

    const setEmail = (mail) =>{
        const pw = getLogin.password
        setLogin({
            email : mail,
            password : pw
        })
    }

    const setPassword = (pw)=>{
        const mail = getLogin.email
        setLogin({
            email : mail,
            password : pw
        })
    }

    const onLogin= () =>{
        localStorage.setItem('loginInformation', JSON.stringify(getLogin))
    }

    return (
        <div className="w-full bg-[#2c3038] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="/tes" onSubmit={()=>{onLogin()}}>

                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your email
                    </label>
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" value={getLogin.email} onChange={(e)=>{setEmail(e.target.value)}} required />
                </div>

                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Password
                    </label>
                    <input type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={getLogin.password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                            Remember me
                        </label>
                    </div>
                    </div>
                    <Link to="#" className="text-sm font-medium text-primary-600 hover:underline text-white">
                        Forgot password?
                    </Link>
                </div>

                <button type="submit" className="w-full text-white bg-[#1b8cc0] hover:bg-[#11b0fa] transition ease-in focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Sign in
                </button>

                <p className="text-sm font-light text-gray-300">
                    Don’t have an account yet?{" "}
                    <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Sign up
                    </Link>
                </p>
            </form>
        </div>
        </div>
    )
}

const login = () => {
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
                <LoginForm/>
            </div>
        </section>
  )
}

export default login