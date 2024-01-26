'use client'

import useSWR from 'swr'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import {useState,useRef} from 'react'
import {IoSaveOutline} from 'react-icons/io5'

const fetchBrandData = async (id) => {
    const response = await fetch(`http://localhost:5000/brands/${id}`)
    const data = await response.json()
    return data
}

export default function ChangeBrandPage({params}){
    const [selectedFile, setSelectedFile] = useState()
    const { data: brandData, error, isLoading  } = useSWR(params.id ? [params.id] : null, fetchBrandData)
    const titleRef = useRef()
    const router = useRouter()

    function getFile(e) {
        const file = e.target.files[0]
        setSelectedFile(file || null)
    }

    const handleUpload = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append('image', selectedFile)
            formData.append('title', titleRef.current.value)
            await fetch(`http://localhost:5000/brands/patch/${params.id}`, {
                method: 'PATCH',
                body: formData
            })
            setTimeout(() => {
                router.push('/home/manage/brands')
            }, 2000)
        } catch (error) {
            console.error(error)
        }
    }

    if (error) return <div className='border border-red-500 bg-red-100 rounded-lg center h-20 w-full'>Упс! Вышла ошибка.</div>
    if (isLoading) return <div className='bg-calm-100 rounded-lg animate-pulse center h-20 w-full'>Загрузка...</div>

    return(
        <form className='flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>Изменить</h1>
            <div className='flex flex-col gap-2 md:flex md:flex-row md:gap-4'>
                <div className='flex flex-col gap-4 justify-between md:flex-[50%] md:max-w-[50%]'>
                    <input
                        id='title'
                        type='text'
                        ref={titleRef}
                        placeholder={brandData ? brandData.title : ''}
                        className='input-outline px-4 h-10 w-full'
                    ></input>
                    <input
                        type='file'
                        name='image'
                        onChange={getFile}
                        placeholder='Добавить фото'
                        className='bg-calm-50 block border rounded-lg text-calm-600 file:cursor-pointer file:rounded-l-lg file:border-0 file:text-sm file:bg-calm-600 file:text-white file:px-2 file:h-10 h-10 w-full'
                    ></input>
                </div>
                <div className='border rounded-lg text-center center flex-col p-2 md:flex-[50%] md:max-w-[50%] w-full'>
                    <p>Рекомендуемый размер изображения 200 x 200</p>
                    <div className={selectedFile ? 'relative block h-[200px] md:h-[500px] w-full' : 'hidden relative h-72'}>
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
                onClick={handleUpload}
                href='/home/ads/new'
                className='button-primary button-hover center gap-2 px-4 h-10 w-full'>
                <>Обновить</>
                <IoSaveOutline className='icons'/>
            </button>
        </form>
    )
}