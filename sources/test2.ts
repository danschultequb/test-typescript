import { Type } from "@everyonesoftware/base-typescript";
import { Test } from "./test";

/**
 * A type that can be used to make assertions during a test.
 */
export abstract class Test2 extends Test
{
    /**
     * Assert that the provided value is an instance of the provided {@link Type}.
     * @param value The value to check.
     * @param type The {@link Type} to check.
     * @param expression The expression that produced the value.
     * @param message An optional error message.
     */
    public abstract assertInstanceOf<T>(value: unknown, type: Type<T>, typeCheck?: (value: unknown) => value is T): asserts value is T;
}