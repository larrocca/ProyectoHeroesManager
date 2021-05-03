import { Usuario } from "./usuario.model"

export class Team{
    nombre:string
    lider:number
    owner:Usuario
    usuarios:Usuario[] = []
    
    constructor(
        nombre:string,
        lider:number,
        owner:Usuario,
        usuarios:Usuario[] = []
        
    ){
        this.nombre = nombre,
        this.lider = lider,
        this.owner = owner,
        this.usuarios = usuarios
    }

}