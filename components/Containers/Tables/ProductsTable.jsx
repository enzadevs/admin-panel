'use client'

import 'rsuite/dist/rsuite-no-reset.min.css'
import Link from 'next/link'
import {Table,Pagination} from 'rsuite'
import {useState} from 'react'
import {MdEdit} from 'react-icons/md'

const { Column, HeaderCell, Cell } = Table

export default function ProductsTable({columnData}){
    const [data,setData] = useState([])
    const [sortColumn, setSortColumn] = useState()
    const [sortType, setSortType] = useState()
    const [loading, setLoading] = useState(false)
    const [limit, setLimit] = useState(30)
    const [page, setPage] = useState(1)
    const getData = () => {
        if (sortColumn && sortType) {
            return data.sort((a, b) => {
                let x = a[sortColumn]
                let y = b[sortColumn]
            if (typeof x === 'string') {
                x = x.charCodeAt()
                }
            if (typeof y === 'string') {
                y = y.charCodeAt()
                }
            if (sortType === 'asc') {
                return x - y
            } else {
                return y - x
                }
            })
        }
        return data
    }
    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          setSortColumn(sortColumn)
          setSortType(sortType)
        }, 500)
    }
    const handleChangeLimit = dataKey => {
        setPage(1)
        setLimit(dataKey)
    }
    const dataFilter = data.filter((v, i) => {
        const start = limit * (page - 1)
        const end = start + limit
        return i >= start && i < end
    })

    return(
        <>
            <Table
                height={700}
                data={getData()}
                sortColumn={sortColumn}
                sortType={sortType}
                onSortColumn={handleSortColumn}
                loading={loading}
                locale={{ emptyMessage: 'Здесь пока ничего нет.'}}
            >
                <Column width={80} align='center' fixed sortable>
                    <HeaderCell>#</HeaderCell>
                    <Cell dataKey='id'/>
                </Column>
                <Column flexGrow={2} align='center' fixed sortable>
                    <HeaderCell>Имя товара</HeaderCell>
                    <Cell dataKey='productName'/>
                </Column>
                <Column flexGrow={1} align='center' fixed sortable>
                    <HeaderCell>Бренд</HeaderCell>
                    <Cell dataKey='brandName'/>
                </Column>
                <Column flexGrow={1} align='center' fixed sortable>
                    <HeaderCell>Категория</HeaderCell>
                    <Cell dataKey='category'/>
                </Column>
                <Column flexGrow={1} align='center' fixed sortable>
                    <HeaderCell>Количество</HeaderCell>
                    <Cell dataKey='stock'/>
                </Column>
                <Column width={100} align='center' fixed>
                    <HeaderCell>Опции</HeaderCell>
                    <Cell style={{padding: '2px'}}>
                        {data => (
                            <Link href={`/home/products/${data.id}`} className='bg-calm-50 rounded-full center transition hover:bg-calm-600 hover:text-white h-10 w-10'>
                                <MdEdit className='icons'/>
                            </Link>
                        )}
                    </Cell>
                </Column>
            </Table>
            <div style={{ padding: '5px 16px', backgroundColor: '#f3f7fc'}}>
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    maxButtons={5}
                    size='sm'
                    layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                    total={dataFilter.length}
                    limitOptions={[10, 30, 50]}
                    limit={limit}
                    activePage={page}
                    onChangePage={setPage}
                    onChangeLimit={handleChangeLimit}
                />
            </div>
        </>
    )
}