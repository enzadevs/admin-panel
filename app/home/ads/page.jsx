import Link from 'next/link'
import {TbDeviceDesktopPlus} from 'react-icons/tb'

export default function AdsPage(){
    return(
        <>
            <Link href='/home/ads/new' className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-600 hover:text-white px-4 h-10'>
                <p>Добавить</p>
                <TbDeviceDesktopPlus className='icons'/>
            </Link>
            <div className='flex flex-col'>
                <div className='bg-calm-50'>
                    Table Data Goes Here
                </div>
            </div>
        </>
    )
}