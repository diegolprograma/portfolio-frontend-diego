import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { HabilidadesComponent } from '../../habilidades/habilidades.component';
import { Habilidad } from 'src/app/modelos/habilidad';
@Component({
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.component.html',
  styleUrls: ['./modal-habilidades.component.css']
})
export class ModalHabilidadesComponent implements OnInit{

form: FormGroup;
id!: number;
especialidad: string='';
porcentaje: number=0;
color: string='';

//inyectar constructor del formbuilder
constructor(private formBuilder: FormBuilder,private sHabilidad: HabilidadService, private insert:HabilidadesComponent){
  //Creamos el control de controles para el formulario
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





   
  









