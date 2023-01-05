import { Request, Response } from "express";

export default interface AbstractHandler {
  run(request: Request, response: Response): Promise<Response>;
}
