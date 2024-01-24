import {useState} from 'react'
import {capitalize} from 'components/Functions/Capitalize'
import {CiSearch} from 'react-icons/ci'

export const Table = ({rows}) => {
    const [sortedRows,setRows] = useState(rows)
    const [order, setOrder] = useState('⬇️')
    const [sortKey, setSortKey] = useState(Object.keys(rows[0])[0])

    const formatEntry = (entry) => {
        if (typeof entry === 'boolean') {
            return entry ? '✅' : '❌'
        }
        return entry
    }

    const filter = event => {
        const value = event.target.value
    
        if (value) {
            setRows([
                ...rows.filter(row => {
                    return Object.values(row)
                        .join('')
                        .toLowerCase()
                        .includes(value)
                })
            ])
        } else {
          setRows(rows)
        }
    }

    const sort = (value, order) => {
        const returnValue = order === '⬆️' ? 1 : -1
        setSortKey(value)
        setRows([
            ...sortedRows.sort((a, b) => {
            return a[value] > b[value] ? returnValue * -1 : returnValue
            })
        ])
    }
    
    const updateOrder = () => {
        const updatedOrder = order === '⬇️' ? '⬆️' : '⬇️'
        setOrder(updatedOrder)
        sort(sortKey, updatedOrder)
    }

    return(
        <div className=''>
            <div className='border-b flex-row-center gap-2 h-14'>
                <div className='relative flex-row-center w-full'>
                    <input className='input-outline pl-4 pr-8 w-full' type='text' placeholder='Поиск...' onChange={filter}/>
                    <button className='center absolute right-0 h-10 w-10'>
                        <CiSearch className='icons'/>
                    </button>
                </div>
                <span className='ml-auto'>
                    <select onChange={event => sort(event.target.value, order)}>
                        {Object.keys(rows[0]).slice(1).map((entry, index) => (
                            <option value={entry} key={index}>
                                Сортировать по {capitalize(entry)}
                            </option>
                        ))}
                    </select>
                    <button className='button-primary hidden md:block px-4 max-h-10 w-[180px]' onClick={updateOrder}>Ориентировка {order}</button>
                </span>
            </div>
            <table>
                <thead>
                <tr>
                    {Object.keys(rows[0]).slice(1).map((entry, index) => (
                        <th key={index}>{capitalize(entry)}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {sortedRows.map((row, index) => (
                    <tr key={index}>
                    {Object.values(row).slice(1).map((entry, columnIndex) => (
                        <td key={columnIndex}>{formatEntry(entry)}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
            {!sortedRows.length && 
                <div className='border border-yellow-400 bg-yellow-300 rounded-lg center text-sm md:text-base text-center px-2 h-20'>
                    Ничего не нашлось. Попробуйте изменить слово поиска
                </div>
            }
        </div>
    )
}