import ChatDashboard from './ChatDashboard'
import Notifications from './Notifications'
import ThemeSwitcher from './ThemeSwitcher'
import ProfileDashboard from './ProfileDashboard'

export default function NavBar(){
    return(
        <nav className='border-b border-light flex-row-center px-4 h-14'>
            Navbar
            <span className='flex-row-center gap-2 ml-auto'>
                <ChatDashboard/>
                <Notifications/>
                <ThemeSwitcher/>
                <ProfileDashboard/>
            </span>
        </nav>
    )
}