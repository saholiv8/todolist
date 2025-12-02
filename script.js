// 1. Seleciona os elementos do DOM
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// 2. Função para adicionar uma nova tarefa
function addTask() {
    const taskText = taskInput.value.trim();

    // Verifica se o campo não está vazio
    if (taskText === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    // Cria um novo elemento <li>
    const listItem = document.createElement("li");
    
    // Conteúdo do <li>: o texto da tarefa + botão de remover
    listItem.innerHTML = `
        <span>${taskText}</span>
        <span class="remove-btn" onclick="removeTask(this)">X</span>
    `;

    // Adiciona o evento de clique para marcar como concluída/incompleta
    listItem.addEventListener('click', toggleComplete);

    // Adiciona o novo item à lista
    taskList.appendChild(listItem);

    // Limpa o campo de entrada
    taskInput.value = "";
}

// 3. Função para remover a tarefa
// 'taskElement' é o próprio botão 'X' que foi clicado
function removeTask(taskElement) {
    // A tarefa (<li>) é o elemento pai do botão 'X'
    taskElement.parentElement.remove();
}

// 4. Função para marcar como concluída/incompleta
// 'event' é o evento de clique no <li>
function toggleComplete(event) {
    // event.currentTarget é o <li>
    event.currentTarget.classList.toggle('completed');
}

// Opcional: Adicionar tarefa ao pressionar a tecla 'Enter'
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
