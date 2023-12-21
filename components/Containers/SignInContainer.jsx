'use client'

import { useRouter } from 'next/navigation'
import {PiUserCircleLight} from 'react-icons/pi'
import {SlLock} from 'react-icons/sl'

export default function SignInContainer(){
    const router = useRouter()

    return(
        <div className='bg-calm-50 border border-light rounded-lg flex flex-col items-center gap-4 p-4 h-[25%] max-h-[50%] w-96'>
            <h1 className='text-xl font-bold'>Добро пожаловать!</h1>
            <div className='relative h-10 w-full'>
                <input
                    type='text' 
                    className='bg-calm-50 border border-light rounded-lg outline-none transition focus:border-calm-400 pl-4 pr-10 h-full w-full'
                    placeholder='Имя пользователя'
                    minLength={2}
                    maxLength={64}
                    >
                </input>
                <span className='center absolute top-0 right-0 h-10 w-10'>
                    <PiUserCircleLight className='h-6 w-6'/>
                </span>
            </div>
            <div className='relative h-10 w-full'>
                <input
                    type='text' 
                    className='bg-calm-50 border border-light rounded-lg outline-none transition focus:border-calm-400 pl-4 pr-10 h-full w-full'
                    placeholder='Пароль'
                    minLength={2}
                    maxLength={64}
                    >
                </input>
                <span className='center absolute top-0 right-0 h-10 w-10'>
                    <SlLock className='icons'/>
                </span>
            </div>
            <button
                onClick={() => router.push('/home')}
                className='bg-calm-50 border border-light rounded-lg transition hover:bg-calm-600 hover:text-white px-4 h-10 w-full'
            >
                Войти
            </button>
        </div>
    )
}