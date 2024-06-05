let usersEmail = [];
let userPassword = [];

let email;
let password;

function registration() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    
    if (!email || !password) {
        alert("Enter both Email and Password");
        return;
    }
    
    if (usersEmail.includes(email)) {
        alert("Your Email is already Registered");
        return;
    }else{
        usersEmail.push(email);
        userPassword.push(password);
        alert("YOur Email has been registered")
    }
    
    
    localStorage.setItem("usersEmail", JSON.stringify(usersEmail));
    localStorage.setItem("userPassword", JSON.stringify(userPassword));
    
    console.log("Registered Email:", email);
    console.log("Registered Password:", password);
}

const loginCheck = () => {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    usersEmail = JSON.parse(localStorage.getItem("usersEmail")) || [];
    userPassword = JSON.parse(localStorage.getItem("userPassword")) || [];
    
    
    if (usersEmail.includes(email) && userPassword.includes(password)) {
        alert("You are successfully logged in");
    } else {
        alert("Incorrect Email or Password. Please try again or Register first.");
    }
    window.location.href="./todo.html"
};
