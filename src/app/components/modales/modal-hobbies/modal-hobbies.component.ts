import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HobbieService } from 'src/app/servicios/hobbie.service';
import { HobbiesComponent } from '../../hobbies/hobbies.component';
import { Hobbie } from 'src/app/modelos/hobbie';

@Component({
  selector: 'app-modal-hobbies',
  templateUrl: './modal-hobbies.component.html',
  styleUrls: ['./modal-hobbies.component.css']
})
export class ModalHobbiesComponent implements OnInit{

  form: FormGroup;
  id!: number;
  url: string='';
  
  
  constructor(private formBuilder: FormBuilder,private sHobbie: HobbieService,private insert:HobbiesComponent){
    this.form= this.formBuilder.group({
     
      url:[''], 
     
    })
  }
  
  ngOnInit(): void{
  
  }
  
  get Url(){
    return this.form.get("url");
  }
  

  
  agregarHobbie(): void{
    const hob = new Hobbie(this.url);
    this.sHobbie.agregarHobbie(hob).subscribe(data=>{
  
    })
  }
  
  limpiar(): void{
    this.form.reset();
  }
  
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.agregarHobbie();
    } else{
      alert("falló la carga, ");
      this.form.markAllAsTouched();
    }
  }
  
  
  }