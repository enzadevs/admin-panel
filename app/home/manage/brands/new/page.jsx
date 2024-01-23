'use client'

import Image from 'next/image'
import {useState,useRef} from 'react'
import {IoSaveOutline} from 'react-icons/io5'

export default function NewBrandPage(){
    const [file,setFile] = useState()
    const titleRef = useRef()
    const imageIdRef = useRef()

    function getFile(e){
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    async function handleSubmit(){
        try {
            const newAd = await fetch('http://localhost:5000/brands/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: titleRef.current.value,
                imageIdRef: imageIdRef.current.value
            })
        })
        const response = await newAd.json()
        console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <form className='flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>Новый бренд</h1>
            <div className='flex flex-col gap-2 md:flex md:flex-row md:gap-4'>
                <div className='flex flex-col gap-4 justify-between md:flex-[50%] md:max-w-[50%]'>
                    <input
                        id='title'
                        type='text'
                        ref={titleRef}
                        placeholder='Имя бренда'
                        className='input-outline px-4 h-10 w-full'
                    ></input>
                    <input
                        type='file'
                        name='poster_image'
                        ref={imageIdRef}
                        onChange={getFile}
                        placeholder='Добавить фото'
                        className='bg-calm-50 block border rounded-lg text-calm-600 file:cursor-pointer file:rounded-l-lg file:border-0 file:text-sm file:bg-calm-600 file:text-white file:px-2 file:h-10 h-10 w-full'
                    ></input>
                </div>
                <div className='border rounded-lg text-center center flex-col py-2 md:flex-[50%] md:max-w-[50%] w-full'>
                    <p>Рекомендуемый размер изображения 200px x 200px</p>
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
        </form>
    )
}