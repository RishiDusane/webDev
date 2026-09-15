   if(typeof document!=="undefined"){ document.addEventListener("DOMContentLoaded", initialize);
}
function getUsers() {
    return JSON.parse(localStorage.getItem("usersList") || "[]");
}
function getList(){
        return document.getElementById("listOfUsers") || document.querySelector("ul");
    }
    function initialize(){
        getUsers().forEach(display);
    }

function handleSubmit(event) {
    event.preventDefault();
    const editId = sessionStorage.getItem("editId");

    const isValidEdit = editId && getUsers().some(user => String(user.id) === String(editId));

    if (isValidEdit) {
        update(event);
    } else {
        sessionStorage.removeItem("editId");
        addData(event);
    }
    if (typeof event.target.reset === "function") {
        event.target.reset();
    }
    }

    function display(user) {
        const list = getList();
        if (!list) {
            return;
        }
        const listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(`${user.username} ${user.email} ${user.phone}`));
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-btn";

        editButton.addEventListener("click", () => editData(user));
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", () => deleteData(user.id, listItem));

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    }

    function addData(event) {
        const form = event.target;
        const user = {
            id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            username: form.username.value,
            email: form.email.value,
            phone: form.phone.value,
        };
        const usersList = getUsers();
        usersList.push(user);
        localStorage.setItem("usersList", JSON.stringify(usersList));
        display(user);
    }
function edit(user) {
    document.getElementById("username").value = user.username;
    document.getElementById("email").value = user.email;
    document.getElementById("phone").value = user.phone;
    sessionStorage.setItem("editId", user.id);
}

function update(event) {
    const id = sessionStorage.getItem("editId");
    const form = event.target;
    const usersList = getUsers().map(user => String(user.id) === String(id) ? {
        ...user,
        username: form.username.value,
        email: form.email.value,
        phone: form.phone.value,
    } : user);

    localStorage.setItem("usersList", JSON.stringify(usersList));
    sessionStorage.removeItem("editId");

    const list = getList();
    if (list) {
        list.innerHTML = "";
        usersList.forEach(display);

    }
    }
    function deleteData(id, listItem) {
        const usersList = getUsers().filter(user => user.id !== id);
        localStorage.setItem("usersList", JSON.stringify(usersList));
        listItem.remove();
    }

    function editData(user) {
        document.getElementById("username").value = user.username;
        document.getElementById("email").value = user.email;
        document.getElementById("phone").value = user.phone;
        sessionStorage.setItem("editId", user.id);
    }

if (typeof module !== "undefined") {

    module.exports = handleSubmit;

    module.exports.handleSubmit = handleSubmit;
    module.exports.handleFormSubmit = handleSubmit;

    module.exports.initialize = initialize;

    module.exports.display = display;

    module.exports.addData = addData;

    module.exports.deleteData = deleteData;

    module.exports.edit = edit;

    module.exports.update = update;


    module.exports.editData = editData;

}