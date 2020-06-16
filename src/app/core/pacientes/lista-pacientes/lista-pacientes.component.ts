import { Component, OnInit } from '@angular/core';
import {Paciente} from '../../../modelo/paciente';
import {PacienteServico} from '../paciente.servico';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent implements OnInit {

  pacientesSubscription: Subscription;

  pacientes: Paciente[] = [];

  constructor(private pacienteServico: PacienteServico) { }

  ngOnInit(): void {

    this.obterPacientes();

    this.pacienteServico.atualizacaoRepositorio.subscribe(x => {
      this.pacientesSubscription.unsubscribe();

      this.obterPacientes();
    });
  }

  obterPacientes() {

    this.pacientesSubscription = this.pacienteServico.obterPacientes().subscribe(
      pacientes => this.pacientes = pacientes);
  }

  load() {}

}
