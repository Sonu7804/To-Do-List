document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
  
    addButton.addEventListener('click', function() {
      const task = taskInput.value.trim();
      if (task !== '') {
        const li = document.createElement('li');
        li.className = 'task';
        li.innerHTML = `
          <input type="checkbox" class="task-checkbox">
          <span class="task-text">${task}</span>
          <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
      }
    });
  
    taskList.addEventListener('click', function(event) {
      const element = event.target;
      if (element.classList.contains('delete-button')) {
        element.parentNode.remove();
      } else if (element.classList.contains('task-checkbox')) {
        const taskText = element.nextElementSibling;
        taskText.classList.toggle('completed');
      }
    });
  });
  