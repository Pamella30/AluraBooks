let  btnOrdenarPrecos = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPrecos.addEventListener('click', ordenarLivrosPrecos)

function ordenarLivrosPrecos () {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}