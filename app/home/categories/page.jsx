export const metadata = {
    title: 'Категории'
}

export default function CalendarPage(){
    return(
        <div className='flex flex-col gap-4 p-4'>
            <h1 className='text-xl font-bold'>Категории</h1>
            <div className='flex flex-row flex-wrap gap-4 w-full'>
                <div className='collapse bg-calm-50 m-0 transition hover:bg-calm-600 hover:text-white h-fit w-fit'>
                    <input type='checkbox'/> 
                    <div className='collapse-title'>
                        Еда и напитки
                    </div>
                    <div className='collapse-content m-0 px-4 py-0'> 
                        <p>Подкатегории</p>
                    </div>
                </div>
                <div className='collapse bg-calm-50 m-0 transition hover:bg-calm-600 hover:text-white h-fit w-fit'>
                    <input type='checkbox'/> 
                    <div className='collapse-title text-center'>
                        Химия
                    </div>
                    <div className='collapse-content m-0 px-4 py-0'> 
                        <p>Подкатегории</p>
                    </div>
                </div>
                <div className='collapse bg-calm-50 m-0 transition hover:bg-calm-600 hover:text-white h-fit w-fit'>
                    <input type='checkbox'/> 
                    <div className='collapse-title'>
                        Садовничество
                    </div>
                    <div className='collapse-content m-0 px-4 py-0'> 
                        <p>Подкатегории</p>
                    </div>
                </div>
                <div className='collapse bg-calm-50 m-0 transition hover:bg-calm-600 hover:text-white h-fit w-fit'>
                    <input type='checkbox'/> 
                    <div className='collapse-title'>
                        Одежда
                    </div>
                    <div className='collapse-content m-0 px-4 py-0'> 
                        <p>Подкатегории</p>
                    </div>
                </div>
                <button className='bg-calm-50 rounded-2xl transition hover:bg-calm-600 hover:text-white m-0 px-4 h-10 w-fit'>
                    Добавить +
                </button>
            </div>
        </div>
    )
}