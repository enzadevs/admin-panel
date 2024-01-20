import Link from 'next/link'

export const metadata = {
    title: 'Чат'
}

export default function CalendarPage(){
    return(
        <div className='flex flex-col gap-4'>
            <Link href='/home/chat' className='text-xl font-semibold w-fit'>Чат</Link>
        </div>
    )
}