// Class defines what it is and a constructor actually builds it

class Task {//custom class declared
  done: boolean = false;

  constructor(public description: string, public priority: string){}//constructor builds it.

//method defined inside the class
  markDone() {
    this.done = true;
  }
}

var tasks: Task[] = [];// array
tasks.push(new Task('Do the dishes.', 'Medium')); //pushing into that array.
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));

tasks[0].markDone();


for(var task of tasks){ //For Loop
  console.log(task);
}


console.log(tasks[0].description);// display specific description
