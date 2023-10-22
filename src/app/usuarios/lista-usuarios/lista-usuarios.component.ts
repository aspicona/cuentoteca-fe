import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
  private suscripcion = new Subscription();
  usuarios: Usuario[] = [];

  constructor( 
    private router: Router, 
    private usuarioService: UsuarioService) { }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    this.suscripcion.add(
this.traerListaUsuarios()
    )
  }

  traerListaUsuarios(){
    this.usuarioService.getAllUsuarios().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios.listaUsuarios;
      },
      error: () => {
        alert('Error al obtener los usuarios');
      }
    });
  }

  confirmarEliminarUsuario(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
        // Aquí puedes llamar al servicio para eliminar al usuario con el ID proporcionado.
        this.usuarioService.deleteUsuario(id).subscribe({
          next: (data)=>{

          },
          error: () => {
            alert('Error al obtener los usuarios');
          }
        });
    }
}

}
