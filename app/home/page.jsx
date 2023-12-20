import ShortSum from 'components/Containers/ShortSum'
import IndexMonthStats from 'components/Containers/Charts/IndexMonthStats'

export default function HomePage(){
    return(
        <div className='flex flex-col gap-4 px-4'>
            <ShortSum/>
            <IndexMonthStats/>
        </div>
    )
}