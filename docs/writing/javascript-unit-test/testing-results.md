---
sidebar_position: 3
---

# Testing Results

## Testing calls with certain values

### Testing for anything

`expect.anything()` matches anything but null or undefined. Used for if you want to check that a mock function is called with a non-null argument:

```js
const mock = jest.fn();
expect(mock).toHaveBeenCalledWith(expect.anything());
```

### Testing if object contains certain fields

When there is a large object and you only need to test for certain fields in the object you can use `expect.objectContaining()`.

```js
const mock = jest.fn();
expect(mock).toHaveBeenCalledWith(
  expect.objectContaining({ field: 1, otherField: 0 })
);
expect(mock).toHaveBeenCalledWith(
  expect.objectContaining({
    x: expect.anything(),
    y: expect.any(Number),
  })
);
```

## Error Testing

### Testing exception is thrown

```js
expect(async () => {
  await methodTesting(input);
}).rejects.toThrow();

try {
  await methodTesting(input);
} catch (err) {
  expect(err);
}
```
