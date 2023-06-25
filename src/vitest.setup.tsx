import server from '@apto-payments/test-server';
import '@apto-payments/test-server-matchers';

// @ts-expect-error test-server uses jest.fn which is equivalent to vitest's spy
global.jest = vi;

/**
 * Start the test-server at the beginning
 */
beforeAll(() => {
	server.listen({ onUnhandledRequest: 'warn' });
});

/**
 * Reset every test-server handler after each test
 */
afterEach(() => {
	vi.restoreAllMocks();
	server.resetHandlers();
});

/**
 * Close the server once tests are finished
 */
afterAll(() => server.close());

// Extend vitest with jest-dom
import { Headers, Request, Response, fetch } from '@remix-run/web-fetch';
import '@testing-library/jest-dom';
import { AbortController as NodeAbortController } from 'abort-controller';
import { TextDecoder as NodeTextDecoder, TextEncoder as NodeTextEncoder } from 'util';
import { vi } from 'vitest';

// @ts-expect-error - https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

if (!globalThis.fetch) {
	// @ts-expect-error lib.dom.d.ts expects `fetch(Request | string, ...)` but the web fetch API allows a URL
	globalThis.fetch = fetch;
	// @ts-expect-error lib.dom.d.ts doesn't allow a URL to the Request constructor
	globalThis.Request = Request;
	// @ts-expect-error web-std/fetch Response does not currently implement Response.error()
	globalThis.Response = Response;
	globalThis.Headers = Headers;
}

if (!globalThis.AbortController) {
	// @ts-expect-error lib does not allow AbortController to be constructed
	globalThis.AbortController = NodeAbortController;
}

if (!globalThis.TextEncoder || !globalThis.TextDecoder) {
	globalThis.TextEncoder = NodeTextEncoder;
	// @ts-expect-error lib does not allow TextDecoder to be constructed
	globalThis.TextDecoder = NodeTextDecoder;
}
