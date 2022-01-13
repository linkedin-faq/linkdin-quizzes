import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  preset: "ts-jest",
};
export default config;
