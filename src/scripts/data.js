export const turmas = [
  {
    turma: 'Hipátia',
    curso: 'JavaScript',
    inicio: '30/11/2022',
    término: '30/01/2023',
    numeroDeAlunos: 150,
    periodo: 'noturno',
    concluida: false,
  },
  {
    turma: 'Sibyla',
    curso: 'JavaScript',
    inicio: '30/10/2022',
    término: '30/12/2022',
    numeroDeAlunos: 200,
    periodo: 'integral',
    concluida: false,
  },
  {
    turma: 'Curie',
    curso: 'HTML e CSS',
    inicio: '15/09/2022',
    término: '15/10/2022',
    numeroDeAlunos: 180,
    periodo: 'noturno',
    concluida: true,
  },
  {
    turma: 'Zhenyi',
    curso: 'HTML e CSS',
    inicio: '01/11/2022',
    término: '01/01/2023',
    numeroDeAlunos: 80,
    periodo: 'integral',
    concluida: false,
  },
  {
    turma: 'Clarke',
    curso: 'HTML e CSS',
    inicio: '04/07/2022',
    término: '04/09/2022',
    numeroDeAlunos: 200,
    periodo: 'noturno',
    concluida: true,
  },
  {
    turma: 'Blackwell',
    curso: 'APIsRest',
    inicio: '20/03/2022',
    término: '20/06/2022',
    numeroDeAlunos: 100,
    periodo: 'integral',
    concluida: true,
  },
  {
    turma: 'Elion',
    curso: 'APIsRest',
    inicio: '12/01/2022',
    término: '12/06/2022',
    numeroDeAlunos: 200,
    periodo: 'noturno',
    concluida: true,
  },
  {
    turma: 'Burnell',
    curso: 'APIsRest',
    inicio: '18/10/2022',
    término: '18/04/2023',
    numeroDeAlunos: 90,
    periodo: 'integral',
    concluida: false,
  },
];

export const cursos = [
  {
    curso: 'HTML e CSS',
    descrição:
      'Maecenas ullamcorper, metus eu mattis tristique, ante metus ultrices ex, vel auctor tortor dolor nec dui. Nullam vestibulum eleifend ipsum elementum accumsan. Fusce tempus finibus odio a faucibus. Etiam justo ante, viverra ut iaculis vel, vulputate sed massa. Quisque tincidunt ultricies enim, ac',
    duração: '1 mês',
    valor: 500,
  },
  {
    curso: 'JavaScript',
    descrição:
      'Maecenas ullamcorper, metus eu mattis tristique, ante metus ultrices ex, vel auctor tortor dolor nec dui. Nullam vestibulum eleifend ipsum elementum accumsan. Fusce tempus finibus odio a faucibus. Etiam justo ante, viverra ut iaculis vel, vulputate sed massa. Quisque tincidunt ultricies enim, ac',
    duração: '2 meses',
    valor: 900,
  },
  {
    curso: 'APIsRest',
    descrição:
      'Maecenas ullamcorper, metus eu mattis tristique, ante metus ultrices ex, vel auctor tortor dolor nec dui. Nullam vestibulum eleifend ipsum elementum accumsan. Fusce tempus finibus odio a faucibus. Etiam justo ante, viverra ut iaculis vel, vulputate sed massa. Quisque tincidunt ultricies enim, ac',
    duração: '6 meses',
    valor: 2000,
  },
];

export const alunos = [
  {
    estudante: 'Chris Evans',
    turma: 'Hipátia',
    curso: 'JavaScript',
    valor: 900,
    numeroDeParcelas: 9,
    desconto: false,
    valorDaParcela: 100,
  },
  {
    estudante: 'Halle Berry',
    turma: 'Burnell',
    curso: 'APIsRest',
    valor: 2000,
    numeroDeParcelas: 4,
    desconto: false,
    valorDaParcela: 500,
  },
  {
    estudante: 'Lashana Lynch',
    turma: 'Zhenyi',
    curso: 'HTML e CSS',
    valor: 500,
    numeroDeParcelas: 0,
    desconto: true,
    valorDaParcela: 0,
  },
];
