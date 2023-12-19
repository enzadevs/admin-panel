import {BsPersonCircle} from 'react-icons/bs'

export default function ProfileDashboard(){
    return(
        <div className='bg-calm-50 border cursor-pointer rounded-xl flex-row-center transition-all hover:border-calm-400 pl-4 pr-2 h-10 w-36'>
            <span className='flex-grow text-end pr-2'>
                <p className='text-sm font-semibold'>Eziz E.</p>
                <p className='text-xs'>Admin</p>
            </span>
            <span className='center rounded-full ml-auto h-10 w-10'>
                <BsPersonCircle className='icons'/>
            </span>
        </div>
    )
}