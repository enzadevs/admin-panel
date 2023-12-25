'use client'

import dynamic from 'next/dynamic'
const ForMonthChart = dynamic(() => import('react-apexcharts'), {ssr: false})
import { generateNumbers } from 'components/Functions/GenerateNumbers'

export default function MonthLayout(){
    const monthOptions = {
        chart: {
            id: 'selected-month-revenue'
        },
        xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        }
    }
    const monthSeries = [
        {
            name: 'Сумма продаж',
            data: generateNumbers(30, 10000),
            color: '#3277AB'
        },
        {
            name: 'Прибыль',
            data: generateNumbers(30, 1000),
            color: '#22c55e'
        }
    ]

    return(
        <div>
            <div className='bg-calm-50 border shadow-md rounded-lg flex flex-col gap-2 transition hover:border-calm-400 px-2 h-[30rem]'>
                    <span className='flex-row-center items-center gap-2 pl-4 h-10'>
                        <p className='text-calm-600 font-bold'>Сумма продаж /</p>
                        <p className='text-green-500 font-bold'>Прибыль</p>
                        <p>(ман.)</p>
                    </span>
                    <ForMonthChart
                        type='line' 
                        options={monthOptions} 
                        series={monthSeries}
                        height={'85%'}
                        width={'100%'}
                    />
            </div>
        </div>
    )
}