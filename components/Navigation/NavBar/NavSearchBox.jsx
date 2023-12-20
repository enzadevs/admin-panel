import {IoSearchOutline} from 'react-icons/io5'

export default function NavSearchBox(){
    return(
        <div className='bg-calm-100 rounded-lg flex-row-center h-10 w-[512px]'>
            <button className='rounded-l-xl absolute center h-10 w-10'>
                <IoSearchOutline className='icons'/>
            </button>
            <input
                type='text'
                placeholder='Поиск...'
                className='bg-calm-50 rounded-lg outline-none transition border focus:border-calm-400 pl-10 h-full w-full'
            ></input>
        </div>
    )
}