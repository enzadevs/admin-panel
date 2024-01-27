export const metadata = {
    title: 'Настройки'
}

export default function UsersLayout({children}){
    return(
        <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>Настройки</h2>
            {children}
        </div>
    )
}