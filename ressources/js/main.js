const articleTitle = document.getElementById("title"); //recupera informações do arquivo html


fetch("https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10") //recupera informações da API1
    .then(response => response.json())
    .then(response => showArticle(response.jokes));


function showArticle(param) {
    for (var i = 0; i < param.length; i++) {
        let response = param[i];
        response = document.createElement("article");
    }
}
