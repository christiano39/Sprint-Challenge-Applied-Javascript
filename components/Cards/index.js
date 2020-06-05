// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

function cardMaker(headline, authorURL, author){
    const cardDiv = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const authorImgDiv = document.createElement('div')
    const authorImg = document.createElement('img')
    const authorSpan = document.createElement('span')

    cardDiv.classList.add('card')
    headlineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    authorImgDiv.classList.add('img-container')

    headlineDiv.textContent = headline
    authorImg.src = authorURL
    authorSpan.textContent = `By ${author}`

    cardDiv.appendChild(headlineDiv)
    cardDiv.appendChild(authorDiv)
    authorDiv.appendChild(authorImgDiv)
    authorDiv.appendChild(authorSpan)
    authorImgDiv.appendChild(authorImg)

    return cardDiv
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response)
        const bootstrapArticles = response.data.articles.bootstrap
        const javascriptArticles = response.data.articles.javascript
        const jqueryArticles = response.data.articles.jquery
        const nodeArticles = response.data.articles.node
        const technologyArticles = response.data.articles.technology

        const allArticles = bootstrapArticles.concat(javascriptArticles).concat(jqueryArticles).concat(nodeArticles).concat(technologyArticles)
        allArticles.forEach(article => {
            const headline = article.headline
            const authorURL = article.authorPhoto
            const author = article.authorName
            const card = cardMaker(headline, authorURL, author)
            cardsContainer.appendChild(card)
        })
    })
    .catch(err => {
        console.log(err)
    })