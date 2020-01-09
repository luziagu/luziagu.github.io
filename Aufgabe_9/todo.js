var toDoList = ["Get ready for NYE", "Make Dinner", "Clean the house"];
window.addEventListener("load", function () {
    toDoListFunction();
    var input = document.querySelector(".AddTask");
    document.querySelector("#Add").addEventListener("click", function () {
        toDoList.push(input.value);
        input.value = "";
        toDoListFunction();
    });
    input.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            toDoList.push(input.value);
            input.value = "";
            toDoListFunction();
        }
    });
});
function toDoListFunction() {
    document.querySelector(".TotalText").innerHTML = toDoList.length + " in total";
    document.querySelector("#ToDo").innerHTML = "";
    for (var index = 0; index < toDoList.length; index++) {
        document.querySelector("#ToDo").innerHTML += "<p>" + "<label class='container'><input type='checkbox'><span class='checkmark'></span></label>" + "<i class='far fa-circle'></i>" + " " + toDoList[index] + "<i class='far fa-trash-alt'></i>" + "</p>";
    }
}
function trashDelete() {
}
//# sourceMappingURL=todo.js.map