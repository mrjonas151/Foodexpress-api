import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export default prismaClient;

//com o prisma client, podemos acessar os models do BD e fazer o crud