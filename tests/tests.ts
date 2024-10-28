import { MochaTestRunner } from "@everyonesoftware/mocha-typescript";

import { TestRunner } from "../sources";

export function createTestRunner(): TestRunner
{
    return (MochaTestRunner.create() as unknown) as TestRunner;
}