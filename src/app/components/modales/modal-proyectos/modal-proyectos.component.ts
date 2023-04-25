import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { ProyectosComponent } from '../../proyectos/proyectos.component';
import { Proyecto } from 'src/app/modelos/proyecto';
@Component({
  selector: 'app-modal-proyectos',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.css']
})
export class ModalProyectosComponent implements OnInit{

  form: FormGroup;
  id!: number;
  descripcion: string='';
  
  
  constructor(private formBuilder: FormBuilder,private sProyecto: ProyectoService,private insert:ProyectosComponent){
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
