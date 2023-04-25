import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/modelos/red';
import { DatosService } from 'src/app/servicios/datos.service';
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-navbar',
  templateUrl:'./navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  redes : Red[]=[];  //se llama al modelo que es un array
  
  constructor(private sRed: RedService) { }
  
  ngOnInit(): void {
    this.cargarRed()
   

  }

  cargarRed():void{
    this.sRed.listaRedes().subscribe(data => {this.redes=data});
  }
}
  
