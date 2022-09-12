class Estacionamento{
    constructor(Numdevagas = 20){
        this.Numdevagas = Numdevagas
    }


}

class Veiculo extends Estacionamento{
    constructor(id,placa,cor,nomeDoProprietário){
       
        this.id = id
        this.placa = placa
        this.cor = cor
        this.nomeDoProprietário = nomeDoProprietário

    }
}

class Carro extends Veiculo{
    constructor(num_portas){
    this.num_portas = num_portas    
    }
}
function submitcar(){
    num_portas = document.getElementById("numdeportas")
        
    }
class Moto extends Veiculo{

}

function Relatorio(){
    console.log(JSON.stringify(num_portas, null, 4));
}