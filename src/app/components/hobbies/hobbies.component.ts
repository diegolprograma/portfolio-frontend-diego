import { Component, OnInit } from '@angular/core';
import { Hobbie } from 'src/app/modelos/hobbie';
import { HobbieService } from 'src/app/servicios/hobbie.service';
@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit{

  hobbies : Hobbie[]=[];  //se llama al modelo que es un array
  
  constructor(private sHobbie: HobbieService) { }
  
  ngOnInit(): void {
    this.cargarHobbie()
   

  }

  cargarHobbie():void{
    this.sHobbie.listaHobbies().subscribe(data => {this.hobbies=data});
  }



}
