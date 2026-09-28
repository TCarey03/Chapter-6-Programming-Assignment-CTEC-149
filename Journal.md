Phase 1

How are you passing data from one then() call to another?

Data is passed from one then() call to another by returning a value from the previous then(). In my code, the first then() receives the response from fetch() and returns the response. The next then() can then use that response.

The response.json() method also returns a Promise. Once the JSON has been parsed, the resulting data is passed to the next then(), where I can use console.log(data) to see the dictionary information.

------------------------------

Phase 2

What does a Promise actually represent in this code?

A Promise represents the eventual result of an asynchronous operation. In this project, the Promise represents the result of requesting dictionary information from the API. The request takes some time, so the Promise lets the program continue while waiting for the response.

If the API is down or the URL is wrong, the request can fail. I use throw new Error() when the response is not okay, which causes the Promise chain to be rejected.

The .catch() method handles the error so I can display a clear error message instead of leaving the error unhandled. This makes it easier to understand what went wrong.
