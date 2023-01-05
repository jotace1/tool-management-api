import "reflect-metadata";
import { CreateUserUseCase } from "./createUserUseCase";
import { IHashService } from "@business/services/iHashService";
import { IUserRepository } from "@business/repository/userRepository";
import { InputCreateUserDto } from "@business/dto/user/createUserDto";
import { right } from "@shared/either";
import { userAlreadyExistsError } from "@business/modules/errors/user";
import { assert } from "console";

describe("CreateUserUseCase", () => {
  describe("when email is already in use", () => {
    it("should return left with userAlreadyExistsError", async () => {
      const userRepository = jest.createMockFromModule<IUserRepository>(
        "@business/repository/userRepository"
      );

      const hashService = jest.createMockFromModule<IHashService>(
        "@business/services/iHashService"
      );

      const createUserUseCase = new CreateUserUseCase(
        userRepository,
        hashService
      );

      // Arrange
      const input: InputCreateUserDto = {
        name: "John Doe",
        email: "test@test.com",
        password: "password",
      };

      userRepository.findByEmail = jest.fn().mockResolvedValue(right(input));

      // Act
      const result = await createUserUseCase.exec(input);

      // Assert
      expect(result.isLeft()).toBe(true);
      expect(result.value).toEqual(userAlreadyExistsError);
      assert(userRepository);
    });
  });
});
