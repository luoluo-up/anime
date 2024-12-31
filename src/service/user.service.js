const UserModel = require("../model/user.model");
class UserService {
  async createUser(username, password) {
    const res = await UserModel.create({
      username,
      password,
      create_time: new Date().toLocaleString(),
    });
    return res;
  }
}

module.exports = new UserService();
