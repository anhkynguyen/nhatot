declare class UserService {
    private userRepository;
    constructor();
    getAllUser: () => Promise<any>;
    register: (user: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
