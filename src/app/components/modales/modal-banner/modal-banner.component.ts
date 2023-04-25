import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BannerService } from 'src/app/servicios/banner.service';
import { BannerComponent } from '../../banner/banner.component';
import { Banner } from 'src/app/modelos/banner';
@Component({
  selector: 'app-modal-banner',
  templateUrl: './modal-banner.component.html',
  styleUrls: ['./modal-banner.component.css']
})

export class ModalBannerComponent implements OnInit{

  form: FormGroup;
  id!: number;
  imagen: string='';
  imagenfondo: string='';
  presentacion: string='';
  descripcion: string='';
  
  constructor(private formBuilder: FormBuilder,private sBanner: BannerService,private insert:BannerComponent){
    this.form= this.formBuilder.group({
     imagen:['',[Validators.required]],
     imagenfondo:[''], 
     presentacion:[''], 
     descripcion:['',[Validators.required]], 
    })
  }
  
  ngOnInit(): void{
  
  }
  
  get Imagen(){
    return this.form.get("imagen");
  }
  
  get Imagenfondo(){
    return this.form.get("imagenfondo");
  }

  get Presentacion(){
    return this.form.get("presentacion");
  }
  
  get Descripcion(){
    return this.form.get("descripcion");
  }
  
  
  get ImagenValid(){
    return this.Imagen?.touched && !this.Imagen?.valid;
  }
  
  
  
  get DescripcionValid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }
  
  
  agregarBanner(): void{
    const ban = new Banner(this.imagen, this.imagenfondo, this.presentacion, this.descripcion);
    this.sBanner.agregarBanner(ban).subscribe(data=>{
  
    })
  }
  
  limpiar(): void{
    this.form.reset();
  }
  
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.agregarBanner();
    } else{
      alert("falló la carga, ");
      this.form.markAllAsTouched();
    }
  }
  
  
  }

 

 
  



