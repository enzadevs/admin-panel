import Link from 'next/link'
import Image from 'next/image'
import AlemTilsimatLogo from 'public/assets/alem-tilsimat-logo.webp'

export default function Footer(){
    return(
        <footer className='bg-calm-50 border-t border-light flex flex-row items-center gap-4 mt-auto px-4 h-24'>
            <span className='text-calm-600 font-bold flex-row-center'>
                <p>{"2024. 'Admin Tools Panel'"}</p>
            </span>
            <Link href='https://alemtilsimat.com/#' className='bg-calm-600 rounded-lg flex-row-center py-2 px-4 ml-auto' target='_blank'>
                <Image
                    src={AlemTilsimatLogo}
                    alt='alem tilsimat logo'
                    className='h-10 w-10'
                    sizes='50vw'
                    priority='true'
                >
                </Image>
                <p className='text-white'>Älem Tilsimat</p>
            </Link>
        </footer>
    )
}