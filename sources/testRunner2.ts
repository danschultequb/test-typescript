
import { TestRunner } from "./testRunner";

/**
 * A type that can be used to run tests.
 */
export abstract class TestRunner2 extends TestRunner
{
    /**
     * Add the provided {@link matchFunction} and {@link toStringFunction} to this
     * {@link TestRunner}.
     * @param matchFunction The function that will be used to see if a value matches the
     * {@link toStringFunction}. @param toStringFunction The function that will convert a value to a
     * {@link String}.
     */
    public abstract addToStringFunction<T>(matchFunction: (value: unknown) => value is T, toStringFunction: (value: T) => string): this;
}