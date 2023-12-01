function getTrweets() {
    fetch("/trweets")
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log(json)
        const trweet = json[0]

        const trweetsContainer = document.getElementById("trweets-container")
        
        json.forEach((trweets) => {
            const trweetsDiv = document.createElement("div")
            const headerTag = document.createElement("h1")
            const trweetTag = document.createElement("h3")
            const contentTag = document.createElement("p")
        
            headerTag.innerText = trweets.author
            trweetTag.innerText = trweets.tweet
            contentTag.innerText = trweets.likes

            trweetsDiv.appendChild(headerTag)
            trweetsDiv.appendChild(trweetTag)
            trweetsDiv.appendChild(contentTag)

            trweetsContainer.appendChild(trweetsDiv)
        })
    })
    .catch((error) => {
    console.log(error)
    })
}