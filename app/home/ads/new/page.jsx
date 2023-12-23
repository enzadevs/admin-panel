'use client'

import { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'
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
                    <div className='bg-calm-100 rounded-lg flex-row-center h-10 w-full'>
                        <input
                            type='text'
                            placeholder='Заголовок...'
                            className='bg-calm-50 rounded-lg outline-none transition border focus:border-calm-400 px-4 h-full w-full'
                        ></input>
                    </div>
                    <div className='bg-calm-100 rounded-lg flex-row-center h-10 w-full'>
                        <input
                            type='number'
                            placeholder='Цена (только цифры)'
                            className='bg-calm-50 rounded-lg outline-none transition border focus:border-calm-400 px-4 h-full w-full'
                        ></input>
                    </div>
                    <Datepicker
                        asSingle={true}
                        useRange={false}
                        value={startDate}
                        onChange={handleStartDateChange}
                        placeholder={'Начало'}
                        inputClassName={'bg-calm-50 border border-light rounded-lg transition focus:border-calm-400 outline-none px-2 h-10 w-full'}
                    />
                    <Datepicker
                        asSingle={true}
                        useRange={false}
                        value={end}
                        onChange={handleEndDateChange}
                        placeholder={'Конец'}
                        inputClassName={'bg-calm-50 border border-light rounded-lg transition focus:border-calm-400 outline-none px-2 h-10 w-full'}
                    />
                    <button className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-500 hover:text-white px-4 h-10 w-full'>
                        <p className='font-bold'>Добавить фото</p>
                    </button>
                </div>
                <div className='center flex-[70%] max-w-[70%]'>
                    <span className='bg-calm-50 border border-light rounded-lg center h-72 w-full'>
                        <p>Здесь идут фотографии</p>
                    </span>
                </div>
            </div>
            <button href='/home/ads/new' className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-500 hover:text-white px-4 h-10 w-full'>
                <p className='font-bold'>Сохранить</p>
                <IoSaveOutline className='icons'/>
            </button>
        </form>
    )
}   