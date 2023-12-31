export const metadata = {
    title: 'Товары'
}

import Link from 'next/link'
import {FaCartPlus} from 'react-icons/fa6'
import {IoStar} from 'react-icons/io5'
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

export default function ProductsPage(){
    return(
        <div className='flex flex-col gap-4'>
            <Link href='/home/products' className='text-xl font-bold'>Товары</Link>
            <div className='flex-row-center gap-8'>
                <Link href='/home/products/new' className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-600 hover:text-white px-4 h-10 w-full'>
                    Добавить новые товары
                    <FaCartPlus className='icons'/>
                </Link>
                <Link href='/home/products/popular' className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-600 hover:text-white px-4 h-10 w-full'>
                    Популярные
                    <IoStar className='icons'/>
                </Link>
            </div>
            <ReusableTable
                headers={productsTableHeaders}
                tableHeight={500}
                // dataUrl={products}
            />
        </div>
    )
}