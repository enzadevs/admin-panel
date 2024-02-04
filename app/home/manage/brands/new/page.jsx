'use client'

import Image from 'next/image'
import {useRouter} from 'next/navigation'
import {useState,useRef} from 'react'
import {IoSaveOutline} from 'react-icons/io5'

export default function NewBrandPage(){
    const [selectedFile, setSelectedFile] = useState()
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
            await fetch('http://localhost:5000/brands/new', {
                method: 'POST',
                body: formData
            })
            setTimeout(() => {
                router.push('/home/manage/brands')
            }, 2000)
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <form className='flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>Новый бренд</h1>
            <div className='flex flex-col gap-2 md:flex md:flex-row md:gap-4'>
                <div className='flex flex-col gap-4 justify-between md:flex-[50%] md:max-w-[50%]'>
                    <input
                        name='title'
                        type='text'
                        ref={titleRef}
                        placeholder='Имя бренда'
                        className='input-outline px-4 h-10 w-full'
                    ></input>
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
                <>Сохранить</>
                <IoSaveOutline className='icons'/>
            </button>
        </form>
    )
}