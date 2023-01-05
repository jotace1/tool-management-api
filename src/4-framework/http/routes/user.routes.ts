import { CreateUser } from "@framework/handlers/user/createUserHandler";
import { HttpMethods, HttpServer } from "../httpServer";

export default class UserRoutes {
  constructor(private httpServer: HttpServer) {}

  register() {
    const createUser = new CreateUser();

    this.httpServer.register(HttpMethods.POST, "/user", createUser);
  }
}
