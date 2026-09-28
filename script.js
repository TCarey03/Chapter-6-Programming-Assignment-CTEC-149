fetch("https://freedictionaryapi.com/api/v1/entries/en/hello")
    .then(response => {
        if (!response.ok) {
            throw new Error("Response was not successful");
        }

        return response;
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
