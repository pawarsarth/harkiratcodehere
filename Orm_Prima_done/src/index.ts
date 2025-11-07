import { PrismaClient } from "@prisma/client";

const client =new PrismaClient();


async function createOne()
{
        const res=await client.user.findFirst({
            where:{
                id:2
            },
            select:{
                usernmae:true,
                password:true
            }

        })
        console.log(res?.usernmae)

    //finding 
    //   const res=  await client.user.findFirst({
    //         where:{
    //             id:2
    //         }
            
    //     })
    //     console.log(res?.usernmae)

    // await client.user.update({
    //     where:{
    //         id:2
    //     },
    //     data:{
    //         usernmae:"sameer",
    //         password:"4567"
    //     }
    // })

//    await client.user.create({
//     data:{
//         usernmae:"sarthak",
//         password:"123",
//         age:23,
//         city:'mandsaur'
//     }
// })

// await client.user.delete({
//     where:{
//         id:1
//     }
// })
}
createOne()