
// Add the Edit Button:

const form = document.querySelector('form');
const fruitsList = document.querySelector('ul');
const input = document.querySelector('#fruit-to-add');

// Add Edit button to existing fruits
const listItems = document.querySelectorAll('li');

listItems.forEach(function (li) {
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    li.appendChild(editBtn);
});

// Add new fruit
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const newLi = document.createElement('li');
    newLi.className = 'fruit';

    const fruitName = document.createElement('span');
    fruitName.textContent = input.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'x';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';

    newLi.appendChild(fruitName);
    newLi.appendChild(deleteBtn);
    newLi.appendChild(editBtn);

    fruitsList.appendChild(newLi);

    input.value = '';
});

// Delete fruit
fruitsList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const liToDelete = event.target.parentElement;
        fruitsList.removeChild(liToDelete);
    }
});
