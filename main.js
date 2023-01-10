let tasks = [];




let button=document.querySelector('button')
let getForm=document.forms[0]
button.addEventListener('click',addTask)

function addTask(e){
    e.preventDefault()
    let takeInput=document.getElementById('new-task').value
    console.log(takeInput)
//check that the input is not empty,
    if(takeInput.length==0 ){
        alert('Le  champ est vide')
    }else{

// then add it to the array (ie. add the text of the task)
        tasks.push(takeInput)



        let listeAdd=document.createElement("li");

//a “X” button. Use font awesome for the “X” button.
        let boutton0=document.createElement("button");
        let checkBox=document.createElement("input");
	    let label=document.createElement("label");
        boutton0.textContent="X";
        label.innerText=takeInput;
        checkBox.type="checkbox";
//an input type="checkbox". The label of the input is the task added by the user.
        listeAdd.appendChild(boutton0);
        listeAdd.appendChild(checkBox);
	    listeAdd.appendChild(label);
//then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
        var taskHolder=document.getElementById("incomplete-tasks")
	    taskHolder.appendChild(listeAdd);
    } 
}