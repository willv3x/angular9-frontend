import {GeneroEnum} from './enumeracao/genero.enum';

export class Paciente {

  id: number;

  nome: string;

  genero: GeneroEnum;

  nascimento: Date;
}
