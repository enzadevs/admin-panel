'use client'

import useSWR from 'swr'
import Link from 'next/link'
import {TbDeviceDesktopPlus} from 'react-icons/tb'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function AdsPage(){
    const { data, error, isLoading } = useSWR(
        'http://localhost:5000/ads',
        fetcher
    )
    if (error) return <div className='border border-red-500 bg-red-100 rounded-lg center h-20 w-full'>Упс! Вышла ошибка.</div>
    if (isLoading) return <div className='bg-calm-100 rounded-lg animate-pulse center h-20 w-full'>Загрузка...</div>

    return(
        <>
            <span className='flex flex-col gap-2 md:flex md:flex-row md:gap-4'>
                <Link href='/home/ads/new' className='button-primary flex-row-center justify-center gap-2 px-4 w-full'>
                    <>Добавить</>
                    <TbDeviceDesktopPlus className='icons'/>
                </Link>
            </span>
            <div>
                
            </div>
        </>
    )
}