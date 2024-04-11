
const addUserButton = document.getElementById("addUserButton");

let i = 1;

class User{
    constructor(id, name, username, email){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email; 
    }
}

class Repository{
    constructor(){
        this.users = [];
    }

    createUser({id, name, username, email}){
        const newUser = new User(id, name, username, email);
        this.users.push(newUser);
    }
}

const repository = new Repository();

const refresh = () => {
    const usersContainer = document.getElementById("usersContainer");
    usersContainer.innerHTML = "";

    const users = repository.users;

    const htmlUsers = users.map((User) => {
        const name = document.createElement("h3");
        const email = document.createElement("p");

        name.innerHTML = User.name;
        email.innerHTML = User.email;

        const card  = document.createElement("div");
        card.appendChild(name);
        card.appendChild(email);

        return card;
    });

    htmlUsers.forEach(card => {
        usersContainer.appendChild(card);
    });
};

const addUser = () => {
    if (i>10) return alert("NO HAY MAS USUARIOS");
    $.get(`https://jsonplaceholder.typicode.com/users/${i}` , (data, status) => {
    i++;
    repository.createUser(data)
    refresh();
});
};

addUserButton.addEventListener("click", addUser);