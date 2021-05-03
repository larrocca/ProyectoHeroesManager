import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { Usuario } from '../../models/usuario.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   forms:FormGroup
   contrasena:string = ''
   contrasenaConfirm:string = ''
   usuario:Usuario = new Usuario('','','','','')

  constructor(
    private formBuilder:FormBuilder,
    private heroesService : HeroesService
    
  ) {
    this.forms = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      nombre: ['',[Validators.required,Validators.minLength(3)]],
      apellido: ['',[Validators.required,Validators.minLength(3)]],
      contrasena:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      contrasenaConfirm:['',[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      nacionalidad:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  get controls(){
    return this.forms.controls;
  }

  validarDatos(){
    console.log(this.forms.valid)
    if (this.forms.valid) {
      this.usuario.email = this.controls['email'].value
      this.usuario.nombre = this.controls['nombre'].value
      this.usuario.apellido = this.controls['apellido'].value
      this.usuario.contrasena = this.controls['contrasena'].value
      this.usuario.nacionalidad = this.controls['nacionalidad'].value

      console.log(this.usuario)
      
      this.heroesService.guardarUsuario(this.usuario)
    }
    
  }

}
