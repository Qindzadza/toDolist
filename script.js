const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
// console.log("hello")
function add(){
    if(inputBox.value===''){
        alert("You must write something");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        // x gilaki gamosartavad
        let span=document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span)
    }
    inputBox.value="";
    
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}


function showList(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showList();