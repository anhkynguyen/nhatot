import { AppDataSource } from "../data-source";
import { User } from "../model/user";
import bcrypt from "bcrypt";

class UserService {
  private userRepository;
  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }
  getAllUser = async () => {
    let sql = `select * from user where role = 'user`;
    let users = await this.userRepository.query(sql);
    return users;
  };
  register = async (user) => {
    let checkUser = await this.userRepository.findOneBy({
      username: user.username,
    });
    if (checkUser) {
      return "Username already exists";
    }
    user.password = await bcrypt.hash(user.password, 10);
    return this.userRepository.save(user);
  };
}
export default new UserService();
