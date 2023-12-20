import {BsPersonCircle} from 'react-icons/bs'

export default function ProfileDashboard(){
    return(
        <div className='bg-calm-100 border cursor-pointer rounded-lg flex-row-center transition-all hover:border-calm-400 pl-4 pr-2 h-10 w-36'>
            <span className='flex-grow text-end pr-2'>
                <p className='text-sm font-semibold'>Eziz E.</p>
            </span>
            <span className='center rounded-full ml-auto h-10 w-10'>
                <BsPersonCircle className='icons'/>
            </span>
        </div>
    )
}