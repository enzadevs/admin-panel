import Link from 'next/link'

export default function AnalyticsLayout({children}){
    const monthsArray = [
        {
            id: 0,
            monthName: 'Январь',
            url: '/home/analytics/january'
        },
        {
            id: 1,
            monthName: 'Февраль',
            url: '/home/analytics/february'
        },
        {
            id: 2,
            monthName: 'Март',
            url: '/home/analytics/march'
        },
        {
            id: 3,
            monthName: 'Апрель',
            url: '/home/analytics/april'
        },
        {
            id: 4,
            monthName: 'Май',
            url: '/home/analytics/may'
        },
        {
            id: 5,
            monthName: 'Июнь',
            url: '/home/analytics/june'
        },
        {
            id: 6,
            monthName: 'Июль',
            url: '/home/analytics/july'
        },
        {
            id: 7,
            monthName: 'Август',
            url: '/home/analytics/august'
        },
        {
            id: 8,
            monthName: 'Сентябрь',
            url: '/home/analytics/september'
        },
        {
            id: 9,
            monthName: 'Октябрь',
            url: '/home/analytics/october'
        },
        {
            id: 10,
            monthName: 'Ноябрь',
            url: '/home/analytics/november'
        },
        {
            id: 11,
            monthName: 'Декабрь',
            url: '/home/analytics/december'
        }
    ]

    return(
        <div className='flex flex-col gap-4 p-4'>
            <Link href='/home/analytics/' className='text-xl font-bold'>Аналитика</Link>
            <div className='border-b border-light flex-row-center items-center justify-between pb-4 h-fit'>
                {monthsArray.map(item => {
                    return(
                        <Link
                            href={item.url}
                            key={item.id} 
                            className='bg-calm-50 center rounded-lg transition outline-none hover:bg-calm-500 hover:text-white px-4 h-10 w-fit'
                            >
                                {item.monthName}
                        </Link>
                    )
                })}
            </div>
            {children}
        </div>
    )
}