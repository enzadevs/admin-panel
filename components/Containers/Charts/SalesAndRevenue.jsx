'use client'

import dynamic from 'next/dynamic'
const SalesRevenueChart = dynamic(() => import('react-apexcharts'), {ssr: false})
const VisitorsCountWeekChart = dynamic(() => import('react-apexcharts'), {ssr: false})

export default function SalesAndRevenue(){
    const monthOptions = {
        chart: {
            id: 'current-month-revenue'
        },
        xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        }
    }
    const monthSeries = [
        {
            name: 'Сумма продаж',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 230, 123, 424, 123 , 456, 113, 654, 523, 214, 123, 4324, 5221, 12, 321, 664, 4645, 1236, 876, 213, 213, 124, 418],
            color: '#3277AB'
        },
        {
            name: 'Прибыль',
            data: [34, 34, 34, 43, 49, 60, 86, 53, 53, 53, 35, 355 , 21, 12, 124, 45, 34, 78, 324, 78, 42, 31, 241, 2445, 536, 346, 156, 97, 64, 47],
            color: '#22c55e'
        }
    ]
    const cities = {
        chart: {
            id: 'cities-week-revenue'
        },
        xaxis: {
            categories: ['Aşgabat', 'Mary', 'Arkadag Ş.', 'Lebap', 'Daşoguz', 'Balkanabat']
        }
    }
    const visitorsForWeek = [
        {
            name: 'Сумма продаж',
            data: [574, 647, 252, 670, 459, 620],
            color: '#3277AB'
        },
        {
            name: 'Прибыль',
            data: [57, 78, 78, 64, 69, 45],
            color: '#22c55e'
        }
    ]

    return(
        <>
            <h1 className='text-xl font-bold '>Статистика за месяц :</h1>
            <div className='flex-row-center gap-4 mt-4 h-96 w-full'>
                <div className='bg-calm-50 border shadow-md rounded-lg flex flex-col gap-2 flex-[70%] transition hover:border-calm-400 px-2 h-full max-w-[70%]'>
                    <span className='flex-row-center items-center gap-2 pl-4 h-10'>
                        <p className='text-calm-600 font-bold'>Сумма продаж /</p>
                        <p className='text-green-500 font-bold'>Прибыль</p>
                        <p>(ман.)</p>
                    </span>
                    <SalesRevenueChart
                        type='line' 
                        options={monthOptions} 
                        series={monthSeries}
                        height={'85%'}
                        width={'100%'}
                    />
                </div>
                <div className='bg-calm-50 border shadow-md rounded-lg flex-[30%] transition hover:border-calm-400 px-2 h-full max-w-[30%]'>
                    <span className='flex-row-center items-center gap-2 pl-4 h-10'>
                        <p className='text-calm-600 font-bold'>Сумма продаж / <span className='text-green-500'>прибыль</span> за эту неделю</p>
                        (ман.)
                    </span>
                    <VisitorsCountWeekChart
                        type='bar' 
                        options={cities} 
                        series={visitorsForWeek}
                        height={'85%'}
                        width={'100%'}
                    />
                </div>
            </div>
        </>
    )
}