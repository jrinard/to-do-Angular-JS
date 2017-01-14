// Class defines what it is and a constructor actually builds it
var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    } //constructor builds it.
    //method defined inside the class
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var tasks = []; // array
tasks.push(new Task('Do the dishes.', 'Medium')); //pushing into that array.
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));
tasks[0].markDone();
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    console.log(task);
}
console.log(tasks[0].description); // display specific description
