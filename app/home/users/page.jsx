export const metadata = {
    title: 'Пользователи'
}

import Link from 'next/link'
import dynamic from 'next/dynamic'
const ReusableTable = dynamic(() => import('components/Containers/Tables/ReusableTable'), {ssr: false})
import {LuUserPlus2} from 'react-icons/lu'

const usersTableHeaders = [
    {
        id: 0,
        headerTitle: '#',
        dataKey: 'number'
    },
    {
        id: 1,
        headerTitle: 'Полное имя',
        dataKey: 'full_name'
    },
    {
        id: 2,
        headerTitle: 'Личный номер',
        dataKey: 'phone_number'
    },
    {
        id: 3,
        headerTitle: 'Дата создания',
        dataKey: 'created_at'
    }
]

export default async function UsersPage(){
    const response = await fetch('http://localhost:5000/users/',
    {
        method: "GET",
        cache: "no-store"
    })
    const users = await response.json()
    const url = 'users'

    return(
        <div className='flex flex-col gap-4 p-4'>
            <h1 className='text-xl font-bold'>Пользователи</h1>
            <span className=''>
                <Link href='/home/users/new' className='button-primary flex-row-center button-hover px-4 w-fit'>
                    <>Добавить</>
                    <LuUserPlus2 className='icons ml-2'/>
                </Link>
            </span>
            <ReusableTable
               headers={usersTableHeaders}
               tableHeight={500}
               columnData={users}
               dataUrl={url} 
            />
            {console.log(users)}
        </div>
    )
}