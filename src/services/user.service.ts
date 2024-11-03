import IUser from "../interfaces/user.interface";
import UserRepository from "../repository/user.repository";

class UserService {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data: IUser): Promise<IUser> {
    return this.userRepository.create(data);
  }

  async findAll(): Promise<IUser[]> {
    return this.userRepository.findAll();
  }

  async findById(id: string): Promise<IUser | null> {
    return this.userRepository.findById(id);
  }

  async update(id: string, data: IUser): Promise<IUser | null> {
    return this.userRepository.update(id, data);
  }

  async delete(id: string): Promise<IUser | null> {
    return this.userRepository.delete(id);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return this.userRepository.findByEmail(email);
  }

  async findByName(name: string): Promise<IUser | null> {
    return this.userRepository.findByName(name);
  }
}

export default UserService;
