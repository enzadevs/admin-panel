import Link from 'next/link'
import {TbDeviceDesktopPlus} from 'react-icons/tb'
export default function AdsPage(){
    return(
        <>
            <span className='flex flex-col gap-2 md:flex md:flex-row md:gap-4'>
                <Link href='/home/ads/new' className='button-primary flex-row-center justify-center gap-2 px-4 w-full'>
                    <>Добавить</>
                    <TbDeviceDesktopPlus className='icons'/>
                </Link>
            </span>
        </>
    )
}