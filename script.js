document.querySelector("#green").addEventListener("click", function(e) { 
    let color = e.target.id //let dichiarazione della varibile in js

    body.style.backgroundColor = color
})