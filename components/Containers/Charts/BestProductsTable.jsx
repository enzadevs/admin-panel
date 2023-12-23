'use client'

import dynamic from 'next/dynamic'
const DeviceTypeDonut = dynamic(() => import('react-apexcharts'), {ssr: false})

export default function BestProductsTable(){
    const cities = {
        chart: {
            id: 'current-week-revenue'
        },
        xaxis: {
            categories: ['Телефон','Компютер','Планшет','Неизвестно']
        }
    }
    const deviceType = [
        {
            name: 'Количество устройств',
            data: [574, 647, 252, 125],
            color: '#0d9488'
        }
    ]

    return(
        <div>
            <div className='flex-row-center gap-4 mt-4 h-96 w-full'>
                <div className='bg-calm-50 border rounded-lg shadow-md flex flex-col gap-2 transition hover:border-calm-400 flex-[70%] px-2 h-full max-w-[70%]'>
                    <span className='flex-row-center items-center gap-2 pl-4 h-10'>
                        <p className='text-calm-600 font-bold'>Самые популярные товары</p>
                    </span>
                    <div className='overflow-x-auto'>
                        <table className='table'>
                            <thead>
                                <tr className='border-b border-light text-center'>
                                    <th>#</th>
                                    <th>Имя</th>
                                    <th>Цена</th>
                                    <th>Сумма продаж</th>
                                    <th>Прибыль</th>
                                    <th>Продано (кол.)</th>
                                    <th>На складе</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b border-light cursor-pointer transition hover:bg-calm-200 text-center'>
                                    <th>1</th>
                                    <td className='max-w-[300px]'>Nike Air Max Кроссовки </td>
                                    <td>349</td>
                                    <td>25670</td>
                                    <td>4450</td>
                                    <td>80</td>
                                    <td>120</td>
                                </tr>
                                <tr className='border-b border-light cursor-pointer transition hover:bg-calm-200 text-center'>
                                    <th>2</th>
                                    <td className='max-w-[300px]'>Nike Air Max Кроссовки </td>
                                    <td>349</td>
                                    <td>25670</td>
                                    <td>4450</td>
                                    <td>80</td>
                                    <td>120</td>
                                </tr>
                                <tr className='border-b border-light cursor-pointer transition hover:bg-calm-200 text-center'>
                                    <th>3</th>
                                    <td className='max-w-[300px]'>Nike Air Max Кроссовки </td>
                                    <td>349</td>
                                    <td>25670</td>
                                    <td>4450</td>
                                    <td>80</td>
                                    <td>120</td>
                                </tr>
                                <tr className='border-b border-light cursor-pointer transition hover:bg-calm-200 text-center'>
                                    <th>4</th>
                                    <td className='max-w-[300px]'>Nike Air Max Кроссовки </td>
                                    <td>349</td>
                                    <td>25670</td>
                                    <td>4450</td>
                                    <td>80</td>
                                    <td>120</td>
                                </tr>
                                <tr className='border-b border-light cursor-pointer transition hover:bg-calm-200 text-center'>
                                    <th>5</th>
                                    <td className='max-w-[300px]'>Nike Air Max Кроссовки </td>
                                    <td>349</td>
                                    <td>25670</td>
                                    <td>4450</td>
                                    <td>80</td>
                                    <td>120</td>
                                </tr>
                                <tr className='border-b border-light cursor-pointer transition hover:bg-calm-200 text-center'>
                                    <th>6</th>
                                    <td className='max-w-[300px]'>Nike Air Max Кроссовки </td>
                                    <td>349</td>
                                    <td>25670</td>
                                    <td>4450</td>
                                    <td>80</td>
                                    <td>120</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='bg-calm-50 border rounded-lg shadow-md flex flex-col gap-2 flex-[30%] transition hover:border-calm-400 px-2 h-full max-w-[30%]'>
                    <span className='flex-row-center items-center gap-2 pl-4 h-10'>
                        <p className='text-calm-600 font-bold'>Вид устройства</p>
                    </span>
                    <DeviceTypeDonut
                        type='bar' 
                        options={cities} 
                        series={deviceType}
                        height={'85%'}
                        width={'100%'}
                    />
                </div>
            </div>
        </div>
    )
}