import Link from 'next/link'
import {BsPersonCircle} from 'react-icons/bs'

export default function ProfileDashboard(){
    return(
        <Link href='/home/settings' className='bg-calm-50 cursor-pointer rounded-lg flex-row-center transition hover:text-calm-600 pl-4 pr-2 h-10'>
            <p className='text-sm font-semibold'>Eziz</p>
            <span className='center rounded-full ml-auto h-10 w-10'>
                <BsPersonCircle className='icons'/>
            </span>
        </Link>
    )
}