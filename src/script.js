import './style.css';

let myTasks = [];

const addArray = (description, completed, index) => {
  myTasks.push({
    description,
    completed: false,
    index,
  });
};

const getInput = (event) => {
  if (event.key === 'Enter') {
    const myTaskInput = document.getElementById('addtask');
    const description = myTaskInput.value.trim();

    if (description !== '') {
      addArray(description, false, myTasks.length + 1);
      myTaskInput.value = '';
      displayTask(myTasks.length - 1); // Display the newly added task
      storeItems();
    }
  }
};

const displayTask = (index) => {
  const container = document.getElementById('list-items');

  const item = document.createElement('li');
  const checkbox = document.createElement('input');
  const taskDescription = document.createElement('input');
  const element = document.createElement('hr');
  const kebabMenu = document.createElement('div');
  const kebabIcon = document.createElement('span');
  const trash = document.createElement('span');

  trash.classList.add('fas', 'fa-trash', 'delete');

  checkbox.type = 'checkbox';
  checkbox.classList.add('check');

  item.classList.add('list');
  taskDescription.value = myTasks[index].description;
  taskDescription.classList.add('disc');

  kebabMenu.classList.add('kebab-menu');
  kebabIcon.classList.add('kebab-icon');
  kebabIcon.innerHTML = '&#8942;';
  kebabMenu.appendChild(kebabIcon);

  item.appendChild(checkbox);
  item.appendChild(taskDescription);
  item.appendChild(element);
  item.appendChild(kebabMenu);
  item.appendChild(trash);

  container.appendChild(item);

  taskDescription.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const newDescription = taskDescription.value.trim();
      if (newDescription !== '') {
        editlist(index, newDescription);
      } else {
        taskDescription.value = myTasks[index].description; // Restore the previous description
      }
    }
  });
};
const deleteListItem = (index) => {
  const container = document.getElementById('list-items');
  container.removeChild(container.children[index]);
  myTasks.splice(index, 1);
  updateIndexes();
  storeItems();
};

const updateIndexes = () => {
  myTasks.forEach((task, index) => {
    task.index = index + 1;
  });
};

const storeItems = () => {
  localStorage.setItem('myTasks', JSON.stringify(myTasks));
};

document.addEventListener('DOMContentLoaded', () => {
  const myTaskInput = document.getElementById('addtask');
  myTaskInput.addEventListener('keypress', getInput);

  const storedTasks = localStorage.getItem('myTasks');
  if (storedTasks) {
    myTasks = JSON.parse(storedTasks);
    myTasks.forEach((task, index) => {
      displayTask(index);
    });
  }
  const container = document.getElementById('list-items');

  container.addEventListener('click', (event) => {
    const kebabMenu = event.target.closest('.kebab-menu');
    if (kebabMenu) {
      kebabMenu.classList.toggle('active');
      const deleteIcon = kebabMenu.querySelector('.delete');
      if (deleteIcon) {
        deleteIcon.classList.toggle('active');
      }
    }
  });

  container.addEventListener('click', (event) => {
    const deleteIcon = event.target.closest('.delete');
    if (deleteIcon) {
      event.stopPropagation();
      const listItem = deleteIcon.closest('.list');
      const index = Array.from(container.children).indexOf(listItem);
      deleteListItem(index);
    }
  });
});

const editlist = (index, newDescription) => {
  if (index >= 0 && index < myTasks.length) {
    myTasks[index].description = newDescription;
    storeItems(); // Update the stored tasks after modifying the description
  }
};