

var toDoList: string [] = ["Get ready for NYE", "Make Dinner", "Clean the house"]; 


window.addEventListener("load", function(): void {


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
        document.querySelector("#ToDo").innerHTML += "<p>" + "<label class='container'><input type='checkbox'><span class='checkmark'></span></label>" + "<i class='far fa-circle'></i>" + " " + toDoList[index] + "<i class='far fa-trash-alt'></i>" + "</p>";
  
    }
}


function trashDelete (): void {
     
    

}






    



