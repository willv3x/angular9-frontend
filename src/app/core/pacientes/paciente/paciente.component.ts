import {Component, Input, OnInit} from '@angular/core';
import {Paciente} from '../../../modelo/paciente';
import {PacienteServico} from '../paciente.servico';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  @Input() paciente: Paciente;

  constructor(private pacienteServico: PacienteServico) { }

  ngOnInit(): void {
  }

  deletarPaciente() {

    this.pacienteServico.deletarPaciente(this.paciente.id);
  }
}
