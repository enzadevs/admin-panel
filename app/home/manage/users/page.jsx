'use client'

import useSWR from 'swr'
import {useRef} from 'react'    
import {HiOutlinePlusSm} from 'react-icons/hi'

const fetcher = (url) => fetch(url).then((res) => res.json())

const urls = [
    'http://localhost:5000/cities',
    'http://localhost:5000/visitors/',
    'http://localhost:5000/users/count'
]

export default function UsersPage(){
    const titleRef = useRef()
    const { data: citiesData, error: citiesError, isLoading: citiesLoading } = useSWR(urls[0], fetcher)
    const { data: visitorsData } = useSWR(urls[1], fetcher)
    const { data: usersData } = useSWR(urls[2], fetcher)
    if (citiesError) return <div className='border border-red-500 bg-red-100 rounded-lg center h-20 w-full'>Упс! Вышла ошибка.</div>
    if (citiesLoading) return <div className='bg-calm-100 rounded-lg animate-pulse center h-20 w-full'>Загрузка...</div>

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetch('http://localhost:5000/cities/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title : titleRef.current.value})
            })
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>Настройки пользователей</h2>
            <div className='flex flex-col gap-4'>
                <div className='border rounded-[4px] text-base flex flex-col gap-2 sm:flex-row sm:gap-4 p-4'>
                    <div className='flex flex-col gap-2 h-auto w-full'>
                        <h2 className='text-xl font-semibold'>Статистика :</h2>
                        <div className='border-b flex-row-center justify-between h-10'>
                            <p className='font-bold'>Кол.во зарегистрированных пользователей :</p>
                            <>{usersData}</>
                        </div>
                        <div className='border-b flex-row-center justify-between h-10'>
                            <p className='font-bold'>Посетители за все время :</p>
                            <>{visitorsData}</>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <h2 className='text-xl font-semibold'>Города :</h2>
                        <form className='relative flex-row-center'>
                            <input
                                name='title'
                                type='text'
                                ref={titleRef}
                                placeholder='Новый город'
                                className='input-outline px-4 h-10 w-full'
                            ></input>
                            <button onClick={handleSubmit} type='submit' className='icons-wrapper center absolute right-0'>
                                <HiOutlinePlusSm className='icons'/>
                            </button>
                        </form>
                        <div className='flex flex-col gap-2 h-auto w-full'>
                            {citiesData.map(item => {
                                return(
                                    <div key={item.id} className='border-b flex-row-center h-10'>
                                        <p className='font-bold'>{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}