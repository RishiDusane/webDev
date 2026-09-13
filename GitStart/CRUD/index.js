const form = document.querySelector('form');
const fruitsList = document.querySelector('ul');
const input = document.querySelector('input[type="text"]');

const listItems = document.querySelectorAll('li');
listItems.forEach(function (li) {
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    li.appendChild(editBtn);
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const newLi = document.createElement('li');
    newLi.className = 'fruit';
    newLi.innerHTML = input.value + '<button class="delete-btn">x</button><button class="edit-btn">Edit</button>';
    fruitsList.appendChild(newLi);
    input.value = '';
});

fruitsList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const liToDelete = event.target.parentElement;
        fruitsList.removeChild(liToDelete);
    }
});