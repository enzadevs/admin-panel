import './globals.css'
import TopProgressBar from 'components/Functions/TopProgressBar'
import NavBar from 'components/Navigation/NavBar/NavBar'

export const metadata = {
    title: 'Admin Panel',
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
        <html className={exo2.className}>
            <body className='bg-white flex flex-col min-h-screen'>
                <TopProgressBar/>
                <main className=''>
                    <NavBar/>
                    {children}
                </main>
            </body>
        </html>
    )
}