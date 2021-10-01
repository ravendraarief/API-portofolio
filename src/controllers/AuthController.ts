import {Request, Response} from "express";


class AuthController {
    index(req: Request, res: Response): Response {
        return res.send("data")
    }
    
    create(req: Request, res: Response): Response {
        return res.send("data")
    }
    
}
export default new AuthController();