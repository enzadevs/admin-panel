export default function IndexMonthStats(){
    return(
        <div>
            <h1 className='text-xl font-bold '>Статистика за месяц :</h1>
            <div className='flex-row-center gap-4 mt-4 h-96 w-full'>
                <div className='bg-calm-50 border border-light rounded-lg flex-[70%] px-2 h-full max-w-[70%]'>
                
                </div>
                <div className='bg-calm-50 border border-light rounded-lg flex-[30%] px-2 h-full max-w-[30%]'>
                    Left To Right
                </div>
            </div>
        </div>
    )
}