import {useState,useEffect} from 'react'

export default function CachedDataCharts(){
    const [isLoaded,setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    },[])

    return(
        <div>
            <div role='tablist' className='tabs tabs-bordered'>
                <input type='radio' name='my_tabs_2' role='tab' className='tab' aria-label='Tab 1'/>
                <div role='tabpanel' className='tab-content bg-green-100 border border-light rounded-lg w-full'>Tab content 1</div>
                <input type='radio' name='my_tabs_2' role='tab' className='tab' aria-label='Tab 2'/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>
                <input type='radio' name='my_tabs_2' role='tab' className='tab' aria-label='Tab 3'/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
            </div>
        </div>
    )
}