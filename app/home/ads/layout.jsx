export const metadata = {
    title: 'Реклама'
}

export default function AdsLayout({children}){
    return(
        <div className='flex flex-col gap-4 p-4 min-h-[80vh]'>
            <h1 className='text-xl font-bold'>Реклама</h1>
            {children}
        </div>
    )
}