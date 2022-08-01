function conta(){

    class banco{
        constructor(cCorrente, cPoupanca, juros){
            this.cCorrente = cCorrente,
            this.cPoupanca = cPoupanca,
            this.juros = juros
        }

        set depContaCorrente(value){
            this.cCorrente += value;
        }

        set depContaPoupanca(value){
            this.cPoupanca += value;
        }

        set saqContaCorrente(value){
            this.cCorrente -= value;
        }

        set saqContaPoupanca(value){
            this.cPoupanca -= value;
        }

        transferenciaCP(value){
            this.cCorrente -= value;
            this.cPoupanca += value;
        }

        transferenciaCC(value){
            this.cCorrente += value;
            this.cPoupanca -= value;
        }

        jurosDeAniversario(){
            let juros = ( cPoupanca * this.juros) / 100
            this.cPoupanca += juros;
        }   

    }

    class ContaEspecial extends Conta{
        constructor(cCorrente, cPoupanca, juros){
            super(cCorrente, cPoupanca, juros * 2)
        }
    }

    let banco = new Conta(1000, 5000, 1);

    let banco2 = new ContaEspecial(10000, 50000, 1);
}

conta();
