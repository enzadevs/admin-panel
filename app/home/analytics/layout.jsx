import Link from 'next/link'

export const metadata = {
    title: 'Аналитика'
}

export default function AnalyticsLayout({children}){
    return(
        <div className='flex flex-col gap-4'>
            <Link href='/home/analytics/' className='text-xl font-semibold w-fit'>Аналитика</Link>
            {children}
        </div>
    )
}