export const metadata = {
    title: 'Реклама'
}

import Link from 'next/link'

export default function AdsLayout({children}){
    return(
        <div className='flex flex-col gap-4 p-4 min-h-[768px]'>
            <Link href='/home/ads/' className='text-xl font-bold'>Реклама</Link>
            {children}
        </div>
    )
}