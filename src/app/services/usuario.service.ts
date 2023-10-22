import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: any[]=[];
  url="https://localhost:7036/api/Usuario/";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getAllUsuarios(): Observable<any> {
    return this.http.get<any>(this.url+"getAll")
  }

  registrarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${this.url}create`, usuario);
  }

  deleteUsuario(id:number): Observable<any> {
    return this.http.get<any>(this.url+"delete")
  }
}
