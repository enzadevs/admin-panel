import NextTopLoader from 'nextjs-toploader'

export default function TopProgressBar(){
    return(
        <NextTopLoader
            color='#000000'
            height={4}
            showSpinner={false}
        />
    )
}