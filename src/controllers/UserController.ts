import {Request, Response} from "express";
import IController from "./ControllerInterface";

let data:any[] = [
    {id:1, name:"Musa"},
    {id:2, name:"Rafis"},
    {id:3, name:"Rahel"}
]

class UserController implements IController {
    index(req: Request, res: Response): Response {
        return res.send(data)
    }
    
    create(req: Request, res: Response): Response {
       const { id, name} = req.body;
       data.push({ id, name })
       return res.send("Data berhasi disimpan")
    }
    
    show(req: Request, res: Response): Response {
       const { id } = req.params; 
       let person = data.find( item => item.id == id)
       return res.send(person)
    }
    
    update(req: Request, res: Response): Response {
       const { id } = req.params
       const { name } = req.body
       let person = data.find( item => item.id == id)
       person.name = name
       return res.send("Data berhasil diupdate")
    }
    
    delete(req: Request, res: Response): Response {
        const { id } = req.params
        let person = data.filter( item => item.id != id)
        return res.send(person)
    }
    
}
export default new UserController();