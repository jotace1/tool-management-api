import { IError } from "@shared/iError";

export const userNotFoundError: IError = {
  code: "USR-001",
  message: "User not found in the database",
  shortMessage: "user_not_found",
};

export const passwordDoesNotMatch: IError = {
  code: "USR-002",
  message: "Your password does not match",
  shortMessage: "password_not_match",
};

export const userAlreadyExistsError: IError = {
  code: "USR-003",
  message: "User already exists in the database",
  shortMessage: "user_already_exists",
};
