'use client'

import Link from 'next/link'
import ProductsTable from 'components/Containers/Tables/ProductsTable'

export default function PopularProducts(){
    return(
        <div className='flex flex-col gap-4'>
            <Link href='/home/products' className='text-xl font-bold'>Популярные товары</Link>
            <div className='border z-0'>
                <ProductsTable/>
            </div>
        </div>
    )
}