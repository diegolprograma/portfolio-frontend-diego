import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-crear-experiencia',
  templateUrl: './crear-experiencia.component.html',
  styleUrls: ['./crear-experiencia.component.css']
})
export class CrearExperienciaComponent implements OnInit{

  form: FormGroup;
  id!: number;
  lugar: string='';
  inicio: string='';
  fin: string='';
  puesto: string='';
  
  constructor(private formBuilder: FormBuilder,private sExperiencia: ExperienciaService){
    this.form= this.formBuilder.group({
     lugar:['',[Validators.required]],
     inicio:[''], 
     fin:[''], 
     puesto:['',[Validators.required]], 
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
  
  get Puesto(){
    return this.form.get("puesto");
  }
  
  
  get LugarValid(){
    return this.Lugar?.touched && !this.Lugar?.valid;
  }
  
  
  
  get PuestoValid(){
    return this.Puesto?.touched && !this.Puesto?.valid;
  }
  
  
  agregarExperiencia(): void{
    const expe = new Experiencia(this.lugar, this.inicio, this.fin, this.puesto);
    this.sExperiencia.agregarExperiencia(expe).subscribe(data=>{
  
    })
  }
  
  limpiar(): void{
    this.form.reset();
  }
  
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.agregarExperiencia();
    } else{
      alert("falló la carga, ");
      this.form.markAllAsTouched();
    }
  }
  
  
  }
