---
sidebar_position: 1
---

# Starting Blocks

## Initial Start

### Starting point

This block is a great place to start if you have forgotten the syntax for a test.

```js title="className.test.js"
describe('A block that groups related tests', () => {
  beforeAll(() => {});

  beforeEach(() => {});

  afterAll(() => {});

  afterEach(() => {});

  test('This is your actual test (fn can be async) Can set a timeout', () => {
    expect().toBe();
  });
});
```

## Mocking a class

Mocking a class if very useful tool to make sure you are only testing what you need and are not be dependent on other classes or data.

### Starting point

```js title="className.test.js"
const mockService = jest.fn();

jest.mock('Path to file/import', () => ({
  methodName: () => mockService(),
}));

test('Test where we do mock', () => {
  mockService.mockReturnValue(value);
  mockService.mockResolvedValue(value); // FOR ASYNC CALLS that are not awaited

  jest.clearAllMocks();
});
```
