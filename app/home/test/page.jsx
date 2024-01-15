export default async function TestPage(){
    const response = await fetch('http://localhost:5000/products/')
    // const response = await fetch ('http://localhost:5000/products/5a342b40-e881-4562-aeb8-e0a1c2226201')
    const data = await response.json()

    return(
        <div>
            <h1 className='text-2xl font-bold'>Test</h1>
            {data.map(item =>{
                return(
                    <p key={item.id}>{item.title}</p>
                )
            })}
            {/* {data.title} */}
        </div>
    )
}