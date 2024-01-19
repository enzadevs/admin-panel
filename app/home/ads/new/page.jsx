'use client'

import { useState,useRef } from 'react'
import {IoSaveOutline} from 'react-icons/io5'
import Datepicker from 'react-tailwindcss-datepicker'
import ImagesSwiper from 'components/Functions/ImagesSwiper'

export default function NewAdPage(){
    const titleRef = useRef()
    const brandRef = useRef()
    const catalogRef = useRef()
    const poster_imageRef = useRef()
    const descriptionRef = useRef()
    const incomeRef = useRef()
    const statusRef = useRef()
    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('')
    let array = [{id: 1, title: 'Hello'}, {id: 2, title: 'Bye'}]

    const handleStartDateChange = (value) => {
        console.log('Start date:', value)
        setStartDate(value)
    }

    const handleEndDateChange = (newValue) => {
        console.log('End date:', newValue)
        setEndDate(newValue)
    }


    async function createAd(){
        const newAd = await fetch('http://localhost:5000/ads/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tite: titleRef.current.value,
                income: incomeRef.current.value,
            })
        })
        const response = await newAd.json()
        console.log(response)
    }

    return(
        <div className='flex flex-col gap-4' encType='multipart/form-data'>
            <h2 className='font-bold'>Добавить новую рекламу</h2>
            <div className='flex flex-col gap-2 md:flex md:flex-row md:gap-4'>
                <div className='flex flex-col gap-4 justify-between md:flex-[50%] md:max-w-[50%]'>
                    <input
                        id='title'
                        type='text'
                        ref={titleRef}
                        placeholder='Заголовок'
                        className='input-outline px-4 h-10 w-full'
                    ></input>
                    <input
                        id='brand'
                        type='text'
                        ref={brandRef}
                        placeholder='Компания (Select)'
                        className='input-outline px-4 h-10 w-full'
                    ></input>
                    <input
                        id='catalog'
                        type='text'
                        ref={catalogRef}
                        placeholder='Каталог (Select)'
                        className='input-outline px-4 h-10 w-full'
                    ></input>
                    <input
                        id='description'
                        type='text'
                        ref={descriptionRef}
                        placeholder='Описание'
                        className='input-outline px-4 h-10 w-full'
                    ></input>
                    <input
                        id='status'
                        type='text'
                        ref={statusRef}
                        placeholder='Статус (Select)'
                        className='input-outline px-4 h-10 w-full'
                    ></input>
                    <input
                        id='income'
                        type='number'
                        ref={incomeRef}
                        placeholder='Цена (только цифры)'
                        className='input-outline px-4 h-10 w-full'
                    ></input>
                    <Datepicker
                        id='start_date'
                        asSingle={true}
                        useRange={false}
                        value={startDate}
                        onChange={handleStartDateChange}
                        placeholder={'Начало'}
                        inputClassName={'input-outline outline-none pl-4 h-10 w-full'}
                    />
                    <Datepicker
                        id='end_date'
                        asSingle={true}
                        useRange={false}
                        value={endDate}
                        onChange={handleEndDateChange}
                        placeholder={'Конец'}
                        inputClassName={'input-outline outline-none pl-4 h-10 w-full'}
                    />
                    <input
                        type='file'
                        name='poster_image'
                        ref={poster_imageRef}
                        placeholder='Добавить фото'
                        className='bg-calm-50 block border rounded-lg text-calm-600 file:cursor-pointer file:rounded-l-lg file:border-0 file:text-sm file:bg-calm-600 file:text-white file:px-2 file:h-10 h-10 w-full'
                    ></input>
                </div>
                <div className='center md:flex-[50%] md:max-w-[50%] w-full'>
                    <ImagesSwiper imagesArray={array}/>
                </div>
            </div>
            <button
                // type='submit'
                onClick={() => createAd()}
                href='/home/ads/new'
                className='button-primary button-hover center gap-2 px-4 h-10 w-full'>
                <>Сохранить</>
                <IoSaveOutline className='icons'/>
            </button>
        </div>
    )
}   