# cyclic-maps

Algorithm finds the cycles inside a `Map`.

For example, in

```JS
new Map([[5, 1], [3, 4], [2, 5], [4, 3], [6, 6], [1, 2]])
```

It will find the next cycles:

```JS
[
  new Map([[5, 1], [1, 2], [2, 5]]),
  new Map([[3, 4], [4, 3]]),
  new Map([[6, 6]])
]
```

## How to run

This project is supposed to only run tests.

1. Install dependencies

    ```PowerShell
    npm install
    ```

2. Run the tests

    ```PowerShell
    npm run test
    ```

3. If you want to extend the project, you may want to lint your code:

    ```PowerShell
    npm run lint
    ```
