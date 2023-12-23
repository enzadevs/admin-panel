'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'

export default function AnalyticsPage(){
    const monthsArray = [
        {
            id: 0,
            monthName: 'Январь'
        },
        {
            id: 1,
            monthName: 'Февраль'
        },
        {
            id: 2,
            monthName: 'Март'
        },
        {
            id: 3,
            monthName: 'Апрель'
        },
        {
            id: 4,
            monthName: 'Май'
        },
        {
            id: 5,
            monthName: 'Июнь'
        },
        {
            id: 6,
            monthName: 'Июль'
        },
        {
            id: 7,
            monthName: 'Август'
        },
        {
            id: 8,
            monthName: 'Сентябрь'
        },
        {
            id: 9,
            monthName: 'Октябрь'
        },
        {
            id: 10,
            monthName: 'Ноябрь'
        },
        {
            id: 11,
            monthName: 'Декабрь'
        }
    ]
    const [num, setNum] = useState(0)

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const handleClick = () => {
        setNum(randomNumberInRange(1, 1000))
    }

    return(
        <div className='flex flex-col gap-4 mt-2 px-4'>
            <h1 className='text-xl font-bold'>Аналитика</h1>
            <div className='h-auto w-full'>
                <Tab.Group>
                    <Tab.List className='border-b border-light flex-row-center items-center justify-between pb-4 h-fit'>
                        {monthsArray.map(item => {
                            return(
                                <Tab 
                                    key={item.id} 
                                    className='bg-calm-50 rounded-lg transition outline-none hover:bg-calm-500 hover:text-white px-4 h-10 w-fit'
                                    >
                                        {item.monthName}
                                </Tab>
                            )
                        })}
                    </Tab.List>
                    <Tab.Panels className='bg-calm-50 rounded-lg mt-4 px-2 min-h-[80vh]'>
                        <Tab.Panel>Content 1</Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                        <Tab.Panel>Content 4</Tab.Panel>
                        <Tab.Panel>Content 5</Tab.Panel>
                        <Tab.Panel>Content 6</Tab.Panel>
                        <Tab.Panel>Content 7</Tab.Panel>
                        <Tab.Panel>Content 8</Tab.Panel>
                        <Tab.Panel>Content 9</Tab.Panel>
                        <Tab.Panel>Content 10</Tab.Panel>
                        <Tab.Panel>Content 11</Tab.Panel>
                        <Tab.Panel>Content 12</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}