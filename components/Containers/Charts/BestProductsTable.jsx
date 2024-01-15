'use client'

import dynamic from 'next/dynamic'
const DeviceTypeDonut = dynamic(() => import('react-apexcharts'), {ssr: false})
import ReusableTable from '../Tables/ReusableTable'

const productsTableHeaders = [
    {
        id: 0,
        headerTitle: '#',
        dataKey: 'productId'
    },
    {
        id: 1,
        headerTitle: 'Имя товара',
        dataKey: 'productName'
    },
    {
        id: 2,
        headerTitle: 'Бренд',
        dataKey: 'brandName'
    },
    {
        id: 3,
        headerTitle: 'Категория',
        dataKey: 'category'
    },
    {
        id: 4,
        headerTitle: 'Количество',
        dataKey: 'stock'
    },
]

export default async function BestProductsTable(){
    const devices = {
        chart: {
            id: 'devices-week-count'
        },
        xaxis: {
            categories: ['Телефон','Компютер','Планшет']
        }
    }
    const deviceType = [
        {
            name: 'Количество устройств',
            data: [574, 647, 252],
            color: '#0d9488'
        }
    ]

    return(
        <div>
            <div className='flex flex-row gap-4 mt-4 h-fit w-full'>
                <div className='bg-calm-50 border rounded-lg shadow-md flex flex-col gap-2 transition hover:border-calm-400 flex-[70%] px-2 h-full max-w-[70%]'>
                    <span className='flex-row-center items-center gap-2 pl-4 h-10'>
                        <p className='text-calm-600 font-bold'>Самые популярные товары</p>
                    </span>
                    <span className=''>
                        <ReusableTable
                            headers={productsTableHeaders}
                            tableHeight={500}
                            // dataUrl={products}
                        />
                    </span>
                </div>
                <div className='bg-calm-50 border rounded-lg shadow-md flex flex-col gap-2 flex-[30%] transition hover:border-calm-400 px-2 max-w-[30%]'>
                    <span className='flex-row-center items-center gap-2 pl-4 h-10'>
                        <p className='text-calm-600 font-bold'>Вид устройства</p>
                    </span>
                    <DeviceTypeDonut
                        type='bar' 
                        options={devices} 
                        series={deviceType}
                        height={'85%'}
                        width={'100%'}
                    />
                </div>
            </div>
        </div>
    )
}