

export default async function TestPage(){
    const response = await fetch('https://api.100haryt.com.tm/api/category_list')
    const data = await response.json()
    const subCatalogs = data.flatMap(item => item.sub_categories).filter(item => item)

    return(
        <div>
            {data.map(item => {
                return(
                    <div key={item.id}>
                        
                    </div>
                )
            })}
            {/* {subCatalogs.map(item => {
                return(
                    <>
                        {item.sc_name_tm}
                    </>
                )
            })} */}
        </div>
    )
}