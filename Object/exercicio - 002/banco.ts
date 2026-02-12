


// EXERCÍCIO  — Conta Bancária

const banco =  {
 titular: "erick",
 saldo: 1000,

 depositar(valor) {
     this.saldo += valor
     console.log("deposito realizado")
 },

 sacar(valor) {
    if (valor <= this.saldo){
        this.saldo -= valor;
        console.log("saque realizado")
    }else {
        console.log("saldo insuficiente")
    }
 },

 verSaldo() {
    console.log("saldo atual: " + this.saldo)
 }

}
 banco.depositar(500)
 banco.sacar(100)
 banco.verSaldo()