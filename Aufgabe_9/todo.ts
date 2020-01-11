

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
    

    for (var index: number = 0; index < toDoList.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");


        document.querySelector("#ToDo").innerHTML += "<p>" + "<label class='container'><input type='checkbox'><span class='checkmark'></span></label>" + "<i class='far fa-circle'></i>" + " " + toDoList[index] + "<i class='far fa-trash-alt'></i>" + "</p>";
  
        document.querySelector(".fa-trash-alt").addEventListener("click", function(): void {
            console.log("ich wurde geklickt");
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }

    function deleteTodo(index: number): void {

        toDoList.splice(index, 1);

        toDoListFunction();

    }
}








    



