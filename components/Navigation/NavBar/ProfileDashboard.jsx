import {BsPersonCircle} from 'react-icons/bs'

export default function ProfileDashboard(){
    return(
        <div className='bg-calm-50 cursor-pointer rounded-lg flex-row-center transition hover:text-calm-600 pl-4 pr-2 h-10'>
            <span className='text-end pr-2'>
                <p className='text-sm font-semibold'>Eziz</p>
                <p className='text-xs font-semibold'>Админ</p>
            </span>
            <span className='center rounded-full ml-auto h-10 w-10'>
                <BsPersonCircle className='icons'/>
            </span>
        </div>
    )
}