import {TbReportMoney,TbDatabaseDollar} from 'react-icons/tb'
import {LuUsers2} from 'react-icons/lu'
import {BsCart2} from 'react-icons/bs'

export default async function ShortSum(){
    return(
        <div className='flex flex-col gap-2 md:gap-4 w-full'>
            <h1 className='text-xl font-semibold'>Сегодня :</h1>
            <div className='flex-row-center gap-4'>
                <div className='flex items-center flex-col md:flex-row gap-2 flex-[50%] max-w-[50%] w-full'>
                    <div className='input-outline shadow-sm flex-row-center hover:border-calm-400 h-24 lg:h-32 w-full'>
                        <div className='flex flex-col flex-[75%] h-full max-w-[75%]'>
                            <p className='border-b flex items-center text-sm sm:text-base text-gray-600 pl-2 h-10'>Заказы</p>
                            <span className='center grow'>
                                <p className='font-semibold text-lg md:text-2xl'>100</p>
                            </span>
                        </div>
                        <span className='border-l center flex-[25%] h-full max-w-[25%]'>
                            <BsCart2 className='h-6 w-6 lg:h-10 lg:w-10'/>
                        </span>
                    </div>
                    <div className='input-outline shadow-sm flex-row-center hover:border-calm-400 h-24 lg:h-32 w-full'>
                        <div className='flex flex-col flex-[75%] h-full max-w-[75%]'>
                            <p className='border-b flex items-center text-sm sm:text-base text-gray-600 pl-2 h-10'>Посетители</p>
                            <span className='center grow'>
                                <p className='font-semibold text-lg md:text-2xl'>100</p>
                            </span>
                        </div>
                        <span className='border-l center flex-[25%] h-full max-w-[25%]'>
                            <LuUsers2 className='h-6 w-6 lg:h-10 lg:w-10'/>
                        </span>
                    </div>
                </div>
                <div className='flex items-center flex-col md:flex-row gap-2 flex-[50%] max-w-[50%] w-full'>
                <div className='input-outline shadow-sm flex-row-center hover:border-calm-400 h-24 lg:h-32 w-full'>
                        <div className='flex flex-col flex-[75%] h-full max-w-[75%]'>
                            <p className='border-b flex items-center text-sm sm:text-base text-gray-600 pl-2 h-10'>Общая сумма</p>
                            <span className='center grow'>
                                <p className='font-semibold text-lg md:text-2xl'>100</p>
                            </span>
                        </div>
                        <span className='border-l center flex-[25%] h-full max-w-[25%]'>
                            <TbReportMoney className='h-6 w-6 lg:h-10 lg:w-10'/>
                        </span>
                    </div>
                    <div className='input-outline shadow-sm flex-row-center hover:border-calm-400 h-24 lg:h-32 w-full'>
                        <div className='flex flex-col flex-[75%] h-full max-w-[75%]'>
                            <p className='border-b flex items-center text-sm sm:text-base text-gray-600 pl-2 h-10'>Выгода</p>
                            <span className='center grow'>
                                <p className='font-semibold text-lg md:text-2xl'>100</p>
                            </span>
                        </div>
                        <span className='border-l center flex-[25%] h-full max-w-[25%]'>
                            <TbDatabaseDollar className='h-6 w-6 lg:h-10 lg:w-10'/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}