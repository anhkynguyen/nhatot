"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor() {
        this.getAllUser = async () => {
            let sql = `select * from user where role = 'user`;
            let users = await this.userRepository.query(sql);
            return users;
        };
        this.register = async (user) => {
            let checkUser = await this.userRepository.findOneBy({
                username: user.username,
            });
            if (checkUser) {
                return "Username already exists";
            }
            user.password = await bcrypt_1.default.hash(user.password, 10);
            return this.userRepository.save(user);
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map