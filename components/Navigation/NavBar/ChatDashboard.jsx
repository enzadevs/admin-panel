import {IoChatbubbleEllipsesOutline} from 'react-icons/io5'

export default function ChatDashboard(){
    return(
        <div className='relative dropdown bg-calm-50 icons-wrapper center transition-all hover:text-calm-600' tabIndex={0}>
            <IoChatbubbleEllipsesOutline className='icons'/>
            <div tabIndex={0} className='bg-white border border-light text-black rounded-lg dropdown-content top-12 right-4 menu z-[1] h-40 w-72'>
                New Messages Goes Here
            </div>
            <span className='bg-calm shadow-md rounded-full absolute top-0 right-0 h-2 w-2'></span>
        </div>
    )
}