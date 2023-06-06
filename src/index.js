import './style.css';

const toDoTask = [
  {
    discription: 'Clean the house',
    completed: true,
    index: 5,

  },
  {
    discription: 'Complete the project',
    completed: false,
    index: 6,
  },
  {
    discription: 'pick the kids',
    completed: true,
    index: 3,

  },
  {
    discription: 'Call michael',
    completed: false,
    index: 4,
  },
  {
    discription: 'Make project changes',
    completed: false,
    index: 1,
  },
  {
    discription: 'Join zoom meeting',
    completed: true,
    index: 2,
  },
];

const sorted = toDoTask.sort((a, b) => a.index - b.index);
const toDoList = () => {
  for (let i = 0; i < sorted.length; i++) {
    const container = document.getElementById('list-items');
    const checkbox = document.createElement('input');
    const element = document.createElement('li');

    checkbox.type = 'checkbox';
    checkbox.classList.add('check');
    container.appendChild(checkbox);

    if (sorted[i].completed) {
      element.classList.add('completed');
      checkbox.checked = true;
    } else {
      element.classList.add('not-completed');
    }

    element.classList.add('list');
    element.innerHTML = `<p>${sorted[i].discription}</p><hr>`;
    container.appendChild(element);
  }
};
window.addEventListener('load', toDoList);
