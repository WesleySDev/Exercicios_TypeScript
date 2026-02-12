var banco = {
    titular: "erick",
    saldo: 1000,
    depositar: function (valor) {
        this.saldo += valor;
        console.log("deposito realizado");
    },
    sacar: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("saque realizado");
        }
        else {
            console.log("saldo insuficiente");
        }
    },
    verSaldo: function () {
        console.log("saldo atual: " + this.saldo);
    }
};
banco.depositar(500);
banco.sacar(100);
banco.verSaldo();
