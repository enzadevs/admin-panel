'use client'

import Link from 'next/link'
import {HiOutlinePlusSm} from 'react-icons/hi'
import BrandsTable from 'components/Containers/Tables/BrandsTable'

export default function ManageBrandsPage(){
    return(
        <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>Управление брендами</h1>
            <Link href='/home/manage/brands/new' className='button-primary flex-row-center justify-center gap-2 px-4 w-fit'>
                <>Добавить</>
                <HiOutlinePlusSm className='icons'/>
            </Link>
            <BrandsTable/>
        </div>
    )
}