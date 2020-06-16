import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Paciente} from '../../../modelo/paciente';
import {GeneroEnum} from '../../../modelo/enumeracao/genero.enum';
import {PacienteServico} from '../paciente.servico';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.scss']
})
export class CadastroPacienteComponent implements OnInit {

  pacienteForm: FormGroup;

  opcoesGenero = GeneroEnum;

  constructor(private pacienteServico: PacienteServico) {}

  ngOnInit(): void {

    this.pacienteForm = new FormGroup({
      nome: new FormControl('', [Validators.maxLength(255), Validators.required]),
      nomeMae: new FormControl('', [Validators.maxLength(255)]),
      genero: new FormControl(null, [Validators.required]),
      nascimento: new FormControl(null, [Validators.required]),
      rg: new FormControl('', [Validators.maxLength(20)]),
      cpf: new FormControl('', [Validators.maxLength(11)]),
      endereco: new FormControl('', [Validators.maxLength(255)])
    });
  }

  salvarPaciente() {

    const paciente: Paciente = new Paciente();

    paciente.nome = this.pacienteForm.controls.nome.value;
    paciente.nomeMae = this.pacienteForm.controls.nomeMae.value;
    paciente.genero = this.pacienteForm.controls.genero.value;
    paciente.nascimento = this.pacienteForm.controls.nascimento.value;
    paciente.rg = this.pacienteForm.controls.rg.value;
    paciente.cpf = this.pacienteForm.controls.cpf.value;
    paciente.endereco = this.pacienteForm.controls.endereco.value;

    this.pacienteServico.salvarPaciente(paciente);
  }
}
