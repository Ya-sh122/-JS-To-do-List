const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Khali he Andhe !")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";  //after add task input panel was clear(empty)
    saveData(); // call savedata function for save changes
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//function for save data 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//Display data when open website again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();                         