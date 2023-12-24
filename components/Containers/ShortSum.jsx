import {PiUsersThreeLight,PiShoppingCartLight} from 'react-icons/pi'
import {TbReportMoney,TbDatabaseDollar} from 'react-icons/tb'

export default async function ShortSum(){
    return(
        <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-bold '>Сегодня :</h1>
            <div className='flex-row-center gap-8'>
                <div className='bg-calm-50 shadow-sm border border-light rounded-lg flex-row-center transition flex-[25%] max-w-[25%] hover:border-calm-400 h-32'>
                    <div className='flex flex-col flex-[70%] h-full max-w-[70%]'>
                        <p className='border-b border-light flex items-center text-gray-600 pl-2 h-10'>Посетители :</p>
                        <span className='center grow'>
                            <p className='text-2xl'>152.450</p>
                        </span>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <PiUsersThreeLight className='h-12 w-12'/>
                    </span>
                </div>
                <div className='bg-calm-50 shadow-sm border border-light rounded-lg flex-row-center transition flex-[25%] max-w-[25%] hover:border-calm-400 h-32'>
                    <div className='flex flex-col flex-[70%] h-full max-w-[70%]'>
                        <p className='border-b border-light flex items-center text-gray-600 pl-2 h-10'>Заказы :</p>
                        <span className='center grow'>
                            <p className='text-2xl'>48</p>
                        </span>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <PiShoppingCartLight className='h-12 w-12'/>
                    </span>
                </div>
                <div className='bg-calm-50 shadow-sm border border-light rounded-lg flex-row-center transition flex-[25%] max-w-[25%] hover:border-calm-400 h-32'>
                    <div className='flex flex-col flex-[70%] h-full max-w-[70%]'>
                        <p className='border-b border-light flex items-center text-gray-600 pl-2 h-10'>Сумма заказов :</p>
                        <span className='center grow'>
                            <p className='text-2xl'>45120 ман.</p>
                        </span>
                    </div>
                    <span className='border-l border-light center flex-[30%] h-full max-w-[30%]'>
                        <TbDatabaseDollar className='h-12 w-12'/>
                    </span>
                </div>
                <div className='bg-calm-50 shadow-sm border border-light rounded-lg flex-row-center transition flex-[25%] max-w-[25%] hover:border-calm-400 h-32'>
                    <div className='flex flex-col flex-[70%] h-full max-w-[70%]'>
                        <p className='border-b border-light flex items-center text-gray-600 pl-2 h-10'>Выгода :</p>
                        <span className='center grow'>
                            <p className='text-2xl'>2675 ман.</p>
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