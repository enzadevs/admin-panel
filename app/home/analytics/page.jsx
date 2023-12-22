'use client'

import {useState} from 'react'
import Datepicker from 'react-tailwindcss-datepicker'
import CachedDataCharts from 'components/Containers/CachedDataCharts'

export default function AnalyticsPage(){
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null 
    })

    const handleValueChange = (newValue) => {
        setValue(newValue)
    } 

    return(
        <div className='flex flex-col gap-4 mt-2 px-4'>
            <h1 className='text-xl font-bold'>Аналитика</h1>
            <div className='w-[512px]'>
                <Datepicker 
                    useRange={false} 
                    value={value} 
                    onChange={handleValueChange}
                    placeholder={'Выберите дату'}
                    inputClassName={'bg-calm-50 border border-light rounded-lg transition focus:border-calm-400 outline-none px-2 h-10 w-full'}    
                />
            </div>
            <CachedDataCharts/>
        </div>
    )
}