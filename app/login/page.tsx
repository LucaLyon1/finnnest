'use client'
import { login, signup, handleSignIn } from '@/app/login/actions'
import { FcGoogle } from 'react-icons/fc'

export default function LoginPage() {

    const checkAndSignIn = () => {
        handleSignIn();
    }
    return (
        <form className='border-2 border-[#D8D8D8] w-3/4 lg:w-1/2 2xl:w-1/3 m-auto flex flex-col gap-3 p-5 rounded-md'>
            <label htmlFor="email">Email:</label>
            <input className='p-2 border-2 border-[#D8D8D8] rounded-md ' id="email" name="email" type="email" />
            <label htmlFor="firstname">First Name:</label>
            <input className='p-2 border-2 border-[#D8D8D8] rounded-md ' id="firstname" name="firstname" type="firstname" />
            <label htmlFor="lastname">Last Name:</label>
            <input className='p-2 border-2 border-[#D8D8D8] rounded-md ' id="lastname" name="lastname" type="lastname" />
            <label htmlFor="password">Password:</label>
            <input className='p-2 border-2 border-[#D8D8D8] rounded-md ' id="password" name="password" type="password" />
            <hr />
            <div className='flex justify-around'>
                <div className='flex gap-2'>
                    <input type="radio" name="candidate" value="candidate" checked />
                    <label htmlFor="candidate">Candidate</label>
                </div>
                <div className='flex gap-2'>
                    <input type="radio" name="candidate" value="recruiter" checked />
                    <label htmlFor="recruiter">Recruiter</label>
                </div>
            </div>
            <hr />
            <div>
                <button className='flex gap-5 border-2 border-[#D8D8D8] p-2 justify-center items-center rounded-md w-full hover:bg-[#D8D8D8] transition-all text-lg'
                    formAction={checkAndSignIn}
                >
                    <FcGoogle className='text-3xl' />
                    <span>Sign in with google</span>
                </button>
            </div>
            <div className='flex gap-5 justify-center'>
                <button className='p-2 border-2 bg-cyan-400 border-cyan-400 w-20 rounded-md text-white m-auto hover:bg-cyan-500 transition-all hover:scale-105' formAction={login}>Log in</button>
                <button className='p-2 border-2 border-cyan-400 w-20 rounded-md text-cyan-400 m-auto hover:bg-cyan-400 transition-all hover:text-white hover:scale-105' formAction={signup}>Sign up</button>
            </div>
        </form>
    )
}