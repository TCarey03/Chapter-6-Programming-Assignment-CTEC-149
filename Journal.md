Phase 1

How are you passing data from one then() call to another?

Data is passed from one then() call to another by returning a value from the previous then(). In my code, the first then() receives the response from fetch() and returns the response. The next then() can then use that response.

The response.json() method also returns a Promise. Once the JSON has been parsed, the resulting data is passed to the next then(), where I can use console.log(data) to see the dictionary information.
