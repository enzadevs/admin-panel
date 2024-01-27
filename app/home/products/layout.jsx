export const metadata = {
    title: 'Продукты'
}

export default function UsersLayout({children}){
    return(
        <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>Все товары</h2>
            {children}
        </div>
    )
}