export const metadata = {
    title: 'Заказы'
}

import OrdersTable from 'components/Containers/Tables/OrdersTable'

export default function OrdersPage(){
    return(
        <div className='flex flex-col gap-4 p-4'>
            <h1 className='text-xl font-bold'>Заказы</h1>
            <OrdersTable/>
        </div>
    )
}