'use client'

import dynamic from 'next/dynamic'
const Datepicker = dynamic(() => import('react-tailwindcss-datepicker'), {ssr: false})
import { useState } from 'react'
import {IoSaveOutline} from 'react-icons/io5'

export default function NewAd(){
    const [createdDate,setcreatedDate] = useState(Date.now())
    const [startDate,setStartDate] = useState(null)
    const [end,setEndDate] = useState(null)
        
    const handleStartDateChange = (newValue) => {
        setStartDate(newValue) 
    }

    const handleEndDateChange = (newValue) => {
        setEndDate(newValue) 
    }

    return(
        <form className='flex flex-col gap-4'>
            <h2 className='font-bold'>Добавить новую рекламу</h2>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col gap-4 justify-between flex-[30%] max-w-[30%]'>
                    <input
                        type='text'
                        placeholder='Заголовок...'
                        className='button-primary px-4 h-10 w-full'
                    ></input>
                    <input
                        type='number'
                        placeholder='Цена (только цифры)'
                        className='button-primary px-4 h-10 w-full'
                    ></input>
                    <Datepicker
                        asSingle={true}
                        useRange={false}
                        value={startDate}
                        onChange={handleStartDateChange}
                        placeholder={'Начало'}
                        inputClassName={'button-primary outline-none pl-4 h-10 w-full'}
                    />
                    <Datepicker
                        asSingle={true}
                        useRange={false}
                        value={end}
                        onChange={handleEndDateChange}
                        placeholder={'Конец'}
                        inputClassName={'button-primary outline-none pl-4 h-10 w-full'}
                    />
                    <button className='button-primary button-hover flex-row-center justify-center gap-2 px-4 h-10 w-full'>
                        Добавить фото
                    </button>
                </div>
                <div className='center flex-[70%] max-w-[70%]'>
                    <span className='button-primary button-hover center h-72 w-full'>
                        Здесь идут фотографии
                    </span>
                </div>
            </div>
            <button href='/home/ads/new' className='button-primary button-hover flex-row-center justify-center gap-2 px-4 h-10 w-full'>
                <>Сохранить</>
                <IoSaveOutline className='icons'/>
            </button>
        </form>
    )
}   