import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient

// async function get(){
//     const user = await prisma.user.create({
//         data: {
//             fullName: 'Enza',
//             password: '1234',
//             phoneNumber: 'AHHHHHA'
//         }
//     })
//     console.log(user)
// }

export default async function TestPage(){
    return(
        <>
            OKOKOK!
        </>
    )
}