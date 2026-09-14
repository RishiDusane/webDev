
// Add the Edit Button:

const form = document.querySelector('form');
const fruitsList = document.querySelector('ul');
const input = document.querySelector('#fruit-to-add');
const filterInput = document.querySelector('#filter');
const fruitItems = Array.from(fruitsList.querySelectorAll('.fruit'));
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

    fruitItems.push(newLi);
    renderFruits(filterInput.value);

    input.value = '';
    descriptionInput.value = '';
});

// Filter fruits by their name or description
filterInput.addEventListener('input', function (event) {
    renderFruits(event.target.value);
});

function renderFruits(searchValue) {
    const searchText = searchValue.toLowerCase();

    while (fruitsList.firstChild) {
        fruitsList.removeChild(fruitsList.firstChild);
    }

    fruitItems.forEach(function (fruit) {
        const name = fruit.querySelector('span')?.textContent || fruit.childNodes[0].textContent;
        const description = fruit.querySelector('p')?.textContent || '';
        const matches = `${name} ${description}`.toLowerCase().includes(searchText);

        if (matches) {
            fruitsList.appendChild(fruit);
        }
    });
}

// Delete fruit
fruitsList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const liToDelete = event.target.parentElement;
        fruitItems.splice(fruitItems.indexOf(liToDelete), 1);
        fruitsList.removeChild(liToDelete);
    }
});
