import Link from 'next/link'
import {TbDeviceDesktopPlus} from 'react-icons/tb'
import {MdHistory} from 'react-icons/md'
import dynamic from 'next/dynamic'
const ReusableTable = dynamic(() => import('components/Containers/Tables/ReusableTable'), {ssr: false})

export default async function AdsPage(){
    // const response = await fetch('http://localhost:5000/ads',
    // {
    //     method: 'GET',
    //     cache: 'no-store'
    // })
    // const ads = await response.json()
    const ads = []
    const url = 'ads'
    const adsTableHeaders = [
        {
            id: 0,
            headerTitle: '#',
            dataKey: 'number'
        },
        {
            id: 1,
            headerTitle: 'Имя',
            dataKey: 'title'
        },
        {
            id: 2,
            headerTitle: 'Бренд',
            dataKey: 'brand.title'
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
        {
            id: 5,
            headerTitle: 'Дата создания',
            dataKey: 'created_at'
        },
        {
            id: 6,
            headerTitle: 'Дата начала',
            dataKey: 'start_date'
        },
        {
            id: 7,
            headerTitle: 'Дата завершения',
            dataKey: 'end_date'
        },
    ]
    
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
            <ReusableTable
               headers={adsTableHeaders}
               tableHeight={500}
               columnData={ads}
               dataUrl={url} 
            />
        </>
    )
}