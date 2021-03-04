function createBigCard(article) {
    const parentDiv = document.createElement('div');
    parentDiv.classList = 'col-sm-8';

    const cardDiv = document.createElement('div');
    cardDiv.classList = 'card mt-4';

    const img = document.createElement('img');
    img.src = article.urlToImage;

    const cardBody = document.createElement('div');
    cardBody.classList = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.classList = 'card-title';

    const titleName = document.createTextNode(article.title);
    cardTitle.appendChild(titleName);

    const cardContent = document.createElement('p');
    cardContent.classList = 'card-text';

    const content = document.createTextNode(article.description);
    cardContent.appendChild(content);

    const button = document.createElement('a');
    button.classList = 'btn btn-primary';
    button.href = article.url;
    button.innerText = 'View More';

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(content);
    cardBody.appendChild(button);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    parentDiv.appendChild(cardDiv);

    return parentDiv;
}

function createSmallCard(article) {

    const cardDiv = document.createElement('div');
    cardDiv.classList = 'card mt-4';

    const img = document.createElement('img');
    img.src = article.urlToImage;

    const cardBody = document.createElement('div');
    cardBody.classList = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.classList = 'card-title';

    const titleName = document.createTextNode(article.title);
    cardTitle.appendChild(titleName);

    const cardContent = document.createElement('p');
    cardContent.classList = 'card-text';

    const content = document.createTextNode(article.description);
    cardContent.appendChild(content);

    const button = document.createElement('a');
    button.classList = 'btn btn-primary';
    button.href = article.url;
    button.innerText = 'View More';

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(content);
    cardBody.appendChild(button);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    return cardDiv;
}

fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=64b8cefdbfef47fabbfc04caaf2da7f9&pageSize=3')
    .then(response => {
        return response.json();
    })
    .then(data => {
        const covidNews = document.querySelector('#covidNews .row');
        const parentDiv = document.createElement('div');
        parentDiv.classList = 'col col-sm-4';


        const bigCard = createBigCard(data.articles[0]);
        const smallCardOne = createBigCard(data.articles[1]);
        const smallCardTwo = createBigCard(data.articles[2]);
        covidNews.appendChild(bigCard);
        parentDiv.appendChild(smallCardOne);
        parentDiv.appendChild(smallCardTwo);
        covidNews.appendChild(parentDiv);
    })