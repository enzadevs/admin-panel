'use client'

import { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

export default function Calendar(){
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null 
    })

    const handleValueChange = (newValue) => {
        setValue(newValue)
    } 
    
    return(
        <div className='w-[512px]'>
            <Datepicker 
                useRange={false} 
                value={value} 
                onChange={handleValueChange}
                placeholder={'Выберите дату'}
                inputClassName={'bg-calm-50 border border-light rounded-lg transition focus:border-calm-400 outline-none px-2 h-10 w-full'}    
            />
        </div>
    )
}