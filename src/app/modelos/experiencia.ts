export class Experiencia {

id?: number;
lugar: string;
inicio: string;
fin: string;
puesto: string;

constructor(lugar:string, inicio:string, fin:string, puesto:string){
    this.lugar = lugar;
    this.inicio = inicio;
    this.fin = fin;
    this.puesto = puesto;
}


}
