'use client'

import dynamic from 'next/dynamic'
const YearChart = dynamic(() => import('react-apexcharts'), {ssr: false})
const YearlyVisitorsChart = dynamic(() => import('react-apexcharts'), {ssr: false})

export default function IndexGraph(){
    const tewelveMonths = {
        chart: {
            id: 'month-revenue'
        },
        xaxis: {
            categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
        }
    }
    const monthSeries = [
        {
            name: 'Сумма продаж',
            data: [39, 7301, 389, 5620, 7819, 1222, 3219, 5501, 1386, 2764, 545, 7010],
            color: '#3277AB'
        },
        {
            name: 'Прибыль',
            data: [277, 804, 954, 929, 808, 732, 75, 569, 983, 353, 93, 993],
            color: '#22c55e'
        }
    ]

    const yearlyVisitors = {
        chart: {
            id: 'yearly-visitors'
        },
        xaxis: {
            categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
        }
    }
    const visitorsCount = [
        {
            name: 'Количество посетителей',
            data: [478, 452, 711, 77, 631, 913, 634, 116, 961, 142, 234, 531],
            color: '#7e22ce'
        }
    ]

    return(
        <div className='flex flex-col gap-4'>
            <h2 className='font-semibold'>Отчеты за 2023 год</h2>
            <div className='bg-calm-50 border shadow-md rounded-lg flex flex-col gap-2 transition hover:border-calm-400 px-2 h-[28em]'>
                <span className='flex-row-center items-center gap-2 pl-4 h-10'>
                    <p className='text-calm-600 font-bold'>Сумма продаж /</p>
                    <p className='text-green-500 font-bold'>Прибыль</p>
                    <p>(ман.)</p>
                </span>
                <YearChart
                    type='area' 
                    options={tewelveMonths} 
                    series={monthSeries}
                    height={'85%'}
                    width={'100%'}
                />
            </div>
            <div className='bg-calm-50 border shadow-md rounded-lg flex flex-col gap-2 transition hover:border-calm-400 px-2 h-[28em]'>
                <span className='flex-row-center items-center gap-2 pl-4 h-10'>
                    <p className='text-calm-600 font-bold'>Количество посетителей</p>
                </span>
                <YearlyVisitorsChart
                    type='bar' 
                    options={yearlyVisitors} 
                    series={visitorsCount}
                    height={'85%'}
                    width={'100%'}
                />
            </div>
        </div>
    )
}