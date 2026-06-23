function addTask() {

    var input = document.getElementById("taskInput");

    var task = input.value;

    if (task == "") {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");

    li.innerHTML = task;

    var button = document.createElement("button");

    button.innerHTML = "Delete";

    button.className = "deleteBtn";

    button.onclick = function () {
        li.remove();
    };

    li.appendChild(button);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}