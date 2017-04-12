import { Aula, PlanoAula, Sala, Aluno } from './models';

export let aulas : Aula[] = 
[
  {
    id : 1,
    inicio : '08:00',
    fim : '09:10',
    materia : 'Matematica',
    salaId : 1,
    planoAulaIds : [1,2]
  },{
    id : 2,
    inicio : '09:20',
    fim : '10:40',
    materia : 'portugues',
    salaId : 2,
    planoAulaIds : [3]
  },{
    id : 3,
    inicio : '11:00',
    fim : '12:20',
    materia : 'Historia',
    salaId : 3,
    planoAulaIds : [4]
  }
]

export let planos : PlanoAula[] =
[
  {
    id : 1,
    inicio : '08:00',
    fim : '08:30',
    descricao : 'ensinar somar'
  },{
    id : 2,
    inicio : '08:30',
    fim : '09:10',
    descricao : 'ensinar multiplicar'
  },{
    id : 3,
    inicio : '09:20',
    fim : '10:40',
    descricao : 'verbos'
  },{
    id : 4,
    inicio : '11:00',
    fim : '12:20',
    descricao : 'Napoleão bonapart'
  }
]

export let alunos : Aluno[] =
[
  {
    id : 1,
    nome : 'joao' ,
    nascimento : '16/07/1992',
    responsavel : 'maria',
    contato : '62986453721',
    faltas : 2,
    ocorrencia : []
  },{
    id : 2,
    nome : 'roberto' ,
    nascimento : '23/07/1993',
    responsavel : 'neusa',
    contato : '62986453721',
    faltas : 0,
    ocorrencia : ['mechendo celular']
  },{
    id : 3,
    nome : 'lucas' ,
    nascimento : '10/07/1990',
    responsavel : 'carmem',
    contato : '62986453721',
    faltas : 5,
    ocorrencia : ['conversando muito']
  },{
    id : 4,
    nome : 'pablo' ,
    nascimento : '05/01/1992',
    responsavel : 'fatima',
    contato : '62986453721',
    faltas : 10,
    ocorrencia : ['ouvindo musica', 'mexendo celular']
  },{
    id : 5,
    nome : 'fernando' ,
    nascimento : '13/12/1991',
    responsavel : 'dora',
    contato : '62986453721',
    faltas : 0,
    ocorrencia : []
  }
]

export let salas : Sala[] =
[
  {
    id : 1,
    descricao : '6 ano B',
    alunosIds : [1,2]
  },{
    id : 2,
    descricao : '8 ano A',
    alunosIds : [3,4]
  },{
    id : 3,
    descricao : '9 ano A',
    alunosIds : [5,1]
  }
]