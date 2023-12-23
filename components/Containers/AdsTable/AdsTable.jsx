export default function AdsTable(){
    return(
        <div className='overflow-x-auto'>
            <table className='table'>
                <thead>
                    <tr className='border-b border-light text-center'>
                        <th>#</th>
                        <th>Имя</th>
                        <th>Добавлено</th>
                        <th>Начало</th>
                        <th>Конец</th>
                        <th>Прибыль</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b border-light cursor-pointer transition hover:bg-calm-200 text-center'>
                        <th>1</th>
                        <td className='max-w-[300px]'>Nike Air Max Кроссовки </td>
                        <td>21.12.23</td>
                        <td>01.01.2024</td>
                        <td>01.04.2024</td>
                        <td>500 ман.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}