import { Component, OnInit } from '@angular/core';
import {Paciente} from '../../../modelo/paciente';
import {PacienteServico} from '../paciente.servico';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent implements OnInit {

  pacientes: Paciente[] = [];

  constructor(private pacienteServico: PacienteServico) { }

  ngOnInit(): void {

    this.pacienteServico.obterPacientes().subscribe(
      pacientes => {
        this.pacientes = pacientes;
      }
    );
  }

  load() {}

}
