import Link from 'next/link'
import {TbDeviceDesktopPlus} from 'react-icons/tb'
import {MdHistory} from 'react-icons/md'
import ADSTable from 'components/Containers/Tables/ADSTable'

export default function AdsPage(){
    return(
        <>
            <span className='flex-row-center gap-4'>
                <Link href='/home/ads/new' className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-600 hover:text-white px-4 h-10 w-full'>
                    <p>Добавить</p>
                    <TbDeviceDesktopPlus className='icons'/>
                </Link>
                <Link href='/home/ads' className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-600 hover:text-white px-4 h-10 w-full'>
                    <p>История</p>
                    <MdHistory className='icons'/>
                </Link>
            </span>
            <div className='z-0'>
                <ADSTable/>
            </div>
        </>
    )
}