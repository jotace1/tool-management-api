import "reflect-metadata";
import "dotenv/config";
import "@framework/ioc/inversify.config";
import { ExpressHttpServer } from "@framework/http/httpServer";
import ToolRoutes from "@framework/http/routes/tool.routes";

const httpServer = new ExpressHttpServer();

const toolRoutes = new ToolRoutes(httpServer);

toolRoutes.register();

httpServer.listen(8080);
