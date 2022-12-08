import { HttpMethods, HttpServer } from "../httpServer";
import { CreateTool } from "@framework/handlers/tool/createToolHandler";

export default class ToolRoutes {
  constructor(private httpServer: HttpServer) {}

  register() {
    const createTool = new CreateTool();

    this.httpServer.register(HttpMethods.POST, "/tools", createTool);
  }
}
