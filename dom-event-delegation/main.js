var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', handler);

function handler(event) {
  console.log(' event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    var btn = event.target;
    console.log('closest: ', btn.closest('.task-list-item'));
    btn.closest('.task-list-item').remove();
  }
}
