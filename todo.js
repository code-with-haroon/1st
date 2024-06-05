let todos = [
    {title : "Title 1" , date : new Date() , id : "Unique ID " , isCompleted : false  },
    {title : "Title 2" , date : new Date() , id : "Unique ID " , isCompleted : false  },
    {title : "Title 3" , date : new Date() , id : "Unique ID " , isCompleted : false  },
] ; 

function ReadTodo() {
    console.log(todos)
}

const createTodo = () => {
    let user = {title : "Title 4" , date : new Date() , id: "Unique ID " , isCompleted: false  }; 
    todos.push(user)
    console.log(todos)
};

let updation ;
const updateTodo = () => {
    let updation = true ; 
    let mapUser = todos.map ((workingList , i ) => {
        if (workingList.title === "Title 2" ){
            return{...workingList , isCompleted : updation }
        } else{
            return workingList
        }
    })
    todos = mapUser ;
    console.log(todos)
}
const deleteTodo = () => {
        let filter = todos.filter( workingList =>  workingList.title !== "Title 3"  )
        todos = filter ; 
        console.log(todos) 
}

const ShowTable =() => {
    let tableStartingCode = '<div class="table-responsive"><table class="table">'
    let tableHead = '<thead><tr><th scope="col">#</th> <th scope="col">Title</th> <th scope="col">Description</th> <th scope="col">Date</th> <th scope="col">Status</th></tr></thead>'
    let tableEndingCode = '</table></div>'

    let tableBody = ""
    for (let i = 0; i < todos.length; i++) {
        tableBody += '<tr><th scope="row">' + (i + 1) + '</th><td>' + todos[i].title + '</td><td>' + todos[i].description + '</td><td>' + todos[i].date + '</td><td>' + todos[i].status + '</td></tr>'
    }

    let table = tableStartingCode + tableHead + '<tableBody>' + tableBody + '</tableBody>' + tableEndingCode;
    document.getElementById("oot").innerHTML = table;
}
