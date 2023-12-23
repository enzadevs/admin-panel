import Link from 'next/link'
import {TbDeviceDesktopPlus} from 'react-icons/tb'
import AdsTable from 'components/Containers/AdsTable/AdsTable'

export default function AdsPage(){
    return(
        <>
            <Link href='/home/ads/new' className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-500 hover:text-white px-4 h-10'>
                <p className='font-bold'>Добавить</p>
                <TbDeviceDesktopPlus className='icons'/>
            </Link>
            <div className='flex flex-col'>
                <div className='bg-calm-50'>
                    <AdsTable/>
                </div>
            </div>
        </>
    )
}