import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
form: FormGroup;

email='';
password='';

persona: Persona = new Persona("", "", 0, "");


constructor(private formBuilder: FormBuilder, private autenService: AuthService, private ruta: Router) {
  // Creamos el grupo de controles para el formulario de login
  this.form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })
}
 

ngOnInit(): void {
  sessionStorage.setItem('currentUser', "");
}

// Métodos para obtener los controles del formulario y validarlos
get Password() {
  return this.form.get("password");
}

get Email() {
  return this.form.get("email");
}

get PasswordValid() {
  return this.Password?.touched && !this.Password?.valid;
}

get EmailValid() {
  return this.Email?.touched && !this.Email?.valid;
}


onEnviar(event: Event) {
event.preventDefault;
if (this.form.valid) {
  //console.log(JSON.stringify(this.login_form.value));
  this.autenService.login(this.form.value).subscribe(data => {
    console.log("DATA: " + JSON.stringify(data.id));
    if (data.id) {
      alert("Ingresando al portfolio");
      this.ruta.navigate(['aadmin']);
    } else {
      alert("Error al iniciar sesión. Credenciales no válidas!!!");
    }
  }, error => {
    alert("ERROR!!!");
  })
} else {
  sessionStorage.setItem('currentUser', "");
  alert("Error! No tienes acceso");
  this.ruta.navigate(['/']);
}
}


reset() {
console.log("Se limpió el formulario");
this.form.reset();
this.ruta.navigate(['']);
}


back(){
this.ruta.navigate(['/']);
}

}