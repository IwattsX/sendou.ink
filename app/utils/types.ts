/**
 * Asserts that a code path is unreachable by accepting a value of type `never`.
 * This function is useful for exhaustive checks in switch statements or discriminated unions.
 * If called, it throws an error with a message containing the unexpected value.
 *
 * @param x - The value that should never occur (of type `never`).
 * @throws {Error} Throws an error indicating an unexpected value was encountered.
 */
export function assertUnreachable(x: never): never {
	throw new Error(
		`Didn't expect to get here. Unexpected value: ${JSON.stringify(x)}`,
	);
}

/** @link https://stackoverflow.com/a/69413184 */
export const assertType = <A, _B extends A>() => {};

export type Unpacked<T> = T extends (infer U)[]
	? U
	: T extends (...args: unknown[]) => infer U
		? U
		: T extends Promise<infer U>
			? U
			: T;

export type Nullish<T> = T | null | undefined;

export type Unwrapped<T extends (...args: any) => any> = Unpacked<
	Awaited<ReturnType<T>>
>;

export type UnwrappedNonNullable<T extends (...args: any) => any> = NonNullable<
	Unwrapped<T>
>;
