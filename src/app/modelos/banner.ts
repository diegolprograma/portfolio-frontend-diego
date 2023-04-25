export class Banner {

id?: number;
imagen: string;
imagenfondo: string;
presentacion: string;
descripcion: string;

constructor(imagen:string, imagenfondo:string, presentacion:string, descripcion:string){
    this.imagen = imagen;
    this.imagenfondo = imagenfondo;
    this.presentacion = presentacion;
    this.descripcion = descripcion;
}



}
