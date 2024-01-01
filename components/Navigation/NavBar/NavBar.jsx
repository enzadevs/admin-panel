import {RiMenuUnfoldFill} from 'react-icons/ri'
import ChatDashboard from './ChatDashboard'
import Notifications from './Notifications'
import ProfileDashboard from './ProfileDashboard'

export default function NavBar(){
    return(
        <nav className='bg-white shadow-sm border-b border-light flex-row-center sticky top-0 px-4 h-14 z-[1]'>
            <label htmlFor='my-drawer-2' className='bg-calm-100 border cursor-pointer rounded-lg center transition hover:border-calm-400 mr-2 h-10 w-10 lg:hidden'>
                <RiMenuUnfoldFill className='icons'/>
            </label>
            <span className='flex-row-center gap-2 ml-auto h-10  w-fit'>
                <ChatDashboard/>
                <Notifications/>
                <ProfileDashboard/>
            </span>
        </nav>
    )
}