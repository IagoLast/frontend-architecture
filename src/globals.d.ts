import { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

/**
 * Extend vitest Assertion interface with @testing-library/jest-dom matchers
 */
declare module 'vitest' {
	interface Assertion<T> extends jest.Matchers<void, T>, TestingLibraryMatchers<T, void> {}
}
