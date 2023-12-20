import BrandLogo from '../NavBar/BrandLogo'
import SideBarMenu from './SideBarMenu'
import NavBar from 'components/Navigation/NavBar/NavBar'

export default function SideBar({children}){
    return(
        <div className='drawer lg:drawer-open'>
            <input id='my-drawer-2' type='checkbox' className='drawer-toggle'/>
            <div className='drawer-side z-[2]'>
                <label htmlFor='my-drawer-2' aria-label='close sidebar' className='drawer-overlay'></label> 
                <div className='bg-calm-100 min-h-full w-72'>
                    <BrandLogo/>
                    <SideBarMenu/>
                </div>
            </div>
            <div className='drawer-content'>
                <div className='flex flex-col'>
                    <NavBar/>
                    {children}
                </div>
            </div> 
        </div>
    )
}