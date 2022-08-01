function cidade(){
    class city{
        constructor(rua, bairro, cidade, estado){
            this.rua = rua,
            this.bairro = bairro, 
            this.cidade = cidade,
            this.estado = estado
        }

        set setRua(value){
            this.rua = value
            console.log("O nome da sua Rua foi alterado para " + this.rua);
        }

        set setBairro(value){
            this.bairro = value
            console.log("O nome do seu Bairro foi alterado para " + this.bairro);
        }

        set setCidade(value){
            this.cidade = value
            console.log("O nome da sua Cidade foi alterado para " + this.cidade);
        }

        set setEstado(value){
            this.estado = value
            console.log("O nome do seu Estado foi alterado para " + this.estado);
        }
    }

    let city1 = new city("Rua Aristides José Dornels", "Samanbaia", "Rio Paranaiba", "Minas Gerais");

    console.log(city1);

    city1.setRua = "Rua Tomazzine Vezzale Pizzi";
    city1.setBairro = "Itatiba Park";
    city1.setEstado = "São Paulo";
    city1.setCidade = "Itatiba";

    console.log(city1);
    
}

cidade();