import AbstractHandler from "@framework/handlers/abstractHandler";
import express from "express";

export interface HttpServer {
  register(method: string, url: string, handler: AbstractHandler): void;
  listen(port: number): void;
}
export enum HttpMethods {
  POST = "post",
  GET = "get",
  PUT = "put",
  DELETE = "delete",
}

export class ExpressHttpServer implements HttpServer {
  private app: any;

  constructor() {
    this.app = express();
  }

  register(method: string, url: string, handler: AbstractHandler): void {
    this.app[method](url, handler.run);
  }

  listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}
