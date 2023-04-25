import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Hobbie } from 'src/app/modelos/hobbie';
import { HobbieService } from 'src/app/servicios/hobbie.service';

@Component({
  selector: 'app-crear-hobbies',
  templateUrl: './crear-hobbies.component.html',
  styleUrls: ['./crear-hobbies.component.css']
})
export class CrearHobbiesComponent implements OnInit{

  form: FormGroup;
  id!: number;
  url: string='';
  
  
  constructor(private formBuilder: FormBuilder,private sHobbie: HobbieService){
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
  
  
