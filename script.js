const produtos = [
  { nome: "Camiseta", preco: "R$ 49,90" },
  { nome: "Calça Jeans", preco: "R$ 89,90" },
  { nome: "Vestido", preco: "R$ 129,90" }
];

const container = document.getElementById("produtos");

produtos.forEach(produto => {
  const div = document.createElement("div");
  div.className = "produto";
  div.innerHTML = `<h3>${produto.nome}</h3><p>${produto.preco}</p>`;
  container.appendChild(div);
});

