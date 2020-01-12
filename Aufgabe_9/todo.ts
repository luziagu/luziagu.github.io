

var toDoList: string [] = ["Get ready for your exams", "Write your exams", "Relax"]; 

var todosDOMElement: HTMLElement;

window.addEventListener("load", function(): void {

    todosDOMElement = document.querySelector("#ToDo");
    toDoListFunction(); 

    var input: HTMLInputElement = document.querySelector(".AddTask");
    document.querySelector("#Add").addEventListener("click", function(): void {
        
        toDoList.push(input.value); 
        input.value = ""; 
        toDoListFunction(); 
    }); 

    input.addEventListener("keydown", function(e) {
        if (e.keyCode === 13) {
            toDoList.push(input.value);
            input.value = "";
            toDoListFunction();
        }
    });


});

function toDoListFunction(): void {


    document.querySelector(".TotalText").innerHTML = toDoList.length  + " in total"; 

    document.querySelector("#ToDo").innerHTML = "";
    

    for (let index: number = 0; index < toDoList.length; index++) {

        let todocontainer: HTMLElement = document.createElement("div");
        todocontainer.classList.add("todo");
        todocontainer.innerHTML += "<p>" + "<label class='container'><input type='checkbox'><span class='checkmark'></span></label>" + "<i class='far fa-circle'></i>" + " " + toDoList[index] + "<i class='far fa-trash-alt'></i>" + "</p>";
        
        todocontainer.querySelector(".fa-trash-alt").addEventListener("click", function(): void {
            console.log("ich wurde geklickt");
            toDoList.splice(index, 1);
            toDoListFunction();

        });
        todosDOMElement.appendChild(todocontainer);
    }

   
}








    



