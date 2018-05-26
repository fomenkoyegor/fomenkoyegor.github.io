const btnGet = document.getElementById("btnGet");
const lists = document.getElementById("lists");
const input = document.getElementById("input");
const addUser = document.getElementById("addUser");
const dellStore = document.getElementById("dellStore");


function getUsers() {
    if (window.localStorage.length === 0) {
        let users = [];
        let jsUsers = JSON.stringify(users);
        window.localStorage.setItem('users', jsUsers);
    } else {
        let users = localStorage.getItem("users");
        let listUsers = JSON.parse(users);
        lists.innerHTML = '';
        listUsers.forEach(element => {

            lists.innerHTML += `
            <li>
                <span>${element.login}</span>
                <button data-userId="${element.id}" id="delUser" >del</button>
            </li>
        `
        });
    }

}
getUsers()

function addUserToStore() {
    const date = new Date();
    const userId=`${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;

    if (input.value) {
        let user = {
            login: `${input.value}`,
            id:userId
        };
        let users = JSON.parse(localStorage.getItem("users"));
        users.push(user);
        let jsUsers = JSON.stringify(users);
        window.localStorage.setItem('users', jsUsers);
        input.value = '';
        getUsers()
    }
}

btnGet.addEventListener("click", () => {
    getUsers()
})

addUser.addEventListener('click', () => {
    addUserToStore()
})

dellStore.addEventListener('click', () => {
    if (window.localStorage.length > 0) {
        let users = [];
        let jsUsers = JSON.stringify(users);
        window.localStorage.setItem('users', jsUsers);
    }
    getUsers()
})


lists.addEventListener('click',(e)=>{
    if(e.target.matches("#delUser")) {
        // alert(e.target.dataset.userid)
        let users = JSON.parse(localStorage.getItem("users"));
        let NewUsers=users.filter(c=>c.id !== e.target.dataset.userid);
        // console.log(NewUsers);
        let newParseUsers=JSON.stringify(NewUsers);
        window.localStorage.setItem('users', newParseUsers);
        getUsers()
    }
})
