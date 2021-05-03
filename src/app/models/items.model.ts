
export class Items{
    nombre:string
    poder:number
    alcance:number
    sobrenatural:boolean
    peso:number
    img: string

    constructor(
        poder:number,
        nombre:string,
        img: string,
        alcance:number,
        sobrenatural:boolean,
        peso:number
       
    ){
        this.nombre = nombre,
        this.poder = poder,
        this.img = img
        this.alcance = alcance
        this.sobrenatural = sobrenatural
        this.peso = peso
    }

}