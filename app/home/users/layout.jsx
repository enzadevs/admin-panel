export const metadata = {
    title: 'Пользователи'
}

export default function UsersLayout({children}){
    return(
        <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>Все пользователи</h2>
            {children}
        </div>
    )
}