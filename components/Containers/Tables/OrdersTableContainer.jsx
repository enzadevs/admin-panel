'use client'

import useSWR from 'swr'
import { AllOrdersTable } from './AllOrdersTable'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function OrdersTableContainer(){
    const { data, error, isLoading } = useSWR('http://localhost:5000/orders',fetcher)
    if (error) return <div className='border border-red-500 bg-red-100 rounded-lg center h-20 w-full'>Упс! Вышла ошибка.</div>
    if (isLoading) return <div className='bg-calm-100 rounded-lg animate-pulse center h-20 w-full'>Загрузка...</div>

    return(
        <AllOrdersTable rows={data}/>
    )
}