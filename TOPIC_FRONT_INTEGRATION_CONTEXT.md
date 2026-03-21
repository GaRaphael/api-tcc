# Topic API - Contexto de Integracao Frontend

Objetivo deste arquivo:
- Servir como contrato unico entre backend e frontend para o modulo de topicos.
- Evitar retrabalho futuro na implementacao do front.
- Permitir que qualquer implementacao de UI (React, Next, Vue, etc.) conecte rapido e com baixo risco.

Base URL:
- http://localhost:3000

Autenticacao:
- Todos os endpoints exigem header Authorization.
- Formato: Authorization: Bearer TOKEN
- Sem token valido: 401 ou 403 (seguindo middleware atual do backend).

## Endpoints de Topic

### 1) Criar topico
- Metodo: POST
- URL: /topic
- Body:
{
  "title": "string",
  "description": "string"
}
- Regras:
  - user_id vem do token, nao enviar no body.
  - title e description sao obrigatorios.
- Sucesso:
  - 201
  - Retorna o topico criado.

### 2) Editar topico
- Metodo: PATCH
- URL: /topic/:id
- Body:
{
  "title": "string opcional",
  "description": "string opcional"
}
- Regras:
  - Precisa enviar ao menos title ou description.
  - Apenas dono do topico pode editar.
- Sucesso:
  - 200
  - Retorna topico atualizado.
- Falhas comuns:
  - 400: id invalido, topico nao encontrado, payload invalido.
  - 403: usuario nao eh dono.

### 3) Desativar topico
- Metodo: DELETE
- URL: /topic/:id
- Body: sem body
- Regras:
  - Soft delete (active = false).
  - Apenas dono pode desativar.
- Sucesso:
  - 200
  - Retorna status de desativacao.

### 4) Reagir no topico
- Metodo: POST
- URL: /topic/reaction
- Body:
{
  "topic_id": 1,
  "type": "like | dislike | clear"
}
- Regras:
  - Fluxo igual notice reaction (toggle/update).
  - clear remove a reacao ativa do usuario (soft remove).
- Sucesso:
  - 200
  - Retorna reacao criada/atualizada/desativada.

### 5) Comentar no topico
- Metodo: POST
- URL: /topic/comment
- Body:
{
  "topic_id": 1,
  "description": "string"
}
- Regras:
  - user_id vem do token.
- Sucesso:
  - 200
  - Retorna comentario criado.

### 6) Votar no topico (upsert)
- Metodo: POST
- URL: /topic/vote
- Body:
{
  "topic_id": 1,
  "type": "like | dislike"
}
- Regras:
  - Um voto por usuario por topico.
  - Se ja existir, atualiza (upsert).
- Sucesso:
  - 200
  - Retorna voto criado/atualizado.

### 7) Listar topicos ativos
- Metodo: GET
- URL: /topics
- Sucesso:
  - 200
  - Retorna lista completa para feed de topicos.
  - Cada item inclui:
    - dados do topico
    - bloco de votos (totais e lista)
    - bloco de comentarios (total e lista)
    - bloco de reacoes (totais e lista)

### 8) Buscar topico por id
- Metodo: GET
- URL: /topics/:id
- Sucesso:
  - 200
  - Retorna detalhes completos do topico com votos, comentarios e reacoes.
- Falhas:
  - 400 quando id invalido ou topico nao encontrado.

## Formato esperado da resposta de listagem/detalhe

Modelo pratico (shape simplificado):
{
  "id": 1,
  "title": "string",
  "description": "string",
  "user_id": 10,
  "created_by": "Nome do usuario",
  "active": true,
  "created_at": "ISO Date",
  "updated_at": "ISO Date",
  "votes": {
    "totalLikes": 10,
    "totalDislikes": 2,
    "data": [
      {
        "id": 1,
        "user_id": 10,
        "user_name": "string",
        "type": "like",
        "active": true,
        "created_at": "ISO Date",
        "updated_at": "ISO Date"
      }
    ]
  },
  "comments": {
    "total": 4,
    "data": [
      {
        "id": 1,
        "user_id": 10,
        "user_name": "string",
        "description": "string",
        "active": true,
        "created_at": "ISO Date",
        "updated_at": "ISO Date"
      }
    ]
  },
  "reactions": {
    "totalLikes": 3,
    "totalDislikes": 1,
    "data": [
      {
        "id": 1,
        "user_id": 10,
        "user_name": "string",
        "type": "like",
        "active": true,
        "created_at": "ISO Date",
        "updated_at": "ISO Date"
      }
    ]
  }
}

## Mapeamento direto para telas do frontend

Tela Feed de Topicos:
- Chamar GET /topics no carregamento.
- Renderizar card com title, description, created_by, created_at.
- Exibir contadores:
  - votos: votes.totalLikes e votes.totalDislikes
  - comentarios: comments.total
  - reacoes: reactions.totalLikes e reactions.totalDislikes

Tela Detalhe do Topico:
- Chamar GET /topics/:id ao abrir.
- Exibir comentarios usando comments.data.
- Exibir reacoes usando reactions.data.
- Exibir votos usando votes.data e totais.

Acoes do usuario na UI:
- Criar: POST /topic
- Editar (somente se user logado for owner): PATCH /topic/:id
- Desativar (somente owner): DELETE /topic/:id
- Reagir: POST /topic/reaction
- Comentar: POST /topic/comment
- Votar: POST /topic/vote

## Estrategia de estado recomendada no front

Lista:
- topicos: Topic[]
- loadingList: boolean
- errorList: string | null

Detalhe:
- topicDetail: Topic | null
- loadingDetail: boolean
- errorDetail: string | null

Mutacoes:
- creatingTopic, editingTopic, deletingTopic
- reactingTopic, commentingTopic, votingTopic

Boas praticas de UX:
- Aplicar atualizacao otimista em comentario, reacao e voto.
- Revalidar detalhe/lista apos mutacao para garantir consistencia.
- Desabilitar botoes durante requisicao para evitar clique duplicado.

## Tipagem util para o front (copiar para o projeto frontend)

type TopicReactionType = "like" | "dislike" | "clear";
type TopicVoteType = "like" | "dislike";

interface TopicReactionItem {
  id: number;
  user_id: number;
  user_name: string;
  type: "like" | "dislike";
  active: boolean;
  created_at: string;
  updated_at: string;
}

interface TopicCommentItem {
  id: number;
  user_id: number;
  user_name: string;
  description: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

interface TopicVoteItem {
  id: number;
  user_id: number;
  user_name: string;
  type: "like" | "dislike";
  active: boolean;
  created_at: string;
  updated_at: string;
}

interface Topic {
  id: number;
  title: string;
  description: string;
  user_id: number | null;
  created_by: string;
  active: boolean;
  created_at: string;
  updated_at: string;
  votes: {
    totalLikes: number;
    totalDislikes: number;
    data: TopicVoteItem[];
  };
  comments: {
    total: number;
    data: TopicCommentItem[];
  };
  reactions: {
    totalLikes: number;
    totalDislikes: number;
    data: TopicReactionItem[];
  };
}

## Riscos conhecidos e alinhamento

- Alguns endpoints legados do projeto possuem inconsistencias de nomenclatura; para topic foi seguido o padrao definido nesta documentacao.
- Ownership depende de user_id em topic; ja existe migration para adicionar esse campo.
- Se o frontend usar cache, invalidar chaves de lista e detalhe apos mutacoes.

## Dependencias desta documentacao

- Este arquivo deve ser usado junto com a documentacao de testes por curl:
  - TOPIC_ENDPOINTS_CURL.md

Fim.
