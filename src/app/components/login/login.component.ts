import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginUsuario } from 'src/app/modelos/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj: string | undefined;

  constructor(private formBuilder: FormBuilder, private tokenService: TokenService, private authService: AuthService) { 
    //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      nombreUsuario:['',[Validators.required]],      
      password:['', [Validators.required]],
      
   })
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  get Nombre(){
    return this.form.get("nombreUsuario");
  }

  get Password(){
    return this.form.get("password");
  }

  get NombreValid(){
    return this.Nombre!.touched && !this.Nombre!.valid;
  }

  get PasswordValid() {
    return this.Password!.touched && !this.Password!.valid;
  }


  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUsername(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;      
      window.location.reload();
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
    })
  }

  limpiar(): void{
    this.form.reset();
  }

}

