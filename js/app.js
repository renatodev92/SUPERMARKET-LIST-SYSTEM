class Products {

    constructor() {
        this.id = 1
        this.arrayProdutos = []

    }

    salvar() {

        let produto = this.lerDados()

        if (this.validaCampos(produto) == true) {
            this.adicionar(produto)
        }

        this.listaTabela();
        this.cancelar();


    }

    listaTabela() {

        let tbody = document.getElementById('tbody');
        tbody.innerText = ""

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow()

            let tdId = tr.insertCell();
            let tdProduto = tr.insertCell();
            let tdValor = tr.insertCell();
            let tdQuantidade = tr.insertCell();
            let tdValorTotal = tr.insertCell();
            let tdAcoes = tr.insertCell();


            tdId.innerText = this.arrayProdutos[i].id
            tdProduto.innerText = this.arrayProdutos[i].nomeProduto
            tdValor.innerText = this.arrayProdutos[i].preco
            tdQuantidade.innerText = this.arrayProdutos[i].quantidade
            tdValorTotal.innerText = this.arrayProdutos[i].total

            let imgEdit = document.createElement('img')
            imgEdit.src = './img/edit.png'

            let imgDelete = document.createElement('img')
            imgDelete.src = './img/del.png'

            let imgAdd = document.createElement('img')
            imgAdd.src = './img/add.png'


            tdAcoes.appendChild(imgEdit)
            tdAcoes.appendChild(imgDelete)
            tdAcoes.appendChild(imgAdd)

        }

    }

    adicionar(produto) {
        this.arrayProdutos.push(produto)
        this.id++

    }

    lerDados() {
        let produto = {}

        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value
        produto.preco = document.getElementById('preco').value
        produto.quantidade = document.getElementById('quantidade').value
        produto.total = produto.preco * produto.quantidade

        return produto
    }

    validaCampos(produto) {

        let msg = ''

        if (produto.nomeProduto == '') {
            msg += 'Informe o nome do produto.\n'
        }

        if (produto.preco == '') {
            msg += 'Informe o preço do produto.\n'
        }

        if (produto.quantidade == '') {
            msg += 'Informe a quantidade do produto.\n'
        }

        if (msg != '') {
            alert(msg)
            return false
        }

        return true

    }

    cancelar() {

        document.getElementById('produto').value = ""
        document.getElementById('preco').value = ""
        document.getElementById('quantidade').value = ""


    }
}

let products = new Products();