function eCommerce(){

    class carrinho{
        constructor(itens, qtd, valorTotal){
            this.itens = itens,
            this.qtd = qtd,
            this.valorTotal = valorTotal;
        }

        addItem(Item){

            let cont = 0;

            for(let itemCarrinho in this.itens){
                if(this.itens[itemCarrinho].id == Item.id){
                    this.itens[itemCarrinho].qtd += Item.qtd
                    cont = 1;
                }
            }

            if(cont == 0){
                this.itens.push(Item);
            }

            this.qtd += Item.qtd;
            this.valorTotal += Item.preco * Item.qtd;
        }

        rmItem(Item){

            for(let itemCarrinho in this.itens){
                if(this.itens[itemCarrinho].id == Item.id){
                    
                    let obj = this.itens[itemCarrinho];
                    let index = this.itens.findIndex(function(obj){return obj.id == Item.id});

                    this.itens.splice(index, 0);

                    this.qtd -= this.itens[itemCarrinho].qtd;
                    this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;
                }
            }
        }
    }

    let Carrinho = new carrinho([
        {
            id: 01,
            nome: "Camisa",
            qtd: 1,
            preco: 20
        },
        {
            id: 02,
            nome: "Calça",
            qtd: 2,
            preco: 50
        }
    ] ,3 ,120)
    
    console.log(Carrinho);
    
    Carrinho.addItem({id:01, nome:"Camisa", qtd: 2, preco: 20});

    console.log(Carrinho);

    Carrinho.addItem({id:03, nome:"Boné", qtd: 1, preco: 15});

    console.log(Carrinho);

    Carrinho.rmItem({id:01, nome:"Camisa", qtd: 2, preco: 20});

    console.log(Carrinho);
}

eCommerce();