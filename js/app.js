class Products {

    constructor() {
        this.id = 1
        this.arrayProdutos = []
        this.editId = null

    }

    salvar() {

        let produto = this.lerDados()

        if (this.validaCampos(produto) == true) {
            if (this.editId == null) {
                this.adicionar(produto)
            } else {
                this.atualizar(this.editId, produto)
            }
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

            let imgEdit = document.createElement("img")
            imgEdit.src = './img/edit.png'
            imgEdit.setAttribute("onclick", "products.editar(" + JSON.stringify(this.arrayProdutos[i]) + ")");

            let imgDelete = document.createElement("img")
            imgDelete.src = './img/del.png'
            imgDelete.setAttribute("onclick", "products.deletar(" + this.arrayProdutos[i].id + ")")

            tdAcoes.appendChild(imgEdit)
            tdAcoes.appendChild(imgDelete)

        }

    }

    adicionar(produto) {
        // produto.preco = parseFloat(produto.preco)
        this.arrayProdutos.push(produto)
        this.id++

    }

    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto
                this.arrayProdutos[i].preco = produto.preco
                this.arrayProdutos[i].quantidade = produto.quantidade
                this.arrayProdutos[i].total = produto.total

            }
        }

    }

    editar(dados) {
        this.editId = dados.id

        document.getElementById('produto').value = dados.nomeProduto
        document.getElementById('preco').value = dados.preco
        document.getElementById('quantidade').value = dados.quantidade

        document.getElementById('btn1').innerHTML = 'Atualizar'


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

        document.getElementById('btn1').innerText = "Salvar"
        this.editId = null

    }

    deletar(id) {

        if (confirm(`Deseja realmente deletar o produto? ${id}.`)) {

            let tbody = document.getElementById('tbody')

            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i, 1)
                    tbody.deleteRow(i)
                }
            }
        }
    }


}

let products = new Products();