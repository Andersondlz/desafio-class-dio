class heroi{
    constructor (nomeHeroi,idade,tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.idade = idade
        this.tipoHeroi = tipoHeroi
    }
    escrever(){
      console.log("O nome do Jogador é: " + this.nomeHeroi)
      console.log("A idade desse jogador é: " +this.idade)
    }
    
    atacar(tipoHeroi){
         this.ataque = ""
         if (this.tipoHeroi === "mago"){
            this.ataque = "magia"
         } else if (this.tipoHeroi === "guerreiro" ){
            this.ataque = "espada"
         } else if (this.tipoHeroi === "monge" ){
            this.ataque = "artes marciais"
         } else if (this.tipoHeroi === "ninja" ){
            this.ataque = "shuriken"
         }
         console.log(`O ${this.tipoHeroi} atacou usando ${this.ataque} `)
         return this.retHeroi
       }
}
let jogoHeroi = new heroi("Anderson da Luz",43,"monge")
jogoHeroi.escrever()
jogoHeroi.atacar()