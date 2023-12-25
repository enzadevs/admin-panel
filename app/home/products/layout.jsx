import Link from 'next/link'

export default function ProductsLayout({children}){
    return(
        <div className='flex flex-col gap-4 p-4'>
            {children}
        </div>
    )
}