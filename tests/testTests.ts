import { Test, TestRunner } from "../sources";

export function test(runner: TestRunner): void
{
    runner.testFile("test.ts", () =>
    {
        runner.testType(Test.name, () =>
        {
            runner.testFunction("create()", (test: Test) =>
            {
                const value: Test = Test.create();
                test.assertNotUndefinedAndNotNull(value);
            });
        });
    });
}
test(TestRunner.create());