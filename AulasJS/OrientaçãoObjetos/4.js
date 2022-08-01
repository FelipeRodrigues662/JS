function dirigir(){

    class carro{
        constructor(marca, cor, gasolina){
            this.marca = marca,
            this.cor = cor,
            this.gasolina = gasolina
        }

        dirigir(){
            let base = this.gasolina;

            for(let i = 0 ; i != base; i++){
                this.gasolina--;
                if(this.gasolina < 25){
                    console.log("O carro precissa ser abastecido");
                }
            }
        }

        set setAbastecer(value){
            this.gasolina = value;
        }


    }

    let corolla = new carro("Toyota", "Prata", "100");

    corolla.dirigir();

    corolla.setAbastecer = 100;

    console.log(corolla.gasolina);
}

dirigir();