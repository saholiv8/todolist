const produtos = {
  vendidos: [
    { nome: "Camiseta Básica", preco: "R$ 49,90" },
    { nome: "Calça Jeans", preco: "R$ 89,90" },
    { nome: "Jaqueta Casual", preco: "R$ 149,90" }
  ],
  baratos: [
    { nome: "Regata Simples", preco: "R$ 29,90" },
    { nome: "Short Esportivo", preco: "R$ 39,90" },
    { nome: "Boné Estampado", preco: "R$ 25,90" }
  ],
  estilosos: [
    { nome: "Vestido Floral", preco: "R$ 129,90" },
    { nome: "Camisa Social Slim", preco: "R$ 99,90" },
    { nome: "Blazer Moderno", preco: "R$ 199,90" }
  ]
};

function mostrarAba(aba) {
  const container = document.getElementById("catalogo");
  container.innerHTML = "";

  produtos[aba].forEach(produto => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `<h3>${produto.nome}</h3><p>${produto.preco}</p>`;
    container.appendChild(div);
  });
}

// Mostrar a aba "Mais Vendidos" por padrão
mostrarAba("vendidos");
