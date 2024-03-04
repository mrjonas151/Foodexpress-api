import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest{
    name: string,
    email: string,
    password: string
}

class CreateUserService{
    async execute({name, email, password} : UserRequest){

        //Verificar se ele enviou o email
        if(!email){
            throw new Error("E-mail incorreto!")
        }

        //Verificar se o e-mail já está cadastrado no banco/plataforma
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("E-mail já cadastrado!")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash
            },
            select:{ //escolhendo o que devolver, no caso é seguro que a senha nao se devolva para o dev
                id: true, 
                name: true,
                email: true,
            }
        })

        return user;
    }
}

export {CreateUserService}