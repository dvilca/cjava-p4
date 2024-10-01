export class Alumno{    
    id?: number;
    nombres?: string;
    apellidos?: string;
    fechaNacimiento?: string;
    direccion?: string;
    correo?: string;
    telefono?: string;

    constructor(id:number,nombres:string,apellidos:string, fechaNacimiento:string, direccion:string,correo:string,telefono:string){
        this.id=id;
        this.nombres=nombres;
        this.apellidos=apellidos;
        this.fechaNacimiento=fechaNacimiento;
        this.direccion=direccion;
        this.correo=correo;
        this.telefono=telefono
    }
}