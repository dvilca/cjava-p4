export class Curso{
    id?: number;
    nombre?: string;
    horas?:number;
    creditos?:number;
    categoria?: string;

    constructor(id: number,nombre:string,horas:number,creditos:number,categoria:string){
        this.id=id;
        this.nombre=nombre;
        this.horas=horas;
        this.creditos=creditos;
        this.categoria=categoria;
    }
}