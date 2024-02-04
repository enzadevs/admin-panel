'use client'

import useSWR from 'swr'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import {useState,useRef} from 'react'
import {IoSaveOutline} from 'react-icons/io5'

const fetchAdData = async (id) => {
    const response = await fetch(`http://localhost:5000/ads/${id}`)
    const data = await response.json()
    return data
}

export default function ChangeBrandPage({params}){
    const { data: adData, error, isLoading } = useSWR(params.id ? [params.id] : null, fetchAdData)
    const [selectedFile, setSelectedFile] = useState()
    const titleRef = useRef()
    const brandRef = useRef()
    const descriptionRef = useRef()
    const incomeRef = useRef()
    const start_dateRef = useRef()
    const end_dateRef = useRef()
    const router = useRouter()

    function getFile(e) {
        const file = e.target.files[0]
        setSelectedFile(file || null)
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append('image', selectedFile)
            formData.append('title', titleRef.current.value)
            formData.append('description', descriptionRef.current.value)
            formData.append('income', incomeRef.current.value)
            formData.append('start_date', start_dateRef.current.value)
            formData.append('end_date', end_dateRef.current.value)
            formData.append('brand', brandRef.current.value)
            await fetch(`http://localhost:5000/ads/patch/${params.id}`, {
                method: 'PATCH',
                body: formData
            })
            setTimeout(() => {
                router.push('/home/ads')
            }, 2000)
        } catch (error) {
            console.error(error)
        }
    }

    if (error) return <div className='border border-red-500 bg-red-100 rounded-lg center h-20 w-full'>Упс! Вышла ошибка.</div>
    if (isLoading) return <div className='bg-calm-100 rounded-lg animate-pulse center h-20 w-full'>Загрузка...</div>

    return(
        <form className='flex flex-col gap-4' encType='multipart/div-data'>
            <h2 className='font-bold'>Обновить рекламу</h2>
            <div className='flex flex-col gap-2 md:flex md:flex-row md:gap-4'>
                <div className='flex flex-col gap-4 justify-between md:flex-[50%] md:max-w-[50%]'>
                    <input
                        name='title'
                        type='text'
                        ref={titleRef}
                        placeholder={adData ? adData.title : ''}
                        className='input-outline px-4 h-10 w-full'
                    ></input>
                    <input
                        name='brand'
                        type='text'
                        ref={brandRef}
                        placeholder={adData ? adData.brand : ''}
                        className='input-outline px-4 h-10 w-full'
                    ></input>
                    <input
                        name='description'
                        type='text'
                        ref={descriptionRef}
                        placeholder={adData ? adData.description : ''}
                        className='input-outline px-4 h-10 w-full'
                    ></input>
                    <input
                        name='income'
                        type='number'
                        ref={incomeRef}
                        placeholder={adData ? adData.income + ' ман.' : ''}
                        className='input-outline px-4 h-10 w-full'
                    ></input>
                    <span className='flex-row-center gap-2'>
                        <p className='w-20'>Начало</p>
                        <input
                            name='start_date'
                            type='date'
                            ref={start_dateRef}
                            placeholder='Начало'
                            className='input-outline px-4 h-full w-full'
                        ></input>
                    </span>
                    <span className='flex-row-center gap-2'>
                        <p className='w-20'>Конец</p>
                        <input
                            name='end_date'
                            type='date'
                            ref={end_dateRef}
                            placeholder='Конец'
                            className='input-outline px-4 h-full w-full'
                        ></input>
                    </span>
                    <input
                        type='file'
                        name='image'
                        onChange={getFile}
                        accept='image/*'
                        placeholder='Добавить фото'
                        className='bg-calm-50 block border rounded-lg text-calm-600 file:cursor-pointer file:rounded-l-lg file:border-0 file:text-sm file:bg-calm-600 file:text-white file:px-2 file:h-10 h-10 w-full'
                    ></input>
                </div>
                <div className='border rounded-lg text-center center flex-col p-2 md:flex-[50%] md:max-w-[50%] w-full'>
                    <p>Рекомендуемый размер изображения 1360 x 360</p>
                    <div className={selectedFile ? 'relative block min-h-[360px] md:max-h-[500px] w-full' : 'hidden relative h-72'}>
                        {selectedFile && selectedFile instanceof File && (
                            <Image
                                src={URL.createObjectURL(selectedFile)}
                                alt='image'
                                className='object-contain'
                                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw'
                                fill
                            />
                        )}
                    </div>
                </div>
            </div>
            <button
                type='submit'
                onClick={handleUpdate}
                className='button-primary button-hover center gap-2 px-4 h-10 w-full'>
                <>Обновить</>
                <IoSaveOutline className='icons'/>
            </button>
        </form>
    )
}