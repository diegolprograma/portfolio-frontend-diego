import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/modelos/habilidad';
import { DatosService } from 'src/app/servicios/datos.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades : Habilidad[]=[];  //se llama al modelo que es un array
  
  
  constructor(private sHabilidad: HabilidadService) { }
  
  ngOnInit(): void {
    this.cargarHabilidad()
   

  }

  cargarHabilidad():void{
    this.sHabilidad.listaHabilidad().subscribe(data => {this.habilidades=data});
  }

  }
