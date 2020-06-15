import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { PacienteComponent } from './paciente/paciente.component';
import {PacienteServico} from './paciente.servico';
import {HttpClientModule} from '@angular/common/http';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ListaPacientesComponent, PacienteComponent, CadastroPacienteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PacienteComponent,
    ListaPacientesComponent,
    CadastroPacienteComponent,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PacienteServico
  ]
})
export class PacientesModule { }
