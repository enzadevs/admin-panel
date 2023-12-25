export const metadata = {
    title: 'Товары'
}

import Link from 'next/link'
import {FaCartPlus} from 'react-icons/fa6'
import RSTable from 'components/Containers/Tables/RSTable'

export default function ProductsPage(){
    return(
        <div className='flex flex-col gap-4'>
            <Link href='/home/products' className='text-xl font-bold'>Товары</Link>
            <div className='flex-row-center'>
                <Link href='/home/products/new' className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-500 hover:text-white px-4 h-10'>
                    Добавить новые товары
                    <FaCartPlus className='icons'/>
                </Link>
            </div>
            <div className='bg-calm-50 border border-light rounded-lg py-4'>
                <RSTable/>
            </div>
        </div>
    )
}