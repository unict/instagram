//P320
document.addEventListener("DOMContentLoaded",
    function(e){
        let button=document.querySelector("input")
        button.addEventListener("input",
            function(e){
                console.log(e.target.value)
            })
    }
)
//let button=document.querySelector("input")
//button.addEventListener("input",
//function(e){
//        console.log(e.target.value)
//    }
//)
function numbering(n){
    for(let i=0;i<n;i++){
        console.log(i)
        }
    }