import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/assets/logo.png'

export default function LeftSide(){
    return(
        <Link href='/' className='rounded-xl flex-row-center gap-2 transition px-2 h-10 w-[288px]'>
            <Image
                src={Logo}
                alt='logo of admin tools'
                height={34}
                width={34}
            >
            </Image>
            <p className='text-2xl font-bold'>Admin Tool</p>
        </Link>
    )
}