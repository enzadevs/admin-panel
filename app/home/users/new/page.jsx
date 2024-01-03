export const metadata = {
    title: 'Новый пользователь'
}

import UserForm from 'components/Containers/Forms/UserForm'

export default function NewUserPage(){
    return(
        <div className='flex flex-col gap-4 p-4'>
            <h1 className='text-xl font-bold'>Новый пользователь</h1>
            <span className='flex flex-col gap-4'>
                <UserForm/>
            </span>
        </div>
    )
}