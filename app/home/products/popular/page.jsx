import Link from 'next/link'

export default function PopularProducts(){
    return(
        <div className='flex flex-col gap-4'>
            <Link href='/home/products' className='text-xl font-bold'>Популярные товары</Link>
        </div>
    )
}