
// Add the Edit Button:

const form = document.querySelector('form');
const fruitsList = document.querySelector('ul');
const input = document.querySelector('#fruit-to-add');
const filterInput = document.querySelector('#filter');
const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.id = 'description';
descriptionInput.placeholder = 'Enter fruit description';
form.insertBefore(descriptionInput, form.querySelector('button'));

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

    const fruitDescription = document.createElement('p');
    fruitDescription.textContent = descriptionInput.value;
    fruitDescription.style.fontStyle = 'italic';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'x';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';

    newLi.appendChild(fruitName);
    newLi.appendChild(fruitDescription);
    newLi.appendChild(deleteBtn);
    newLi.appendChild(editBtn);

    fruitsList.appendChild(newLi);

    input.value = '';
    descriptionInput.value = '';
});

// Filter fruits by their name or description
filterInput.addEventListener('input', function (event) {
    const searchText = event.target.value.toLowerCase();

    fruitsList.querySelectorAll('.fruit').forEach(function (fruit) {
        fruit.style.display = fruit.textContent.toLowerCase().includes(searchText)
            ? 'flex'
            : 'none';
    });
});

// Delete fruit
fruitsList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const liToDelete = event.target.parentElement;
        fruitsList.removeChild(liToDelete);
    }
});
