import { HttpMethods, HttpServer } from "../httpServer";
import { CreateTool } from "@framework/handlers/tool/createToolHandler";
import { ListToolByUserId } from "@framework/handlers/tool/listToolsByUserIdHandler";
import { DeleteTool } from "@framework/handlers/tool/deleteToolHandler";

export default class ToolRoutes {
  constructor(private httpServer: HttpServer) {}

  register() {
    const createTool = new CreateTool();
    const listToolsByUser = new ListToolByUserId();
    const deleteTool = new DeleteTool();

    this.httpServer.register(HttpMethods.POST, "/tools", createTool);
    this.httpServer.register(
      HttpMethods.GET,
      "/toolsByUserId/:userId",
      listToolsByUser
    );
    this.httpServer.register(HttpMethods.DELETE, "/tools/:toolId", deleteTool);
  }
}
