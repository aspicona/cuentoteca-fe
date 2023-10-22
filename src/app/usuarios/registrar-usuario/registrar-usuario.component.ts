import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      idRol: [3, [Validators.required]]
    });
  }

  registrarUsuario():number{
    const nuevoUsuario: Usuario = this.registroForm?.value;
    let idUsuarioCreado: number=0;
    nuevoUsuario.idNivelLector=1;
    console.log(nuevoUsuario);
    this.usuarioService.registrarUsuario(nuevoUsuario).subscribe({
      next: (data) => {
        idUsuarioCreado = data.idUsuario;  
        alert('Usuario registrado correctamente')     
      },
      error: (error) => {
        alert('No se pudo registrar el usuario, ' + error)
      }
    });
    return idUsuarioCreado;
  }
}
