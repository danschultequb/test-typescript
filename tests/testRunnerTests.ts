import { MochaTestRunner, Test, TestRunner } from "../sources";

export function test(runner: TestRunner): void
{
    runner.testFile("testRunner.ts", () =>
    {
        runner.testType(TestRunner.name, () =>
        {
            runner.testFunction("create()", (test: Test) =>
            {
                const testRunner: TestRunner = TestRunner.create();
                test.assertNotUndefinedAndNotNull(testRunner);
                test.assertTrue(testRunner instanceof MochaTestRunner);
            });
        });
    });
}
test(TestRunner.create());