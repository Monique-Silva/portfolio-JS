function createElement() {
    let container = document.getElementById("container_articles") //identifica o id no html onde eu quero colocar a info
    let article = document.createElement("article") //cria uma baliza article
    let h2 = document.createElement("h2") //cria uma baliza h2
    let p = document.createElement("p") //cria uma baliza p
    article.appendChild(h2) //diz que h2 é filha de article (sistema boneca russa)
    article.appendChild(p) //diz que p é filha de article também
    container.appendChild(article) //diz que article é filha de container (lembrar que aqui falamos da variável, então evitar as aspas)
    return { "container": container, "article": article, "h2": h2, "p": p }
}

//itération 3
function addArticles(data) { //cria uma função para adicionar um artigo com os dados da API
    for (let i = 0; i < data.length; i++) { //cria um loop pra criar um artigo a cada vez que percorre um novo elemento da tabela
        const elementCreated = createElement();
        elementCreated.h2.textContent = data[i].setup //identifica o elemento setup da tabela no json e imprime no h2
        elementCreated.p.textContent = data[i].delivery //identifica o elemento delivery da tabela no json e imprime no p
    }
}

function fetchAPI() {
    let url = "https://v2.jokeapi.dev/joke/Any?lang=fr&amount=20";
    fetch(url) //vai lá na url buscar a API
        .then(response => response.json()) //cria uma promessa de que quando conseguir pegar as informações, coloca num modelo json
        .then(data => addArticles(data.jokes)) //cria uma promessa de pegar os dados referentes a jokes na API e chama a função pra executar a leitura da tabela e adicionar dos artigos
}

//itération 4
function openMenu() {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("navItems");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
}

//itération 4
function createButton() {
    let main = document.querySelector("main");
    let divButton = document.getElementById("btn__article");
    let newDiv = document.createElement("div");
    newDiv.className = "btn__text";
    let button = document.createElement("button");
    button.id = "btn__add;"
    button.className = "btn__main";
    main.appendChild(newDiv);
    newDiv.appendChild(button);
    button.textContent = "Ajouter un article";
}

function addSingleArticle() {
    const elementCreated = createElement();
    elementCreated.h2.textContent =
        elementCreated.p.textContent = 
}

burger.addEventListener("click", openMenu);
const btnWatchArticles = document.getElementById("btn__article");
btnWatchArticles.addEventListener("click", fetchAPI);
createButton();
const btnAddArticle = document.getElementById("btn__add");
btnAddArticle.addEventListener("submit", addSingleArticle);
