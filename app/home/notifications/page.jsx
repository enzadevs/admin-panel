export const metadata = {
    title: 'Уведомления'
}

export default function NotificationsPage(){
    return(
        <div className='flex flex-col gap-4 p-4'>
            <h1 className='text-xl font-bold'>Уведомления</h1>
            <div className='bg-calm-50 border border-light center rounded-lg h-96 w-full'>
                Новых уведомлений нет
            </div>
        </div>
    )
}