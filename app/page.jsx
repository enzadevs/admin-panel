import SignInContainer from 'components/Containers/SignInContainer'

export default function HomePage(){
    return(
        <div style={{backgroundImage: 'linear-gradient(135deg, rgb(153, 195, 224) 0%, rgb(38, 87, 126) 100%)'}} className='center h-screen w-full'>
            <SignInContainer/>
        </div>
    )
}