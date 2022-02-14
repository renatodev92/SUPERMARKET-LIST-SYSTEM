class Products {

    constructor() {
        this.id = 1
        this.arrayProdutos = []

    }

    salvar() {

        let produto = this.lerDados()

        if (this.validaCampos(produto) == true) {
            alert('Salvar')
        }


    }

    lerDados() {
        let produto = {}

        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value
        produto.preco = document.getElementById('preco').value
        produto.quantidade = document.getElementById('quantidade').value

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
        alert(`Chamando o methodo cancelar`)
    }
}

let products = new Products();