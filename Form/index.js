function handleFormSubmit(event) {
    event.preventDefault();

    const userDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,

    };
    localStorage.setItem(userDetails.email,
        JSON.stringify(userDetails));

    showUserOnScreen(userDetails);

    if (typeof event.target.reset === "function") {
        event.target.reset();
    }
}

function getUsersFromLocalStorage() {
    const users = [];

    for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        const storedUser = localStorage.getItem(key);

        try {
            const user = JSON.parse(storedUser);
            if (user && user.username && user.email && user.phone) {
                users.push(user);
            }
        } catch (error) {
            // Ignore unrelated non-JSON localStorage entries.
        }
    }

    return users;
}

function showUserOnScreen(user) {
    const parentElem = document.getElementById("listOfUsers");
    const childElem = document.createElement("li");

    childElem.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = () => {
        localStorage.removeItem(user.email);

        parentElem.removeChild(childElem);

    };

    childElem.appendChild(deleteButton);

    parentElem.appendChild(childElem);
}

function displayStoredUsers() {
    const parentElem = document.getElementById("listOfUsers");

    if (!parentElem) {
        return;
    }

    parentElem.innerHTML = "";

    getUsersFromLocalStorage().forEach(showUserOnScreen);
}

displayStoredUsers();

if (typeof module !== "undefined") {
    module.exports = handleFormSubmit;
    module.exports.handleFormSubmit = handleFormSubmit;
    module.exports.getUsersFromLocalStorage = getUsersFromLocalStorage;
}