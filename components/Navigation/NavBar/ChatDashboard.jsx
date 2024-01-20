import Link from 'next/link'
import {IoChatbubbleEllipsesOutline} from 'react-icons/io5'

export default function ChatDashboard(){
    return(
        <Link href='/home/chat' className='bg-calm-50 icons-wrapper relative center transition hover:text-calm-600'>
            <IoChatbubbleEllipsesOutline className='icons'/>
            {/* <span className='bg-calm rounded-full absolute top-0 right-0 h-2 w-2'></span> */}
        </Link>
    )
}