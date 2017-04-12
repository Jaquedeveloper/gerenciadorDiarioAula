export class Aula{
  id : number;
  inicio : any;
  fim : any;
  materia : string;
  salaId : number;
  planoAulaIds : number[];
  dia? : any;
}

export class PlanoAula{
  id : number;
  inicio : any;
  fim : any;
  descricao : string;
}

export class Sala{
  id : number;
  descricao : string;
  alunosIds : number[];
}

export class Aluno{
  id : number;
  nome : string;
  nascimento : any;
  responsavel : string;
  contato : any;
  faltas : number;
  ocorrencia : string[];
}