import {IoStorefrontOutline,IoChatboxEllipsesOutline,IoNotificationsOutline,IoSettingsOutline} from 'react-icons/io5'
import {PiChartLineUp,PiUsersThreeLight,PiCalendarLight} from 'react-icons/pi'
import {BsBoxSeam,BsCartCheck} from 'react-icons/bs'
import {TbDeviceDesktopCheck} from 'react-icons/tb'
import Link from 'next/link'

export default function SideBarMenu(){
    return(
        <div className='flex flex-col gap-2 px-4 mt-2'>
            <Link href='manage' className='border-b border-light rounded-lg flex-row-center gap-2 transition hover:bg-calm-600 hover:text-white px-2 h-10 w-full'>
                <IoStorefrontOutline className='icons'/>
                <p>Панель управления</p>
            </Link>
            <Link href='/analytics' className='border-b border-light rounded-lg flex-row-center gap-2 transition hover:bg-calm-600 hover:text-white px-2 h-10 w-full'>
                <PiChartLineUp className='icons'/>
                <p>Аналитика</p>
            </Link>
            <Link href='/orders' className='border-b border-light rounded-lg flex-row-center gap-2 transition hover:bg-calm-600 hover:text-white px-2 h-10 w-full'>
                <BsCartCheck className='icons'/>
                <p>Заказы</p>
            </Link>
            <Link href='/products' className='border-b border-light rounded-lg flex-row-center gap-2 transition hover:bg-calm-600 hover:text-white px-2 h-10 w-full'>
                <BsBoxSeam className='icons'/>
                <p>Товары</p>
            </Link>
            <Link href='/ads' className='border-b border-light rounded-lg flex-row-center gap-2 transition hover:bg-calm-600 hover:text-white px-2 h-10 w-full'>
                <TbDeviceDesktopCheck className='icons'/>
                <p>Реклама</p>
            </Link>
            <Link href='/users' className='border-b border-light rounded-lg flex-row-center gap-2 transition hover:bg-calm-600 hover:text-white px-2 h-10 w-full'>
                <PiUsersThreeLight className='icons'/>
                <p>Пользователи</p>
            </Link>
            <Link href='/chat' className='border-b border-light rounded-lg flex-row-center gap-2 transition hover:bg-calm-600 hover:text-white px-2 h-10 w-full'>
                <IoChatboxEllipsesOutline className='icons'/>
                <p>Чат</p>
            </Link>
            <Link href='/notifications' className='border-b border-light rounded-lg flex-row-center gap-2 transition hover:bg-calm-600 hover:text-white px-2 h-10 w-full'>
                <IoNotificationsOutline className='icons'/>
                <p>Уведомления</p>
            </Link>
            <Link href='/calendar' className='border-b border-light rounded-lg flex-row-center gap-2 transition hover:bg-calm-600 hover:text-white px-2 h-10 w-full'>
                <PiCalendarLight className='icons'/>
                <p>Календарь</p>
            </Link>
            <Link href='/settings' className='border-b border-light rounded-lg flex-row-center gap-2 transition hover:bg-calm-600 hover:text-white px-2 h-10 w-full'>
                <IoSettingsOutline className='icons'/>
                <p>Настройки</p>
            </Link>
        </div>
    )
}