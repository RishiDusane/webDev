if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", initialize);
}

function initialize() {
    const usersList = JSON.parse(localStorage.getItem("usersList") || "[]");

    usersList.forEach(display);
}

function handleFormSubmit(event) {
    event.preventDefault();

    const userDetails = {
        id: Date.now(),
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    };

    const usersList = JSON.parse(localStorage.getItem("usersList") || "[]");
    usersList.push(userDetails);
    localStorage.setItem("usersList", JSON.stringify(usersList));

    display(userDetails);

    if (typeof event.target.reset === "function") {
        event.target.reset();
    }
}

function getListElement() {
    if (typeof document === "undefined") {
        return null;
    }

    return document.getElementById("listOfUsers") || document.querySelector("ul");
}

function display(user) {
    const parentElement = getListElement();

    if (!parentElement) {
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", function () {
        deleteData(user.id, listItem);
    });

    listItem.appendChild(deleteButton);
    parentElement.appendChild(listItem);
}

function deleteData(id, listItem) {
    const usersList = JSON.parse(localStorage.getItem("usersList") || "[]");
    const updatedUsersList = [];

    for (let index = 0; index < usersList.length; index += 1) {
        if (usersList[index].id !== id) {
            updatedUsersList.push(usersList[index]);
        }
    }

    localStorage.setItem("usersList", JSON.stringify(updatedUsersList));
    listItem.remove();
}

if (typeof module !== "undefined") {
    module.exports = handleFormSubmit;
    module.exports.handleFormSubmit = handleFormSubmit;
    module.exports.initialize = initialize;
    module.exports.display = display;
    module.exports.deleteData = deleteData;
}