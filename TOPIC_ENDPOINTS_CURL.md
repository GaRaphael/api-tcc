# Topic Endpoints - CURL

Base URL: http://localhost:3000

## 1) Criar topico

```bash
curl --request POST \
--url http://localhost:3000/topic \
--header "Authorization: Bearer TOKEN" \
--header "Content-Type: application/json" \
--data '{
  "title": "Meu topico",
  "description": "Conteudo do topico"
}'
```

## 2) Editar topico

```bash
curl --request PATCH \
--url http://localhost:3000/topic/1 \
--header "Authorization: Bearer TOKEN" \
--header "Content-Type: application/json" \
--data '{
  "title": "Titulo atualizado",
  "description": "Conteudo atualizado"
}'
```

## 3) Desativar topico

```bash
curl --request DELETE \
--url http://localhost:3000/topic/1 \
--header "Authorization: Bearer TOKEN"
```

## 4) Reagir no topico (like/dislike)

```bash
curl --request POST \
--url http://localhost:3000/topic/reaction \
--header "Authorization: Bearer TOKEN" \
--header "Content-Type: application/json" \
--data '{
  "topic_id": 1,
  "type": "like"
}'
```

## 4.1) Limpar reacao (clear)

```bash
curl --request POST \
--url http://localhost:3000/topic/reaction \
--header "Authorization: Bearer TOKEN" \
--header "Content-Type: application/json" \
--data '{
  "topic_id": 1,
  "type": "clear"
}'
```

## 5) Comentar no topico

```bash
curl --request POST \
--url http://localhost:3000/topic/comment \
--header "Authorization: Bearer TOKEN" \
--header "Content-Type: application/json" \
--data '{
  "topic_id": 1,
  "description": "Meu comentario no topico"
}'
```

## 6) Votar no topico (upsert)

```bash
curl --request POST \
--url http://localhost:3000/topic/vote \
--header "Authorization: Bearer TOKEN" \
--header "Content-Type: application/json" \
--data '{
  "topic_id": 1,
  "type": "like"
}'
```

## 7) Listar topicos ativos

```bash
curl --request GET \
--url http://localhost:3000/topics \
--header "Authorization: Bearer TOKEN"
```

## 8) Buscar topico por ID

```bash
curl --request GET \
--url http://localhost:3000/topics/1 \
--header "Authorization: Bearer TOKEN"
```
