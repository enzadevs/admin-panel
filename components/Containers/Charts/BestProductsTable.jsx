'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.min.css'
const DeviceTypeDonut = dynamic(() => import('react-apexcharts'), {ssr: false})

export default function BestProductsTable(){
    const [rowData, setRowData] = useState([
        {имяПродукта: 'Ручка',продано: 3507,прибыль: 2300,суммаПродаж: 22130,цена: 150,наСкладе: 158},
        {имяПродукта: 'Ручка',продано: 3507,прибыль: 2300,суммаПродаж: 22130,цена: 150,наСкладе: 158},
        {имяПродукта: 'Ручка',продано: 3507,прибыль: 2300,суммаПродаж: 22130,цена: 150,наСкладе: 158},
        {имяПродукта: 'Ручка',продано: 3507,прибыль: 2300,суммаПродаж: 22130,цена: 150,наСкладе: 158},
        {имяПродукта: 'Ручка',продано: 3507,прибыль: 2300,суммаПродаж: 22130,цена: 150,наСкладе: 158}
    ])
    const [colDefs, setColDefs] = useState([
        {field: 'имяПродукта'},
        {field: 'продано'},
        {field: 'прибыль'},
        {field: 'суммаПродаж'},
        {field: 'цена'},
        {field: 'наСкладе'}
    ])
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
                    <div className='ag-theme-quartz' style={{height: '80%'}}>
                        <AgGridReact rowData={rowData} columnDefs={colDefs} />
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