import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/assets/logo_only_transparent.png'
import {PiUserCircleLight} from 'react-icons/pi'
import {SlLock} from 'react-icons/sl'

export default function SignInContainer(){
    return(
        <div className='bg-calm-50 border border-light rounded-lg flex flex-col items-center gap-4 p-4 h-fit w-96'>
            <span className='center flex-col gap-2 text-xl w-full'>
                <Image
                    src={Logo}
                    alt='image'
                    height={200}
                    width={200}
                    className='object-cover'
                    sizes='50vw'
                    priority='true'
                >
                </Image>
                <p>{'"Älem Tilsimat"'}</p>
                <p>E-Commerce Tools</p>
            </span>
            <div className='relative w-full'>
                <input
                    type='text' 
                    className='bg-calm-50 border border-light rounded-lg outline-none transition focus:border-calm-400 pl-4 pr-10 h-10 w-full'
                    placeholder='Имя пользователя'
                    minLength={2}
                    maxLength={64}
                    >
                </input>
                <span className='center absolute top-0 right-0 h-10 w-10'>
                    <PiUserCircleLight className='h-6 w-6'/>
                </span>
            </div>
            <div className='relative w-full'>
                <input
                    type='text' 
                    className='bg-calm-50 border border-light rounded-lg outline-none transition focus:border-calm-400 pl-4 pr-10 h-10 w-full'
                    placeholder='Пароль'
                    minLength={2}
                    maxLength={64}
                    >
                </input>
                <span className='center absolute top-0 right-0 h-10 w-10'>
                    <SlLock className='icons'/>
                </span>
            </div>
            <Link
                href='/home'
                className='bg-calm-50 border border-light rounded-lg center transition hover:bg-calm-600 hover:text-white px-4 h-10 w-full'
            >
                Войти
            </Link>
        </div>
    )
}