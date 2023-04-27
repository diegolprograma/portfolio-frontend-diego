export class Educacion {
edit(value: any) {
  throw new Error('Method not implemented.');
}
detail(id: any) {
  throw new Error('Method not implemented.');
}

id?: number;
lugar: string;
inicio: string;
fin: string;
descripcion: string;

constructor(lugar:string, inicio:string, fin:string, descripcion:string){
    this.lugar = lugar;
    this.inicio = inicio;
    this.fin = fin;
    this.descripcion = descripcion;
}

}
