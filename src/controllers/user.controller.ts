import { Request, Response } from "express";
import IUser from "../interfaces/user.interface";

import UserService from "../services/user.service";

class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async create(req: Request, res: Response) {
    try {
      const data: IUser = req.body;
      const user = await this.userService.create(data);
      res.status(201).json(user);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const users = await this.userService.findAll();
      res.status(200).json(users);
    } catch (error) {
      throw new Error(error as string);
    }
  }
}

export default UserController;