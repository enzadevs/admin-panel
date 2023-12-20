import Link from 'next/link'

export default function BrandLogo(){
    return(
        <Link href='/home' className='border-b border-light shadow-sm flex-row-center justify-center gap-2 h-14'>
            <div className='bg-calm-800 rounded-lg text-white center text-xl font-bold h-10 w-10'>N</div>
            <p className='text-calm-800 text-xl font-bold'>Admin Tool</p>
        </Link>
    )
}