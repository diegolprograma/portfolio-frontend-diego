import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-crear-proyectos',
  templateUrl: './crear-proyectos.component.html',
  styleUrls: ['./crear-proyectos.component.css']
})
export class CrearProyectosComponent implements OnInit{

  form: FormGroup;
  id!: number;
  descripcion: string='';
  
  
  constructor(private formBuilder: FormBuilder,private sProyecto: ProyectoService){
    this.form= this.formBuilder.group({
     descripcion:['',[Validators.required]],
     
    })
  }
  
  ngOnInit(): void{
  
  }
  
  get Descripcion(){
    return this.form.get("descripcion");
  }
  
 
  
  
  get DescripcionValid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }
  
  
  
  agregarProyecto(): void{
    const pro = new Proyecto(this.descripcion);
    this.sProyecto.agregarProyecto(pro).subscribe(data=>{
  
    })
  }
  
  limpiar(): void{
    this.form.reset();
  }
  
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.agregarProyecto();
    } else{
      alert("falló la carga, ");
      this.form.markAllAsTouched();
    }
  }
  
  
  }
