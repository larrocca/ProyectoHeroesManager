
export class Perfil{
    tipo?:string
    poderAtaque?:number
    xp?:number
    efectividad?:number
    img?: string

    constructor(
        tipo:string,
        poderAtaque:number,
        xp:number,
        efectividad:number,
        img: string
       
    ){
        this.tipo = tipo,
        this.poderAtaque = poderAtaque,
        this.img = img
        this.xp = xp
        this.efectividad = efectividad
    }

}