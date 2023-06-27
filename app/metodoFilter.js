const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))


function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? 
    filtrarDisponibilidade() : filtrarCategoria(categoria) 
    exibirLivrosNaTela(livrosFiltrados)

    if(categoria == 'disponivel') {
        const valorTotalDisponiveis = calcularValorTotal(livrosFiltrados)
        exibirValorTotal(valorTotalDisponiveis)
    }
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotal (valorTotalDisponiveis) {

    valorTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalDisponiveis}</span></p>
    </div>`
}