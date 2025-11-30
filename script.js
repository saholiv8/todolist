function adicionarTarefa() {
  const input = document.getElementById("tarefa");
  const texto = input.value.trim();

  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;

    // remover tarefa ao clicar
    li.onclick = () => li.remove();

    document.getElementById("lista").appendChild(li);
    input.value = "";
  }
}
