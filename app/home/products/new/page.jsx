import Link from 'next/link'
import SelectionContainer from 'components/Containers/Selection/Selection'

export default function NewProducts(){
    return(
        <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-bold'>Новый товар</h1>
            <div className='flex flex-row gap-4'>
                <span className='flex flex-col gap-4 flex-[50%] max-w-[50%]'>
                    <input
                        type='text'
                        placeholder='Имя товара'
                        className='text-sm rounded-lg outline-none transition border focus:border-calm-400 px-4 h-9'
                    ></input>
                    <input
                        type='text'
                        placeholder='Цена (ман.)'
                        className='text-sm rounded-lg outline-none transition border focus:border-calm-400 px-4 h-9'
                    ></input>
                    <input
                        type='text'
                        placeholder='Бар код'
                        className='text-sm rounded-lg outline-none transition border focus:border-calm-400 px-4 h-9'
                    ></input>
                    <input
                        type='text'
                        placeholder='Количество'
                        className='text-sm rounded-lg outline-none transition border focus:border-calm-400 px-4 h-9'
                    ></input>
                    <textarea
                        placeholder='Описание'
                        className='text-sm rounded-lg outline-none transition border focus:border-calm-400 p-4 h-20'
                    ></textarea>
                </span>
                <span className='flex flex-col gap-4 flex-[50%] max-w-[50%]'>
                    <SelectionContainer
                        selectLabel={''}
                        selectOptions={[]}
                        selectPlaceholder={'Категория'}
                    />
                    <SelectionContainer
                        selectLabel={''}
                        selectOptions={[]}
                        selectPlaceholder={'Подкатегория'}
                    />
                    <SelectionContainer
                        selectLabel={''}
                        selectOptions={[]}
                        selectPlaceholder={'Бренд'}
                    />
                    <SelectionContainer
                        selectLabel={''}
                        selectOptions={[]}
                        selectPlaceholder={'Теги'}
                    />
                    <div className='flex-row-center justify-between gap-4'>
                        <button 
                            value={'new'} 
                            className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-600 hover:text-white px-4 h-20 w-full'>
                            Новинка
                        </button>
                        <button 
                            value={'popular'} 
                            className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-600 hover:text-white px-4 h-20 w-full'>
                            Популярное
                        </button>
                        <button 
                            value={'free delivery'} 
                            className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-600 hover:text-white px-4 h-20 w-full'>
                            Бесплатная доставка
                        </button>
                    </div>
                </span>
            </div>
            <button className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-600 hover:text-white px-4 h-9'>
                Добавить фотографии
            </button>
            <Link href='/home/products' className='border border-light rounded-lg flex-row-center justify-center gap-2 transition hover:bg-calm-600 hover:text-white px-4 h-9'>
                Сохранить
            </Link>
        </div>
    )
}