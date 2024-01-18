import Link from 'next/link'
import {TbDeviceDesktopPlus} from 'react-icons/tb'
import {MdHistory} from 'react-icons/md'

export default async function AdsPage(){
    // const response = await fetch('http://localhost:5000/ads',
    // {
    //     method: 'GET',
    //     cache: 'no-store'
    // })
    // const ads = await response.json()
    
    return(
        <>
            <span className='flex flex-col gap-2 md:flex md:flex-row md:gap-4'>
                <Link href='/home/ads/new' className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-600 hover:text-white px-4 h-10 w-full'>
                    <p>Добавить</p>
                    <TbDeviceDesktopPlus className='icons'/>
                </Link>
                <Link href='/home/ads' className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-600 hover:text-white px-4 h-10 w-full'>
                    <p>История</p>
                    <MdHistory className='icons'/>
                </Link>
            </span>
        </>
    )
}