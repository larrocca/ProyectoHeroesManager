import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  arrayUsuarios: Usuario[] = []

  constructor(
    private http : HttpClient
  ) {}

  getUsuarios(){
    return this.http.get<Usuario>('https://heroes-14acf-default-rtdb.firebaseio.com/usuarios.json')
  }
  
  guardarUsuario(usuario:Usuario){
   return this.http.post('https://heroes-14acf-default-rtdb.firebaseio.com/usuarios.json',usuario).subscribe(data=>{
    console.log(data)
   })
  }
}
