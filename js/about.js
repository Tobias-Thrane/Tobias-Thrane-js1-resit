function reverse() {

    const change = document.querySelector(".about");
    
    let html = "";

    html += `   <p>
                    This is paragraph 2.
                </p>
                <p>
                    This is the first paragraph.
                </p>`;
    change.innerHTML = html;
    
    console.log(change);
};

reverse()