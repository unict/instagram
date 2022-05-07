///console.log("Java Scrip Test")
//alert("오늘 기분 어때?")
function numbering(n){
    for(let i=0;i<n;i++){
        console.log(i)
        }
    }
let button=document.querySelector("input")
button.addEventListener("input",
    function(e){
        console.log(e.target.value)
    }
)