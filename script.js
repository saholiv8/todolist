// Arrays para armazenar tarefas ativas e apagadas
let tasks = [];
let trash = [];

// Renderiza (desenha) as tarefas ativas na tela
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      ${task.text}
      <div>
        <!-- Botão para concluir -->
        <button class="action complete" onclick="toggleComplete(${index})">✔</button>
        <!-- Botão para editar -->
        <button class="action edit" onclick="editTask(${index})">✏️</button>
        <!-- Botão para apagar (vai para lixeira) -->
        <button class="action delete" onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Renderiza (desenha) as tarefas apagadas na lixeira
function renderTrash() {
  const trashList = document.getElementById("trashList");
  trashList.innerHTML = "";
  trash.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task.text}
      <div>
        <!-- Restaurar tarefa da lixeira -->
        <button class="action restore" onclick="restoreTask(${index})">♻️ Restaurar</button>
        <!-- Excluir definitivamente -->
        <button class="action permanent" onclick="permanentDelete(${index})">❌ Excluir</button>
      </div>
    `;
    trashList.appendChild(li);
  });
}

// Adiciona nova tarefa
function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text) {
    tasks.push({ text, completed: false }); // adiciona no array
    input.value = ""; // limpa campo
    renderTasks(); // atualiza lista
  }
}

// Marca tarefa como concluída ou não
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Edita o texto da tarefa
function editTask(index) {
  const newText = prompt("Editar tarefa:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

// Apaga tarefa (vai para lixeira)
function deleteTask(index) {
  trash.push(tasks[index]);
  tasks.splice(index, 1);
  renderTasks();
  renderTrash();
}

// Restaura tarefa da lixeira
function restoreTask(index) {
  tasks.push(trash[index]);
  trash.splice(index, 1);
  renderTasks();
  renderTrash();
}

// Exclui definitivamente da lixeira
function permanentDelete(index) {
  trash.splice(index, 1);
  renderTrash();
}

// Inicializa listas vazias
renderTasks();
renderTrash();
