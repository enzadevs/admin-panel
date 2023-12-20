import {RiMenuUnfoldFill} from 'react-icons/ri'
import NavSearchBox from './NavSearchBox'
import ChatDashboard from './ChatDashboard'
import Notifications from './Notifications'
import ThemeSwitcher from './ThemeSwitcher'
import ProfileDashboard from './ProfileDashboard'

export default function NavBar(){
    return(
        <nav className='bg-white shadow-sm border-b border-light flex-row-center sticky top-0 px-4 h-14'>
            <label htmlFor='my-drawer-2' className='bg-calm-100 border cursor-pointer rounded-lg center transition-all hover:border-calm-400 mr-2 h-10 w-10 lg:hidden'>
                <RiMenuUnfoldFill className='icons'/>
            </label>
            <NavSearchBox/>
            <span className='flex-row-center gap-2 ml-auto h-10  w-[288px]'>
                <ThemeSwitcher/>
                <ChatDashboard/>
                <Notifications/>
                <ProfileDashboard/>
            </span>
        </nav>
    )
}