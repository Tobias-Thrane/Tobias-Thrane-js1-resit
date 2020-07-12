fetch("https://official-joke-api.appspot.com/random_joke")
  .then(response => response.json())
  .then(data => console.log(data));

fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
    return response.json();
    })
    .then((data) => {
        
        console.log(data.type);
        console.log(data.setup);
        console.log(data.punchline);

        getType(data)

});

function getType(data) {

    const make = document.querySelector(".type");
    let html = "";  
    html += `<h2 class="type">${data.type}</h2>
    <div class="joke setup"><p>${data.setup}</p></div>
    <div class="joke punchline"><p>${data.punchline}</p></div>`;
    make.innerHTML = html;
};
