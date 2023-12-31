interface UserRequest{
    name: string,
    email: string,
    password: string
}

class CreateUserService{
    async execute({name, email, password} : UserRequest){
        return { name: name }
    }
}

export {CreateUserService}