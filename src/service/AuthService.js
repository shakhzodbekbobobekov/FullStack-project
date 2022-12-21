import axios from "./api";

const AuthService = {
  async userRegister(user) {
    const response = await axios.post("/users", { user });
    return response;
  },
  //   async userLogin() {
  //     const response = await axios.post("/users/Login");
  //     return response;
  //   },
  //   async getUser() {
  //     const response = await axios.get("/users");
  //     return response;
  //   },
};

export default AuthService;
