document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        const removeBtn = document.createElement('button');
        
        taskSpan.textContent = taskText;
        
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'removeBtn';
        removeBtn.onclick = function() {
            li.remove();
        };

        li.appendChild(taskSpan);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});