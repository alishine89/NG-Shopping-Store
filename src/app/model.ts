export class Model {
    user;
    items;

    constructor () {
        this.user = "Ali Hamza";
        this.items = [new TodoItem("Job Abroad",false),
        new TodoItem("Buy Car",false),
        new TodoItem("Dummy123",true),
        new TodoItem("Health",false),
    ];

    }

}

export class    TodoItem {
    action;
    done;

    constructor(action, done){
        this.action = action;
        this.done = done;

    }

}
