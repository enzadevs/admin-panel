export const metadata = {
    title: 'Пользователи'
}

import Link from 'next/link'
import {LuUserPlus2} from 'react-icons/lu'

export default async function UsersPage(){

    return(
        <div className='flex flex-col gap-4 p-4'>
            <h1 className='text-xl font-bold'>Пользователи</h1>
            <span className=''>
                <Link href='/home/users/new' className='button-primary flex-row-center button-hover px-4 w-fit'>
                    <>Добавить</>
                    <LuUserPlus2 className='icons ml-2'/>
                </Link>
            </span>
        </div>
    )
}