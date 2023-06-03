import userService from "../service/userService";
import { Request, Response } from "express";

class UserController {
  private userServices;
  constructor() {
    this.userServices = userService;
  }
  getAllUser = async (req: Request, res: Response) => {
    try {
      let users = await this.userServices.getAllUser();
      return res.status(200).json(users);
    } catch (e) {
      res.status(500).json(e.message);
    }
  };

  register = async (req: Request, res: Response) => {
    try {
      let user = await this.userServices.register(req.body);
      console.log(req.body);
      return res.status(201).json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  };
}
export default new UserController();
