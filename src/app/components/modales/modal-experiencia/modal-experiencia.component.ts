
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';




@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit{
  form: FormGroup;
  experiencia!: Experiencia;

  constructor(private FormBuilder: FormBuilder,
    private sExperiencia: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){
        //Creamos el grupo de controles para el formulario 
    this.form= this.FormBuilder.group({
      id:[''],
      lugar:[''],
      inicio:[''],
      fin:[''],
      puesto:['', [Validators.required]],
      personaid:1,
   })
    }

    ngOnInit(): void {
     
    }
  
    get Lugar(){
      return this.form.get("lugar");
    }
  
    get Puesto(){
      return this.form.get("puesto");
    }

   
   
    
  
  
    onUpdate():void{
      this.sExperiencia.editarExperiencia(this.form.value).subscribe(data => {
        alert("Experiencia modificada.");
        this.router.navigate(['']);
      }
      )
    }
  
    onEnviar(event:Event){
      event.preventDefault;
      if (this.form.valid){
        this.onUpdate();
      }else{
        alert("falló en la carga, intente nuevamente");
        this.form.markAllAsTouched();
      }
    }
    
  
  }
  




