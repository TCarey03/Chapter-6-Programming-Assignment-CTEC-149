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

-----------------------------

Phase 3

How does using the Fetch API to update only a portion of the page improve the User Experience compared to a traditional page reload?

Using the Fetch API allows the application to get new dictionary information without refreshing the entire webpage. Only the results section needs to be updated when the user searches for a word.

This makes the application feel faster and smoother because the user does not have to wait for the entire page to reload. The input field and other parts of the page can stay the same while the new definition is displayed.

---------------------------

Phase 4

Do you prefer using then() calls or the async/await syntax here? What is easier for you to read and work through?

I prefer the async/await syntax because I think it is easier to read. The code runs in a more straightforward order, so I can see that the program first waits for the fetch response and then waits for the JSON data.

The .then() syntax works, but it requires following the Promise chain from one then() to the next. With async/await, the code looks more like normal step-by-step instructions, which makes it easier for me to understand.
