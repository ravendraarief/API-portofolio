import { Router, Request, Response } from "express";
import IRouter from "./RouteInterface";

class BookRoutes implements IRouter {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }
    
    public routes(): void {
        this.router.get("/",(req:Request, res:Response)=>{
            res.send("Endpoint Books");
        });
        this.router.post("/add",(req:Request, res:Response)=>{
         res.send(req.body);
     });
    }
 }
 
 export default new BookRoutes().router;