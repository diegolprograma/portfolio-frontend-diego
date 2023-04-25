export class Habilidad {

id?: number;
especialidad: string;
porcentaje: number;
color: string;

constructor(especialidad:string, porcentaje:number, color:string){
    this.especialidad = especialidad;
    this.porcentaje = porcentaje;
    this.color = color;
}


}
