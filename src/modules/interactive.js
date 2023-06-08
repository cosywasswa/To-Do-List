const clearCompletedItems = (container, myTasks, updateIndexes, storeItems) => {
  const completedItems = container.querySelectorAll('.completed');

  completedItems.forEach((completedItem) => {
    const listItem = completedItem.closest('.list');
    const index = Array.from(container.children).indexOf(listItem);

    listItem.remove();
    myTasks.splice(index, 1);
  });

  updateIndexes();
  storeItems();
};
// eslint-disable-next-line no-unused-vars
const handleCheckboxClick = (event, container, myTasks, updateCompleted, storeItems) => {
  const isChecked = event.target.checked;
  const listItem = event.target.closest('.list');
  const index = Array.from(listItem.parentNode.children).indexOf(listItem);
  updateCompleted(index, isChecked);
};

export { clearCompletedItems, handleCheckboxClick };
