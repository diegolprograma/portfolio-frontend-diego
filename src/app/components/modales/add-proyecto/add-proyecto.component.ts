import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit{
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private sproye:ProyectoService) {
    //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      descripcion:['',[Validators.required]],
      
   })
   }

  get Descripcion(){
    return this.form.get("descripcion");
  }

 
 


  get DescripcionValid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }



  
  ngOnInit(): void {
  }


  agregarProyecto(): void{
      this.sproye.agregarProyecto(this.form.value).subscribe(data=>{
      alert("Proyecto Añadido");
      window.location.reload();
    });
  }

  limpiar(): void{
    this.form.reset();
  }



  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.agregarProyecto();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
