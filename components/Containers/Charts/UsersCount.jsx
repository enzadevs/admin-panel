'use client'

import dynamic from 'next/dynamic'
const VisitorsCountChart = dynamic(() => import('react-apexcharts'), {ssr: false})
import Image from 'next/image'
import MapOfTKM from 'public/assets/map_of_turkmenistan.png'

export default function UsersCount(){
    const cities = {
        chart: {
            id: 'weekly-visitors-count'
        },
        xaxis: {
            categories: ['Aşgabat', 'Mary', 'Arkadag Ş.', 'Lebap', 'Daşoguz', 'Balkanabat']
        }
    }
    const visitors = [
        {
            name: 'Количество посетителей',
            data: [30, 40, 35, 50, 49, 60],
            color: '#7e22ce'
        }
    ]
    
    return(
        <div>
            <div className='flex-row-center gap-4 mt-4 h-96 w-full'>
                <div className='bg-calm-50 border shadow-md rounded-lg flex flex-col gap-2 flex-[70%] transition hover:border-calm-400 px-2 h-full max-w-[70%]'>
                    <span className='flex-row-center items-center gap-2 pl-4 h-10'>
                        <p className='text-calm-600 font-bold'>Количество посетителей по велаятам</p>
                    </span>
                    <span className='bg-calm-50 relative h-96'>
                        <Image
                            src={MapOfTKM}
                            alt='map of turkmenistan'
                            className='object-contain'
                            fill
                            sizes='(100vw)'
                            priority='true'
                        >
                        </Image>
                    </span>
                </div>
                <div className='bg-calm-50 border shadow-md rounded-lg flex flex-col gap-2 flex-[30%] transition hover:border-calm-400 px-2 h-full max-w-[30%]'>
                    <span className='flex-row-center items-center gap-2 pl-4 h-10'>
                        <p className='text-calm-600 font-bold'>Количество посетителей за эту неделю</p>
                    </span>
                    <VisitorsCountChart
                        type='bar' 
                        options={cities} 
                        series={visitors}
                        height={'85%'}
                        width={'100%'}
                    />
                </div>
            </div>
        </div>
    )
}