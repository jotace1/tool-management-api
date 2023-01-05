/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@domain/(.*)$": "<rootDir>/src/1-domain/$1",
    "^@business/(.*)$": "<rootDir>/src/2-business/$1",
    "^@controller/(.*)$": "<rootDir>/src/3-controller/$1",
    "^@framework/(.*)$": "<rootDir>/src/4-framework/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
  },
};
