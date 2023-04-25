import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelos/proyecto';
import { DatosService } from 'src/app/servicios/datos.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos : Proyecto[]=[];  //se llama al modelo que es un array
  
  constructor(private sProyecto: ProyectoService) { }
  
  ngOnInit(): void {
    this.cargarProyecto()
   

  }

  cargarProyecto():void{
    this.sProyecto.listaProyectos().subscribe(data => {this.proyectos=data});
  }
  }
