// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();

    const userDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,

    };
    localStorage.setItem(userDetails.email,
        JSON.stringify(userDetails));

    showUserOnScreeen(userDetails);

    if (typeof event.target.reset === "function") {
        event.target.reset();
    }
}

function showUserOnScreeen(user) {
    const parentElem = document.getElementById("listOfUsers");
    const chileElem = document.createElement("li");

    chileElem.textContent = `${user.username}, ${user.email}, ${user.phone}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = () => {
        localStorage.removeItem(user.email);

        parentElem.removeChild(chileElem);

    };

    chileElem.appendChild(deleteButton);

    parentElem.appendChild(chileElem);
};

module.exports = handleFormSubmit;