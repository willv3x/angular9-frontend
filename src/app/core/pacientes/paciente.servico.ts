import {environment} from '../../../environments/environment';
import {Paciente} from '../../modelo/paciente';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class PacienteServico {

  contextoAPI: string = environment.contextoAPI + 'paciente';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  obterPacientes(): Observable<Paciente[]> {

    return this.httpClient.get<Paciente[]>(this.contextoAPI + '/obter');
  }

  salvarPaciente(paciente: Paciente) {

    this.httpClient.post(this.contextoAPI + '/salvar', paciente, this.httpOptions).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }

  deletarPaciente(codigo: number) {

    this.httpClient.get(this.contextoAPI + '/excluir/' + codigo).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }
}
