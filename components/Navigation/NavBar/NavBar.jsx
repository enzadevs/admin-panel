import LeftSide from './LeftSide'
import NavSearchBox from './NavSearchBox'
import ChatDashboard from './ChatDashboard'
import Notifications from './Notifications'
import ThemeSwitcher from './ThemeSwitcher'
import ProfileDashboard from './ProfileDashboard'

export default function NavBar(){
    return(
        <nav className='bg-white shadow-sm border-b border-light flex-row-center sticky top-0 px-4 h-14'>
            <LeftSide/>
            <span className='flex flex-grow items-center justify-center'>
                <NavSearchBox/>
            </span>
            <span className='flex-row-center gap-2 ml-auto h-10  w-[288px]'>
                <ThemeSwitcher/>
                <ChatDashboard/>
                <Notifications/>
                <ProfileDashboard/>
            </span>
        </nav>
    )
}