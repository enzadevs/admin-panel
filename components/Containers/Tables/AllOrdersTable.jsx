import {useState} from 'react'
import {CiSearch} from 'react-icons/ci'

export const AllOrdersTable = ({rows}) => {
    const [sortedRows,setRows] = useState(rows)

    // const filter = event => {
    //     const value = event.target.value
    
    //     if (value) {
    //         setRows([
    //             ...rows.filter(row => {
    //                 return Object.values(row)
    //                     .join('')
    //                     .toLowerCase()
    //                     .includes(value)
    //             })
    //         ])
    //     } else {
    //         setRows(rows)
    //     }
    // }
    const filter = event => {
        const value = event.target.value

        if (value) {
            setRows(rows.filter(row => {
                return Object.values(row)
                    .join('')
                    .toLowerCase()
                    .includes(value.toLowerCase())
            }))
        } else {
            setRows(rows)
        }
    }

    return(
        <div className='overflow-x-auto'>
            <div className='flex-row-center gap-2 h-10'>
                <div className='relative flex-row-center w-full'>
                    <input className='input-outline pl-4 pr-8 w-full' type='text' placeholder='Поиск...' onChange={filter}/>
                    <button className='center absolute right-0 h-10 w-10'>
                        <CiSearch className='icons'/>
                    </button>
                </div>
            </div>
            <table className='w-full table'>
                <thead>
                    <tr className='border-b border-light'>
                        {/* <th>ИД заказа</th> */}
                        <th>ИД пользователя</th>
                        <th>Адрес</th>
                        <th>Сумма</th>
                        <th>Вид доставки</th>
                        <th>Сумма доставки</th>
                        <th>Вид оплаты</th>
                        <th>Комментарий</th>
                        <th>Создано</th>
                        <th>Обновлено</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedRows.map((row, index) => (
                        <tr key={index} className='border-b border-light cursor-pointer transition hover:bg-calm-50 hover:text-calm-600'>
                            <td>{row.customer.full_name}</td>
                            <td>{row.address}</td>
                            <td>{row.total_sum}</td>
                            <td>{row.delivery_type.title}</td>
                            <td>{row.delivery_price}</td>
                            <td>{row.payment_type.title}</td>
                            <td>{row.comment}</td>
                            <td>{row.created_at}</td>
                            <td>{row.updated_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {!sortedRows.length && 
                <div className='border border-yellow-400 bg-yellow-300 rounded-lg center text-sm md:text-base text-center mt-2 px-2 h-20'>
                    Ничего не нашлось.
                </div>
            }
        </div>
    )
}