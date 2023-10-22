import { Rol } from "./rol";

export class Usuario {
  id: number=0;
  nombre:string="";
  apellido:string="";
  password:string="";
  email: string="";
  idRol: number= 0;
  rolSeleccionado? : Rol;
  idNivelLector: number=0;
}
