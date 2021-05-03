import { Items } from "./items.model"
import { Perfil } from "./perfil.models"
import { Team } from "./team.model"

export class Usuario{
    nombre:string
    apellido:string
    email:string
    contrasena:string
    nacionalidad:string
    items:Items[] = []
    amigos:[] = []
    enemgios:[] = []
    perfil:Perfil = {}
    teams:Team[] = []
    id?:string

    constructor(
        nombre:string,
        apellido:string,
        email:string,
        contrasena:string,
        nacionalidad:string
    ){
        this.nombre = nombre,
        this.apellido = apellido,
        this.email = email,
        this.contrasena = contrasena
        this.nacionalidad = nacionalidad
    }

}
