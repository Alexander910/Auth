import { User } from "./users.js";

export default class UserService {
    async createUser(userData: { name: string; email: string; password: string }) {

        const user = await User.create(userData);
        return user;
    }

    async getCurrentUser(userId: string) {
        const user = await User.findById(userId);
        return user;
    }
}