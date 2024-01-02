export const metadata = {
    title: 'Заказы'
}

import dynamic from 'next/dynamic'
const ReusableTable = dynamic(() => import('components/Containers/Tables/ReusableTable'), {ssr: false})

const ordersTableHeaders = [
    {
        id: 0,
        headerTitle: '#',
        dataKey: 'id'
    },
    {
        id: 1,
        headerTitle: 'Пользователь',
        dataKey: 'userID'
    },
    {
        id: 2,
        headerTitle: 'Статус',
        dataKey: 'status'
    },
    {
        id: 3,
        headerTitle: 'Тип доставки',
        dataKey: 'deliveryType'
    },
    {
        id: 4,
        headerTitle: 'Создано',
        dataKey: 'createdDate'
    },
]

export default function OrdersPage(){
    return(
        <div className='flex flex-col gap-4 p-4'>
            <h1 className='text-xl font-bold'>Заказы</h1>
            <ReusableTable
               headers={ordersTableHeaders}
               tableHeight={500}
               // dataUrl={orders} 
            />
        </div>
    )
}