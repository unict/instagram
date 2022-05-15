
//P320
document.addEventListener("DOMContentLoaded",
    function(e){
        //let button=document.querySelector("input")
        //button.addEventListener("input",
        //    function(e){
        //        console.log(e.target.value)
        //    })
        
        //도큐먼트에 이벤트 추가
        document.addEventListener("keydown",
            function(e){
                console.log(e.key) //콘솔에서 입력되는 키 확인
                if (e.key === "q"){
                    alert("this is Q")
                }
            }
        )

        //일반개체에 이벤트 추가
        let keydown=document.querySelector("#keydown")
        keydown.addEventListener("keydown",
            function(e){
                console.log(e.target.value)
            })
        let change=document.querySelector("#change")
        change.addEventListener("change",
            function(e){
                console.log(e.target.value)
            })
        let input=document.querySelector("#input")
        input.addEventListener("input",
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

function doSomething(){
    let a=document.getElementById('InputA').value;
    let b=document.getElementById('InputB').value;
    document.getElementById('valueA').innerHTML=a;
    document.getElementById('valueB').innerHTML=b;
    document.getElementById('valueC').innerHTML=Number(a)+Number(b);
}

function whatTimeIsIt(){
    alert(new Date());
}

function red(e){
    e.target.style.backgroundColor="red"
    console.log(e)
}

function blue(e){
    e.target.style.backgroundColor="blue"
}
