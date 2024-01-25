import Link from 'next/link'
import {TbDeviceDesktopPlus} from 'react-icons/tb'
import AdsTableContainer from 'components/Containers/Tables/AdsTableContainer'

export default function AdsPage(){
    return(
        <div className='flex flex-col gap-4'>
            <Link href='/home/ads/new' className='button-primary flex-row-center justify-center gap-2 px-4 w-full'>
                <>Добавить</>
                <TbDeviceDesktopPlus className='icons'/>
            </Link>
            <AdsTableContainer/>
        </div>
    )
}