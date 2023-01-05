import "reflect-metadata";
import "dotenv/config";
import "@framework/ioc/inversify.config";
import { ExpressHttpServer } from "@framework/http/httpServer";
import ToolRoutes from "@framework/http/routes/tool.routes";
import UserRoutes from "@framework/http/routes/user.routes";

const httpServer = new ExpressHttpServer();

const toolRoutes = new ToolRoutes(httpServer);
const userRoutes = new UserRoutes(httpServer);

toolRoutes.register();
userRoutes.register();

httpServer.listen(8080);
