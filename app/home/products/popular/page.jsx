'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
const ReusableTable = dynamic(() => import('components/Containers/Tables/ReusableTable'), {ssr: false})

const productsTableHeaders = [
    {
        id: 0,
        headerTitle: '#',
        dataKey: 'productId'
    },
    {
        id: 1,
        headerTitle: 'Имя товара',
        dataKey: 'productName'
    },
    {
        id: 2,
        headerTitle: 'Бренд',
        dataKey: 'brandName'
    },
    {
        id: 3,
        headerTitle: 'Категория',
        dataKey: 'category'
    },
    {
        id: 4,
        headerTitle: 'Количество',
        dataKey: 'stock'
    },
]

export default function PopularProducts(){
    return(
        <div className='flex flex-col gap-4'>
            <Link href='/home/products' className='text-xl font-bold'>Популярные товары</Link>
            <ReusableTable
                headers={productsTableHeaders}
                tableHeight={500}
                // dataUrl={products}
            />
        </div>
    )
}