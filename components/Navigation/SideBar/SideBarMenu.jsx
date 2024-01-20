import {IoStorefrontOutline,IoChatboxEllipsesOutline,IoNotificationsOutline,IoSettingsOutline} from 'react-icons/io5'
import {PiChartLineUp,PiCalendarLight} from 'react-icons/pi'
import {BsBoxSeam,BsCartCheck} from 'react-icons/bs'
import {TbDeviceDesktopCheck} from 'react-icons/tb'
import {LuUsers2} from 'react-icons/lu'
import Link from 'next/link'

export default function SideBarMenu(){
    return(
        <div className='flex flex-col gap-2 px-4 mt-2'>
            <Link href='/home/manage' className='button-primary flex-row-center gap-2 px-2'>
                <IoStorefrontOutline className='icons'/>
                <p>Панель управления</p>
            </Link>
            <Link href='/home/analytics' className='button-primary flex-row-center gap-2 px-2'>
                <PiChartLineUp className='icons'/>
                <p>Аналитика</p>
            </Link>
            <Link href='/home/orders' className='button-primary flex-row-center gap-2 px-2'>
                <BsCartCheck className='icons'/>
                <p>Заказы</p>
            </Link>
            <Link href='/home/products' className='button-primary flex-row-center gap-2 px-2'>
                <BsBoxSeam className='icons'/>
                <p>Товары</p>
            </Link>
            <Link href='/home/ads' className='button-primary flex-row-center gap-2 px-2'>
                <TbDeviceDesktopCheck className='icons'/>
                <p>Реклама</p>
            </Link>
            <Link href='/home/users' className='button-primary flex-row-center gap-2 px-2'>
                <LuUsers2 className='icons'/>
                <p>Пользователи</p>
            </Link>
            <Link href='/home/chat' className='button-primary flex-row-center gap-2 px-2'>
                <IoChatboxEllipsesOutline className='icons'/>
                <p>Чат</p>
            </Link>
            <Link href='/home/notifications' className='button-primary flex-row-center gap-2 px-2'>
                <IoNotificationsOutline className='icons'/>
                <p>Уведомления</p>
            </Link>
        </div>
    )
}