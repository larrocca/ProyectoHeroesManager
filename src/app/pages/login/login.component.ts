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

  usuarioABuscar: string = ''
  contrasenaABuscar: string = ''

  constructor(
    private heroesServie : HeroesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.heroesServie.getUsuarios().subscribe((data : any) =>{
      this.usuarios = data
      console.log(this.usuarios)
    })
  }

  logearse(){
    
    this.usuarios.forEach(element => {
      if (element.email == this.usuarioABuscar && element.contrasena == this.contrasenaABuscar) {
         this.usuarioEncontrado = element
         sessionStorage.setItem('usuario', JSON.stringify(this.usuarioEncontrado))
        this._router.navigate(['home'])
      }
      console.log(this.usuarioEncontrado)
    });
  }
}
