document.addEventListener("click", function() {
    
    const clicker = document.querySelector("input");
    const make = document.querySelector(".dynamic-divs");
    
    let html = "";  
    
    for (let i = 0; i < clicker.value; i++ ){
        html += `<div>Number ${clicker.value}</div>`
    }
    
    make.innerHTML = html;
    
    console.log(html);
    console.log(clicker);
    console.log(clicker.value);
});

var button = document.querySelector(".reset");
console.log(button);

function callAfterButtonClick() {

    const reset = document.querySelector("input");
    reset.value = 0;

    console.log("This should reset");

};
button.addEventListener("click", callAfterButtonClick);
