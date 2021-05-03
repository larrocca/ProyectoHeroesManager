import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import {FormBuilder, NgForm , Validators, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios:Usuario[] = []
  usuarioEncontrado: Usuario |undefined

  emailABuscar:string = ''
  contrasenaABuscar: string = ''

  constructor(
    private heroesServie : HeroesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.heroesServie.getUsuarios().subscribe((data) =>{
      this.usuarios = data
    })
  }

  logearse(){
    /*
    this.usuarios.forEach(element => {
      if (element.email == this.usuarioABuscar && element.contrasena == this.contrasenaABuscar) { //De esta manera no me va a dejar iterar porque no es un array, es un object
         this.usuarioEncontrado = element
         sessionStorage.setItem('usuario', JSON.stringify(this.usuarioEncontrado))
        this._router.navigate(['home'])
      }
      console.log(this.usuarioEncontrado)
    });*/

    Object.keys(this.usuarios).forEach((key:any) => { //El object solamente funciona en casos de iterar objetos, no arrays, en este caso firebase traer un objeto con objetos 
      if (this.usuarios[key].email == this.emailABuscar && this.usuarios[key].contrasena == this.contrasenaABuscar){ //De esta manera no me va a dejar iterar porque no es un array, es un object
        this.usuarioEncontrado = this.usuarios[key]
        console.log(this.usuarioEncontrado)
        sessionStorage.setItem('usuario', JSON.stringify(this.usuarioEncontrado))
        this._router.navigate(['home'])
      }
     })
    }
}
