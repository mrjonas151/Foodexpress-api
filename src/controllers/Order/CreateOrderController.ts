import { Request, Response } from "express";
import { CreateOrderService } from "../../services/Order/CreateOrderService";

class CreateOrderController{
    async handle( req: Request, res: Response ){
        const { table, name } = req.body;

        const createOrder = new CreateOrderService();

        const order = await createOrder.execute({
            table,
            name
        });

        return res.json(order);
    }
}

export { CreateOrderController }