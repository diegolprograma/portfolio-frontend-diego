import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/modelos/banner';
import { BannerService } from 'src/app/servicios/banner.service';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banners : Banner[]=[];  //se llama al modelo que es un array
  
  constructor(private sBanner: BannerService) { }
  
  ngOnInit(): void {
    this.cargarBanner()
   

  }

  cargarBanner():void{
    this.sBanner.listaBanners().subscribe(data => {this.banners=data});
  }
  }
