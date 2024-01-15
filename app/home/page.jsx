export const metadata = {
    title: 'Главная страница'
}

import ShortSum from 'components/Containers/ShortSum'
import SalesAndRevenue from 'components/Containers/Charts/SalesAndRevenue'
import UsersCount from 'components/Containers/Charts/UsersCount'

export default function HomePage(){
    return(
        <div className='flex flex-col gap-4 p-4 mb-12'>
            <ShortSum/>
            <SalesAndRevenue/>
            <UsersCount/>
        </div>
    )
}