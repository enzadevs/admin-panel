import NextTopLoader from 'nextjs-toploader'

export default function TopProgressBar(){
    return(
        <NextTopLoader
            color='#3277ab'
            height={4}
            showSpinner={false}
        />
    )
}