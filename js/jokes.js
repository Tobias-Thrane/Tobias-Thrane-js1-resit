const url = "https://official-joke-api.appspot.com/random_ten"

async function getJoke(){
    const res = await fetch(url)
    const results = await res.json();

    console.log(results);
    console.log(results[0].type);
    console.log(results[0].setup);
    console.log(results[0].punchline);

    firstJoke(results);
    secondJoke(results);
    thirdJoke(results);
    fourthJoke(results);
    fifthJoke(results);
}

getJoke();

function firstJoke(joke) {

    const types = document.querySelector(".type0");
    let html = "";  
    html += `<h4>${joke[0].type}</h4>`;
    types.innerHTML = html;

    const setup = document.querySelector(".setup0");
    let html1 = "";
    html1 += `<p>${joke[0].setup}</p>`;
    setup.innerHTML = html1;
    
    const punchline = document.querySelector(".punchline0");
    let html2 = "";
    html2 += `<p>${joke[0].punchline}<p>`;
    punchline.innerHTML = html2;
    
}

function secondJoke(joke) {

    const types = document.querySelector(".type1");
    let html = "";  
    html += `<h4>${joke[1].type}</h4>`;
    types.innerHTML = html;

    const setup = document.querySelector(".setup1");
    let html1 = "";
    html1 += `<p>${joke[1].setup}</p>`;
    setup.innerHTML = html1;
    
    const punchline = document.querySelector(".punchline1");
    let html2 = "";
    html2 += `<p>${joke[1].punchline}<p>`;
    punchline.innerHTML = html2;
    
}

function thirdJoke(joke) {

    const types = document.querySelector(".type2");
    let html = "";  
    html += `<h4>${joke[2].type}</h4>`;
    types.innerHTML = html;

    const setup = document.querySelector(".setup2");
    let html1 = "";
    html1 += `<p>${joke[2].setup}</p>`;
    setup.innerHTML = html1;
    
    const punchline = document.querySelector(".punchline2");
    let html2 = "";
    html2 += `<p>${joke[2].punchline}<p>`;
    punchline.innerHTML = html2;
    
}

function fourthJoke(joke) {

    const types = document.querySelector(".type3");
    let html = "";  
    html += `<h4>${joke[3].type}</h4>`;
    types.innerHTML = html;

    const setup = document.querySelector(".setup3");
    let html1 = "";
    html1 += `<p>${joke[3].setup}</p>`;
    setup.innerHTML = html1;
    
    const punchline = document.querySelector(".punchline3");
    let html2 = "";
    html2 += `<p>${joke[3].punchline}<p>`;
    punchline.innerHTML = html2;
    
}

function fifthJoke(joke) {

    const types = document.querySelector(".type4");
    let html = "";  
    html += `<h4>${joke[4].type}</h4>`;
    types.innerHTML = html;

    const setup = document.querySelector(".setup4");
    let html1 = "";
    html1 += `<p>${joke[4].setup}</p>`;
    setup.innerHTML = html1;
    
    const punchline = document.querySelector(".punchline4");
    let html2 = "";
    html2 += `<p>${joke[4].punchline}<p>`;
    punchline.innerHTML = html2;
    
}