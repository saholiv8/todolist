let tasks = [];
let trash = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      ${task.text}
      <div>
        <button class="action complete" onclick="toggleComplete(${index})">✔</button>
        <button class="action edit" onclick="editTask(${index})">✏️</button>
        <button class="action delete" onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

function renderTrash() {
  const trashList = document.getElementById("trashList");
  trashList.innerHTML = "";
  trash.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task.text}
      <div>
        <button class="action restore" onclick="restoreTask(${index})">♻️ Restaurar</button>
        <button class="action permanent" onclick="permanentDelete(${index})">❌ Excluir</button>
      </div>
    `;
    trashList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    input.value = "";
    renderTasks();
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Editar tarefa:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  trash.push(tasks[index]);
  tasks.splice(index, 1);
  renderTasks();
  renderTrash();
}

function restoreTask(index) {
  tasks.push(trash[index]);
  trash.splice(index, 1);
  renderTasks();
  renderTrash();
}

function permanentDelete(index) {
  trash.splice(index, 1);
  renderTrash();
}

// Inicializa
renderTasks();
renderTrash();
