import SideBar from 'components/Navigation/SideBar/SideBar'

export default function HomeLayout({children}){
    return(
        <div>
            <SideBar>
                {children}
            </SideBar>
        </div>
    )
}