const addBtn=document.getElementById("add-btn");
const inputBox=document.querySelector("#input_box");
// const taskContainer=document.querySelector("#tasks");
const listContainer=document.querySelector("#list-container")
const error1=document.querySelector("#error");
const countValue=document.querySelector(".count-value");


function addTask(){
    if(inputBox.value===""){
        error1.style.display="block";
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.append(li);
        let delete_icon=document.createElement("span");
        delete_icon.innerHTML="\u00d7";
        li.appendChild(delete_icon);
    }
    inputBox.value="";
    saveData();
}

 addBtn.addEventListener("click",addTask);

listContainer.addEventListener ("click",function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
   
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showlist(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showlist();