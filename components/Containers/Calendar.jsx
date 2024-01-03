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
                inputClassName={'button-primary outline-none px-2 h-10 w-full'}    
            />
        </div>
    )
}