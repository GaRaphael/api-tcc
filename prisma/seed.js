require('dotenv/config');
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL nao encontrada para executar o seed.');
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({
  adapter
});

const notices = [
  {
    title: 'Semana Academica de Sistemas de Informacao 2026',
    description: 'A coordenacao do curso de Sistemas de Informacao abre inscricoes para a Semana Academica com foco em engenharia de software, ciencia de dados e transformacao digital no setor publico.',
    image: null
  },
  {
    title: 'Edital de Iniciacao Cientifica em SI',
    description: 'Professores do departamento divulgam novo edital de iniciacao cientifica para alunos de Sistemas de Informacao com projetos em IA aplicada, seguranca e governo eletronico.',
    image: null
  },
  {
    title: 'Laboratorio de Redes com novos equipamentos',
    description: 'O laboratorio de redes do curso de SI recebeu novos roteadores e switches para fortalecer as aulas praticas de infraestrutura e administracao de sistemas.',
    image: null
  },
  {
    title: 'Monitoria de Banco de Dados aberta',
    description: 'Estao abertas as vagas de monitoria para a disciplina de Banco de Dados do curso de Sistemas de Informacao, com atendimento presencial e remoto no campus.',
    image: null
  },
  {
    title: 'Palestra sobre carreira em TI no servico publico',
    description: 'Ex-alunos de Sistemas de Informacao compartilham experiencias sobre atuacao em tribunais, institutos federais e orgaos de tecnologia do governo.',
    image: null
  },
  {
    title: 'Hackathon de solucoes para gestao universitaria',
    description: 'Equipes do curso de SI participam de hackathon interno para desenvolver solucoes de software voltadas para matricula, assistencia estudantil e comunicacao institucional.',
    image: null
  },
  {
    title: 'Atualizacao do PPC do curso de SI',
    description: 'A coordenacao informa que o Projeto Pedagogico do Curso de Sistemas de Informacao esta em revisao para incorporar competencias em cloud, dados e produto digital.',
    image: null
  },
  {
    title: 'Selecao de bolsistas para projeto de extensao',
    description: 'Projeto de extensao em inclusao digital seleciona estudantes de SI para atuar em capacitacoes com escolas publicas e comunidades locais.',
    image: null
  },
  {
    title: 'Calendario de TCC 2026.1 publicado',
    description: 'O colegiado de Sistemas de Informacao publica o calendario oficial de TCC com prazos de qualificacao, versao final e defesa publica.',
    image: null
  },
  {
    title: 'Parceria com Datacenter universitario',
    description: 'Nova parceria entre o curso de SI e o datacenter institucional permitira atividades praticas de DevOps, observabilidade e continuidade de servicos.',
    image: null
  }
];

const meetings = [
  {
    title: 'Reuniao de Abertura do Semestre de SI',
    subject: 'Planejamento Academico',
    description: 'Encontro entre coordenacao, docentes e representantes discentes para alinhar cronograma, disciplinas e acoes estrategicas do semestre.',
    location: 'Sala de Reunioes do Centro de Tecnologia',
    image: null
  },
  {
    title: 'Colegiado de Curso - Revisao de Ementas',
    subject: 'Atualizacao Curricular',
    description: 'Discussao sobre atualizacao das ementas de engenharia de software, banco de dados e governanca de TI.',
    location: 'Auditorio do Departamento de Computacao',
    image: null
  },
  {
    title: 'Comissao de TCC',
    subject: 'Acompanhamento de Trabalhos Finais',
    description: 'Reuniao para validar temas, orientacoes e cronograma das bancas de TCC de Sistemas de Informacao.',
    location: 'Sala 204 - Bloco de Informatica',
    image: null
  },
  {
    title: 'Reuniao com Egressos de SI',
    subject: 'Empregabilidade e Mercado',
    description: 'Debate sobre competencias tecnicas e comportamentais mais demandadas por empresas e instituicoes publicas.',
    location: 'Sala de Videoconferencia',
    image: null
  },
  {
    title: 'Planejamento da Semana Academica',
    subject: 'Eventos e Extensao',
    description: 'Definicao de programacao, trilhas tematicas e convidados para a Semana Academica de Sistemas de Informacao.',
    location: 'Nucleo de Eventos do Campus',
    image: null
  },
  {
    title: 'Reuniao do PET Computacao e SI',
    subject: 'Projetos de Ensino',
    description: 'Alinhamento de oficinas, grupos de estudo e acoes de apoio aos alunos ingressantes do curso.',
    location: 'Laboratorio 3',
    image: null
  },
  {
    title: 'Comissao de Estagio Supervisionado',
    subject: 'Integracao Universidade-Empresa',
    description: 'Revisao de convenios e fluxo de documentacao para estagios obrigatorios e nao obrigatorios.',
    location: 'Sala da Coordenacao de Estagios',
    image: null
  },
  {
    title: 'Reuniao de Infraestrutura de Laboratorios',
    subject: 'Modernizacao Tecnologica',
    description: 'Levantamento de necessidades de hardware e software para os laboratorios utilizados no curso de SI.',
    location: 'Laboratorio de Redes',
    image: null
  },
  {
    title: 'Conselho de Curso com Representacao Discente',
    subject: 'Qualidade do Ensino',
    description: 'Discussao de indicadores de evasao, retencao e propostas de melhoria para acompanhamento academico.',
    location: 'Sala do Conselho',
    image: null
  },
  {
    title: 'Reuniao de Pesquisa Aplicada em Governo Digital',
    subject: 'Inovacao e Setor Publico',
    description: 'Planejamento de projetos interdisciplinares para desenvolvimento de plataformas digitais para orgaos publicos.',
    location: 'Hub de Inovacao da Universidade',
    image: null
  }
];

const topics = [
  {
    title: 'Sugestoes para fortalecer o laboratorio de software',
    description: 'Quais ferramentas e melhorias de infraestrutura ajudariam mais nas disciplinas praticas de programacao e engenharia de software?'
  },
  {
    title: 'Proposta de trilha em ciencia de dados no curso',
    description: 'Como organizar disciplinas optativas e atividades complementares para quem quer seguir carreira em dados e IA?'
  },
  {
    title: 'Integracao entre ensino, pesquisa e extensao em SI',
    description: 'Quais iniciativas podem aproximar projetos de pesquisa das demandas reais da comunidade e da gestao universitaria?'
  },
  {
    title: 'Melhorias no processo de orientacao de TCC',
    description: 'Quais ajustes no cronograma e nos checkpoints poderiam reduzir atrasos e aumentar a qualidade dos trabalhos finais?'
  },
  {
    title: 'Experiencias com estagio no setor publico',
    description: 'Compartilhe oportunidades, desafios e aprendizados de estagios em orgaos federais, estaduais e municipais.'
  },
  {
    title: 'Adocao de praticas DevOps nas disciplinas',
    description: 'Quais praticas de CI/CD, monitoramento e observabilidade deveriam ser incorporadas nas disciplinas de SI?'
  },
  {
    title: 'Mentoria entre veteranos e calouros',
    description: 'Como estruturar um programa de mentoria para apoiar estudantes ingressantes no curso de Sistemas de Informacao?'
  },
  {
    title: 'Uso responsavel de IA generativa na graduacao',
    description: 'Quais diretrizes podem equilibrar produtividade academica, etica e autoria em atividades com uso de IA?'
  },
  {
    title: 'Parcerias com empresas e instituicoes publicas',
    description: 'Que tipos de parcerias trariam mais impacto para estagios, projetos aplicados e insercao profissional dos estudantes?'
  },
  {
    title: 'Prioridades para atualizacao do curriculo de SI',
    description: 'Quais conteudos devem ganhar mais espaco no curriculo para formar profissionais preparados para o cenario atual de TI?'
  }
];

async function ensureTopicAuthor() {
  const existingUser = await prisma.user.findFirst({
    where: {
      email: 'coordenacao.si@universidade-federal.br'
    }
  });

  if (existingUser) {
    return existingUser.id;
  }

  const createdUser = await prisma.user.create({
    data: {
      name: 'Coordenacao Sistemas de Informacao',
      email: 'coordenacao.si@universidade-federal.br',
      password: 'seed_context_user'
    }
  });

  return createdUser.id;
}

async function main() {
  const topicAuthorId = await ensureTopicAuthor();

  await prisma.notice.createMany({
    data: notices
  });

  const today = new Date();
  const meetingsWithDate = meetings.map((meeting, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + (index + 1) * 7);

    return {
      ...meeting,
      date
    };
  });

  await prisma.meeting.createMany({
    data: meetingsWithDate
  });

  await prisma.topic.createMany({
    data: topics.map((topic) => ({
      ...topic,
      user_id: topicAuthorId
    }))
  });

  console.log('Cadastro em massa concluido com sucesso.');
  console.log(`Noticias criadas: ${notices.length}`);
  console.log(`Reunioes criadas: ${meetings.length}`);
  console.log(`Topicos criados: ${topics.length}`);
}

main()
  .catch((error) => {
    console.error('Erro ao executar seed em massa:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
