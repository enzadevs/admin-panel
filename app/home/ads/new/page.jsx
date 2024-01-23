'use client'

import Image from 'next/image'
import {useState,useRef} from 'react'
import {IoSaveOutline} from 'react-icons/io5'
import SelectTable from 'components/Containers/Selections/SelectTable'

export default function NewAdPage(){
    const [file,setFile] = useState()
    const titleRef = useRef()
    //* const brandRef = useRef()
    //* const catalogRef = useRef()
    const poster_imageRef = useRef()
    const descriptionRef = useRef()
    const incomeRef = useRef()
    //* const statusRef = useRef()
    const start_dateRef = useRef()
    const end_dateRef = useRef()

    async function handleSubmit(){
        try {
            const newAd = await fetch('http://localhost:5000/ads/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: titleRef.current.value,
                //* brandId: brandRef.current.value,
                //* poster_image: poster_imageRef.current.value,
                //* catalog: catalogRef.current.value,
                description: descriptionRef.current.value,
                income: Number(incomeRef.current.value),
                //* status: statusRef.current.value,
                start_date: new Date(start_dateRef.current.value),
                end_date: new Date(end_dateRef.current.value)
            })
        })
        const response = await newAd.json()
        console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    function getFile(e){
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    return(
        <div className='flex flex-col gap-4' encType='multipart/div-data'>
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
                    <SelectTable
                        selectData={[{label: 'Booo'}]}
                        className=''
                        placeholder='Компания'
                    />
                    <SelectTable
                        selectData={[{label: 'Booo'}]}
                        className=''
                        placeholder='Каталог'
                    />
                    <input
                        id='description'
                        type='text'
                        ref={descriptionRef}
                        placeholder='Описание'
                        className='input-outline px-4 h-10 w-full'
                    ></input>
                    <SelectTable
                        selectData={[{label: 'Nike'}]}
                        className=''
                        placeholder='Статус'
                    />
                    <input
                        id='income'
                        type='number'
                        ref={incomeRef}
                        placeholder='Цена (только цифры)'
                        className='input-outline px-4 h-10 w-full'
                    ></input>
                    <span className='flex-row-center gap-2'>
                        <p className='w-20'>Начало</p>
                        <input
                            id='start_date'
                            type='date'
                            ref={start_dateRef}
                            placeholder='Начало'
                            className='input-outline px-4 h-full w-full'
                        ></input>
                    </span>
                    <span className='flex-row-center gap-2'>
                        <p className='w-20'>Конец</p>
                        <input
                            id='end_date'
                            type='date'
                            ref={end_dateRef}
                            placeholder='Конец'
                        className='input-outline px-4 h-full w-full'
                        ></input>
                    </span>
                    <input
                        type='file'
                        name='poster_image'
                        ref={poster_imageRef}
                        onChange={getFile}
                        placeholder='Добавить фото'
                        className='bg-calm-50 block border rounded-lg text-calm-600 file:cursor-pointer file:rounded-l-lg file:border-0 file:text-sm file:bg-calm-600 file:text-white file:px-2 file:h-10 h-10 w-full'
                    ></input>
                </div>
                <div className='border rounded-lg text-center center flex-col py-2 md:flex-[50%] md:max-w-[50%] w-full'>
                    <p>Рекомендуемый размер изображения 1280 x 360</p>
                    <div className={file ? 'relative block h-[200px] md:h-[500px] w-full' : 'hidden relative h-72'}>
                        <Image
                            src={file}
                            alt='image'
                            className='object-contain'
                            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw'
                            fill
                        >
                        </Image>
                    </div>
                </div>
            </div>
            <button
                type='submit'
                onClick={() => handleSubmit()}
                href='/home/ads/new'
                className='button-primary button-hover center gap-2 px-4 h-10 w-full'>
                <>Сохранить</>
                <IoSaveOutline className='icons'/>
            </button>
        </div>
    )
}   