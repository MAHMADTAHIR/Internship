const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="completeBtn">Complete</button>
      <button class="deleteBtn">Delete</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = '';

  const completeBtn = li.querySelector('.completeBtn');
  const deleteBtn = li.querySelector('.deleteBtn');

  completeBtn.addEventListener('click', () => {
    li.querySelector('span').classList.toggle('completed');
  });

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });
});