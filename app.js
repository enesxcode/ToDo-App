 // Task list arrays
 let tasks = [];
 let completedTasks = [];

 // Function to add a new task
 function addTask() {
   const taskInput = document.getElementById('taskInput');
   const taskText = taskInput.value.trim();
   if (taskText === '') return;

   tasks.push(taskText);
   renderTasks();
   taskInput.value = '';
 }

 // Function to render tasks
 function renderTasks() {
   const pendingTasksContainer = document.getElementById('pendingTasks');
   const completedTasksContainer = document.getElementById('completedTasks');

   // Clear previous tasks
   pendingTasksContainer.innerHTML = '';
   completedTasksContainer.innerHTML = '';

   // Render pending tasks
   tasks.forEach((task, index) => {
     const taskElement = document.createElement('div');
     taskElement.classList.add('task');
     taskElement.innerHTML = `
        <div>
            <span>${task}</span>
        </div>
        <div>
            <button onclick="completeTask(${index})" title='Complete'><i class="fa-solid fa-check"></i></button>
            <button onclick="editTask(${index})" title='Edit'><i class="fa-solid fa-pen-to-square"></i></button>
            <button onclick="deleteTask(${index})" title='Delete'><i class="fa-solid fa-delete-left"></i></button>
        </div>
       
     `;
     pendingTasksContainer.appendChild(taskElement);
   });

   // Render completed tasks
   completedTasks.forEach((task, index) => {
     const taskElement = document.createElement('div');
     taskElement.classList.add('task', 'completed');
     taskElement.innerHTML = `
       <span>${task}</span>
       <button onclick="deleteCompletedTask(${index})"><i class="fa-solid fa-delete-left"></i></button>
     `;
     completedTasksContainer.appendChild(taskElement);
   });
 }

 // Function to mark a task as complete
 function completeTask(index) {
   const completedTask = tasks.splice(index, 1)[0];
   completedTasks.push(completedTask);
   renderTasks();
 }

 // Function to delete a pending task
 function deleteTask(index) {
   tasks.splice(index, 1);
   renderTasks();
 }

 // Function to edit a pending task
 function editTask(index) {
   const newTaskText = prompt('Edit Task:', tasks[index]);
   if (newTaskText !== null && newTaskText.trim() !== '') {
     tasks[index] = newTaskText.trim();
     renderTasks();
   }
 }

 // Function to delete a completed task
 function deleteCompletedTask(index) {
   completedTasks.splice(index, 1);
   renderTasks();
 }

 // Initial rendering
 renderTasks();