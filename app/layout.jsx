import './globals.css'
import TopProgressBar from 'components/Functions/TopProgressBar'

export const metadata = {
    title: 'Älem Tilsimat E-Commerce Tools',
    description: 'E-Commerce Admin Panel Tools',
    name: 'viewport', 
    content:'width=device-width, initial-scale=1',
}

import {Exo_2} from 'next/font/google'

const exo2 = Exo_2({
    subsets: ['latin','cyrillic'],
    display: 'swap'
})

export default function RootLayout({children}){
    return(
        <html lang='rus' className={exo2.className} suppressHydrationWarning>   
            <body className='bg-white flex flex-col min-h-screen'>
                <TopProgressBar/>
                {children}
            </body>
        </html>
    )
}