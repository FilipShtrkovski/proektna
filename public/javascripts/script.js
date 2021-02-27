fetch('http://newsapi.org/v2/everything?q=tesla&from=2021-01-27&sortBy=publishedAt&apiKey=64b8cefdbfef47fabbfc04caaf2da7f9')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
    })