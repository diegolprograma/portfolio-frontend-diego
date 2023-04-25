import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { EducacionComponent } from '../../educacion/educacion.component';
import { Educacion } from 'src/app/modelos/educacion';
@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit{

  form: FormGroup;
  id!: number;
  lugar: string='';
  inicio: string='';
  fin: string='';
  descripcion: string='';
  
  constructor(private formBuilder: FormBuilder,private sEducacion: EducacionService,private insert:EducacionComponent){
    this.form= this.formBuilder.group({
     lugar:['',[Validators.required]],
     inicio:[''], 
     fin:[''], 
     descripcion:['',[Validators.required]], 
    })
  }
  
  ngOnInit(): void{
  
  }
  
  get Lugar(){
    return this.form.get("lugar");
  }
  
  get Inicio(){
    return this.form.get("inicio");
  }

  get Fin(){
    return this.form.get("fin");
  }
  
  get Descripcion(){
    return this.form.get("descripcion");
  }
  
  
  get LugarValid(){
    return this.Lugar?.touched && !this.Lugar?.valid;
  }
  
  
  
  get DescripcionValid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }
  
  
  agregarEducacion(): void{
    const edu = new Educacion(this.lugar, this.inicio, this.fin, this.descripcion);
    this.sEducacion.agregarEducacion(edu).subscribe(data=>{
  
    })
  }
  
  limpiar(): void{
    this.form.reset();
  }
  
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.agregarEducacion();
    } else{
      alert("falló la carga, ");
      this.form.markAllAsTouched();
    }
  }
  
  
  }
    
  
 
