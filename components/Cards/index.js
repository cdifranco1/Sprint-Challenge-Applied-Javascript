// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios('https://lambda-times-backend.herokuapp.com/articles').then(res => console.log(res))


axios('https://lambda-times-backend.herokuapp.com/articles')
  .then((res) => Object.keys(res.data.articles).forEach((item) => {
      res.data.articles[item].map((index) => {
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.append(createCard(index))
      })
    })
  );


function createCard(obj){
  const container = document.createElement('div'),
        headline = document.createElement('div'),
        authorDiv = document.createElement('div'),
        imgContainer = document.createElement('div'),
        image = document.createElement('img'),
        authorName = document.createElement('span');

  container.classList.add('card');
  headline.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainer.classList.add('img-container');
  
  headline.textContent = obj.headline;
  image.src = obj.authorPhoto;
  authorName.textContent = `By: ${obj.authorName}`;

  imgContainer.appendChild(image);
  authorDiv.append(imgContainer, authorName);
  container.append(headline, authorDiv)

  return container;
};
