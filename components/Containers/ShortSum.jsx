import {PiShoppingCartLight} from 'react-icons/pi'
import {TbReportMoney,TbDatabaseDollar} from 'react-icons/tb'
import {LuUsers2} from 'react-icons/lu'

export default async function ShortSum(){
    const response = await fetch('http://localhost:5000/orders/today/count/',{ method: 'GET', cache: 'no-store'})
    const orders = await response.json()
    const res = await fetch('http://localhost:5000/visitors/')
    const visitors = await res.json()

    return(
        <div className='flex flex-col gap-4 w-full'>
            <h1 className='text-xl font-bold '>Сегодня :</h1>
            <div className='flex-row-center gap-8'>
                <div className='button-primary shadow-sm flex-row-center flex-[25%] max-w-[25%] hover:border-calm-400 h-32'>
                    <div className='flex flex-col flex-[70%] h-full max-w-[70%]'>
                        <p className='border-b border-light flex items-center text-gray-600 pl-2 h-10'>Заказы :</p>
                        <span className='center grow relative'>
                            <p className='text-2xl'>{orders}</p>
                        </span>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <PiShoppingCartLight className='h-12 w-12'/>
                    </span>
                </div>
                <div className='button-primary shadow-sm flex-row-center flex-[25%] max-w-[25%] hover:border-calm-400 h-32'>
                    <div className='flex flex-col flex-[70%] h-full max-w-[70%]'>
                        <p className='border-b border-light flex items-center text-gray-600 pl-2 h-10'>Посетители :</p>
                        <span className='center grow'>
                            <p className='text-2xl'>{visitors.length}</p>
                        </span>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <LuUsers2 className='h-12 w-12'/>
                    </span>
                </div>
                <div className='button-primary shadow-sm flex-row-center flex-[25%] max-w-[25%] hover:border-calm-400 h-32'>
                    <div className='flex flex-col flex-[70%] h-full max-w-[70%]'>
                        <p className='border-b border-light flex items-center text-gray-600 pl-2 h-10'>Сумма заказов :</p>
                        <span className='center grow'>
                            <p className='text-2xl'></p>
                        </span>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <TbDatabaseDollar className='h-12 w-12'/>
                    </span>
                </div>
                <div className='button-primary shadow-sm flex-row-center flex-[25%] max-w-[25%] hover:border-calm-400 h-32'>
                    <div className='flex flex-col flex-[70%] h-full max-w-[70%]'>
                        <p className='border-b border-light flex items-center text-gray-600 pl-2 h-10'>Выгода :</p>
                        <span className='center grow'>
                            <p className='text-2xl'>{''}</p>
                        </span>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <TbReportMoney className='h-12 w-12'/>
                    </span>
                </div>
            </div>
        </div>
    )
}