function banco(){

    class conta{
        constructor(saldo){
            this.saldo = saldo;
        }

        set setDeposito(Dep){
            this.saldo += Dep;
        }

        set setSaque(Saq){
            this.saldo -= Saq;
        }
    }

    let Felipe = new conta(1500);

    console.log(Felipe);
    Felipe.setDeposito = 1500;
    console.log(Felipe.saldo);
    Felipe.setSaque = 3000;
    console.log(Felipe.saldo);

}

banco();