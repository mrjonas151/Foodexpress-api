import { Request, Response } from "express";
import { FinishOrderService } from "../../services/Order/FinishOrderService";

class FinishOrderController{
    async handle(req: Request, res: Response){
        const { order_id } = req.body;

        const finishOrder = new FinishOrderService();

        const finish = await finishOrder.execute({
            order_id
        })

        return res.json(finish);
    }
}

export { FinishOrderController }