import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { DatosService } from 'src/app/servicios/datos.service';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones : Educacion[]=[];  //se llama al modelo que es un array
  
  constructor(private sEducacion: EducacionService) { }
  
  ngOnInit(): void {
    this.cargarHabilidad()
   

  }

  cargarHabilidad():void{
    this.sEducacion.listaEducaciones().subscribe(data => {this.educaciones=data});
  }
  }
