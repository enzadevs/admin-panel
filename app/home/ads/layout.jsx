export const metadata = {
    title: 'Реклама'
}

import Link from 'next/link'

export default function AdsLayout({children}){
    return(
        <div className='flex flex-col gap-2 min-h-[768px]'>
            <Link href='/home/ads/' className='text-xl font-bold w-fit'>Реклама</Link>
            {children}
        </div>
    )
}