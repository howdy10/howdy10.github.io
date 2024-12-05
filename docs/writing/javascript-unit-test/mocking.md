---
sidebar_position: 2
---

# Mocking a class

Mocking a class if very useful tool to make sure you are only testing what you need and are not be dependent on other classes or data.

### Starting point

```js title="className.test.js"
const mockService = jest.fn();

jest.mock('Path to file/import', () => ({
  methodName: () => mockService(),
}));

jest.mock('This was needed to check if mock was called with values', () => ({
  methodName: (...args) => mockService(..args),
}));
```

[jest.mock(moduleName, factory, options)](https://jestjs.io/docs/jest-object#jestmockmodulename-factory-options)

[jest.fn(implementation?)](https://jestjs.io/docs/jest-object#jestfnimplementation)

### Mocking the return

You are able to set the return value when the the mock method is called.

```js title=''
mockService.mockReturnValue(value);
mockService.mockResolvedValue(value); FOR ASYNC CALLS that are not awaited

// You can also chain different return values if the mock method is called multiple times in the test
mockService.mockReturnValueOnce(value).mockReturnValueOnce(value);
mockService.mockResolvedValueOnce(value).mockResolvedValueOnce(value); FOR ASYNC CALLS that are not awaited
```

### Testing calls to a mock service

You can also test how many times a mocked class was called, and what it was called with.

```js title
expect(mockService).toHaveBeenCalledTimes(x);
expect(mockService).toHaveBeenCalledWith('Value');
expect(mockService).toHaveBeenLastCalledWith('Value');

//You can use an expect.anything() for extra params you don't need to validate
expect(mockService).toHaveBeenCalledWith('Value', expect.anything());

//You can use expect.objectContaining() for testing object has certain properties
expect(mockService).toHaveBeenCalledWith(
  expect.objectContaining({ field: 1, otherField: 0 })
);

jest.clearAllMocks();
```

[jest.clearAllMocks()](https://jestjs.io/docs/jest-object#jestclearallmocks)
:::tip[Clear out your mocks]
You should always clear out the number of calls if you are testing for number of calls in multiple tests. This is a good candidate for the afterEach() section.
:::
