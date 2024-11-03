import IUser from "../interfaces/user.interface";
import User from "../models/user.model";
import GenericRepository from "./generic.repository";

class UserRepository extends GenericRepository<IUser> {
  constructor() {
    super(User);
  }

  // create custom methods for user repository
  async findByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email });
  }

  async findByName(name: string): Promise<IUser | null> {
    return User.findOne({ name });
  }
}

export default UserRepository;