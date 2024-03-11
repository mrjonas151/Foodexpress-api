import prismaClient from "../../prisma";

interface DetailRequest{
    order_id: string;
}

class DetailOrderService{
    async execute( { order_id }: DetailRequest){

        const orders = await prismaClient.item.findMany({
            where:{
                order_id: order_id
            },
            include:{ //incluindo no res tudo oq tem em prodduto e order pra detalhar melhor o pedido
                product: true,
                order: true,
            }
        })

        return orders;
    }
}

export { DetailOrderService }