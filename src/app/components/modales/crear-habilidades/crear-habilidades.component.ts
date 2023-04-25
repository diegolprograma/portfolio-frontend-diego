import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';


@Component({
  selector: 'app-crear-habilidades',
  templateUrl: './crear-habilidades.component.html',
  styleUrls: ['./crear-habilidades.component.css']
})
export class CrearHabilidadesComponent implements OnInit{
form: FormGroup;
id!: number;
especialidad: string='';
porcentaje: number=0;
color: string='';

constructor(private formBuilder: FormBuilder,private sHabilidad: HabilidadService){
  this.form= this.formBuilder.group({
   especialidad:['',[Validators.required]],
   porcentaje:[''], 
   color:['',[Validators.required]], 
  })
}

ngOnInit(): void{

}

get Especialidad(){
  return this.form.get("especialidad");
}

get Porcentaje(){
  return this.form.get("porcentaje");
}

get Color(){
  return this.form.get("color");
}


get EspecialidadValid(){
  return this.Especialidad?.touched && !this.Especialidad?.valid;
}



get ColorValid(){
  return this.Color?.touched && !this.Color?.valid;
}


agregarHabilidad(): void{
  const habi = new Habilidad(this.especialidad, this.porcentaje, this.color);
  this.sHabilidad.agregarHabilidad(habi).subscribe(data=>{

  })
}

limpiar(): void{
  this.form.reset();
}

onEnviar(event:Event){
  event.preventDefault;
  if(this.form.valid){
    this.agregarHabilidad();
  } else{
    alert("falló la carga, ");
    this.form.markAllAsTouched();
  }
}


}
