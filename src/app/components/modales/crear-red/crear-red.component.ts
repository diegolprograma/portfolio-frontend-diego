import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-crear-red',
  templateUrl: './crear-red.component.html',
  styleUrls: ['./crear-red.component.css']
})
export class CrearRedComponent implements OnInit{

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private sRed:RedService) { 
    //Creamos el grupo de controles para el formulario 
this.form= this.formBuilder.group({
  nombre:['',[Validators.required]],  
  url:['', [Validators.required]], 
  icono:['', [Validators.required]], 
  
})
  }

  //declarar para las validaciones
  get Nombre(){
    return this.form.get("nombre");
  }

  get Url(){
    return this.form.get("url");
  }

  get Icono(){
    return this.form.get("icono");
  }
 
  ngOnInit(): void {
  }

  onCreate(): void{   
      this.sRed.agregarRed(this.form.value).subscribe(data=>{
      alert("Red Añadida");
      window.location.reload();
    }, err =>{
      alert("falló en la carga, intente nuevamente");
      this.form.reset();
    });
  }

  limpiar(): void{
    this.form.reset();
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onCreate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }
}
