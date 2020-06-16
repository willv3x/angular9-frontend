import {GeneroEnum} from './enumeracao/genero.enum';

export class Paciente {

  id: number;

  nome: string;

  nomeMae: string;

  genero: GeneroEnum;

  nascimento: Date;

  rg: number;

  cpf: number;

  endereco: string;
}
