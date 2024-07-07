import { Test, TestRunner } from "../sources";
import { createTestRunner } from "./tests";

export function test(runner: TestRunner): void
{
    runner.testFile("testRunner.ts", () =>
    {
        runner.testType(TestRunner.name, () =>
        {
            runner.testFunction("toString(TestRunner,unknown)", () =>
            {
                function toStringTest(value: unknown, expected: string): void
                {
                    runner.test(`with ${runner.toString(value)}`, (test: Test) =>
                    {
                        const testRunner: TestRunner = undefined!;
                        test.assertEqual(TestRunner.toString(testRunner, value), expected);
                    });
                }

                toStringTest(undefined, "undefined");
                toStringTest(null, "null");
                toStringTest(false, "false");
                toStringTest(true, "true");
                toStringTest(0, "0");
                toStringTest(-1, "-1");
                toStringTest(10, "10");
                toStringTest("", `""`);
                toStringTest([], "[]");
                toStringTest({}, "{}");
            });
        });
    });
}
test(createTestRunner());