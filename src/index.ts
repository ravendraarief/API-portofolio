import express, {Request,Response,Application, request} from 'express';
import dotenv  from "dotenv"
import morgan from "morgan"
import compression from "compression"
import helmet from "helmet"
import cors from "cors"
dotenv.config()
const BASEURL = "/api/v1"

// Routers
import UserRoutes from "./routers/UserRoutes";
import BookRoutes from './routers/BookRoutes';

class App {
  public app:Application

  constructor(){
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected plugins():void {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes():void {
    this.app.get("/", (req:Request, res:Response):void => {
      res.send("Hello Typescript with Node.js!")
    });
    this.app.use(BASEURL+"/users", UserRoutes);
    this.app.use("/books", BookRoutes);
  }
}

const PORT:Number = 8000;
const app = new App().app;
app.listen(PORT, ():void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
})
