import { Test, TestRunner, TestSkip } from "../sources";

export function test(runner: TestRunner): void
{
    runner.testFile("testSkip.ts", () =>
    {
        runner.testFunction("create(boolean|undefined,string|undefined)", () =>
        {
            runner.test("with no arguments", (test: Test) =>
            {
                const skip: TestSkip = TestSkip.create();
                test.assertNotUndefinedAndNotNull(skip);
                test.assertTrue(skip.getShouldSkip());
                test.assertEqual(skip.getMessage(), "");
            });

            runner.test("with null shouldSkip", (test: Test) =>
            {
                const skip: TestSkip = TestSkip.create(null!);
                test.assertNotUndefinedAndNotNull(skip);
                test.assertTrue(skip.getShouldSkip());
                test.assertEqual(skip.getMessage(), "");
            });

            runner.test("with false shouldSkip", (test: Test) =>
            {
                const skip: TestSkip = TestSkip.create(false);
                test.assertNotUndefinedAndNotNull(skip);
                test.assertFalse(skip.getShouldSkip());
                test.assertEqual(skip.getMessage(), "");
            });

            runner.test("with true shouldSkip", (test: Test) =>
            {
                const skip: TestSkip = TestSkip.create(true);
                test.assertNotUndefinedAndNotNull(skip);
                test.assertTrue(skip.getShouldSkip());
                test.assertEqual(skip.getMessage(), "");
            });

            runner.test("with true shouldSkip and null message", (test: Test) =>
            {
                const skip: TestSkip = TestSkip.create(true, "");
                test.assertNotUndefinedAndNotNull(skip);
                test.assertTrue(skip.getShouldSkip());
                test.assertEqual(skip.getMessage(), "");
            });

            runner.test("with true shouldSkip and empty message", (test: Test) =>
            {
                const skip: TestSkip = TestSkip.create(true, "");
                test.assertNotUndefinedAndNotNull(skip);
                test.assertTrue(skip.getShouldSkip());
                test.assertEqual(skip.getMessage(), "");
            });

            runner.test("with true shouldSkip and non-empty message", (test: Test) =>
            {
                const skip: TestSkip = TestSkip.create(true, "hello");
                test.assertNotUndefinedAndNotNull(skip);
                test.assertTrue(skip.getShouldSkip());
                test.assertEqual(skip.getMessage(), "hello");
            });
        });
    });
}
test(TestRunner.create());