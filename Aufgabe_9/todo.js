var toDoList = ["Get ready for your exams", "Write your exams", "Relax"];
var todosDOMElement;
window.addEventListener("load", function () {
    todosDOMElement = document.querySelector("#ToDo");
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
    var _loop_1 = function (index) {
        var todocontainer = document.createElement("div");
        todocontainer.classList.add("todo");
        todocontainer.innerHTML += "<p>" + "<label class='container'><input type='checkbox'><span class='checkmark'></span></label>" + "<i class='far fa-circle'></i>" + " " + toDoList[index] + "<i class='far fa-trash-alt'></i>" + "</p>";
        todocontainer.querySelector(".fa-trash-alt").addEventListener("click", function () {
            console.log("ich wurde geklickt");
            toDoList.splice(index, 1);
            toDoListFunction();
        });
        todosDOMElement.appendChild(todocontainer);
    };
    for (var index = 0; index < toDoList.length; index++) {
        _loop_1(index);
    }
}
//# sourceMappingURL=todo.js.map