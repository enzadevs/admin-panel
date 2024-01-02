import Link from 'next/link'
import {TbDeviceDesktopPlus} from 'react-icons/tb'
import {MdHistory} from 'react-icons/md'
import dynamic from 'next/dynamic'
const ReusableTable = dynamic(() => import('components/Containers/Tables/ReusableTable'), {ssr: false})

const adsTableHeaders = [
    {
        id: 0,
        headerTitle: '#',
        dataKey: 'id'
    },
    {
        id: 1,
        headerTitle: 'Имя',
        dataKey: 'adsName'
    },
    {
        id: 2,
        headerTitle: 'Дата создания',
        dataKey: 'creationDate'
    },
    {
        id: 3,
        headerTitle: 'Дата начала',
        dataKey: 'startDate'
    },
    {
        id: 4,
        headerTitle: 'Дата завершения',
        dataKey: 'endDate'
    },
    {
        id: 3,
        headerTitle: 'Статус',
        dataKey: 'status'
    },
    {
        id: 4,
        headerTitle: 'Прибыль',
        dataKey: 'income'
    },
]

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
            <ReusableTable
               headers={adsTableHeaders}
               tableHeight={500}
               // dataUrl={ads} 
            />
        </>
    )
}