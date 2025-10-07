# Prompt para Documentação Técnica do MVP Contact B2B

Olá GitHub Copilot! Com base no contexto do projeto Contact B2B que estou desenvolvendo, preciso que você crie uma documentação técnica completa em formato Markdown. O projeto é um marketplace B2B para lojistas negociarem produtos eletrônicos (celulares, notebooks e acessórios).

## Contexto do Projeto:
- **Objetivo**: Conectar lojistas B2B para compartilhamento e negociação de estoques
- **MVP**: Versão para validação com funcionalidades essenciais
- **Stack**: React + Next.js (frontend), Java Spring Boot (backend futuro)
- **Produtos**: Celulares, notebooks e acessórios

## Funcionalidades Definidas:

### 1. Publicação de Produtos:
- Campos: nome, descrição, modelo, cor, preço, quantidade, fotos
- Lojista pode editar/remover publicações
- Status: disponível, vendido, reservado

### 2. Feed de Produtos:
- Catálogo público para todos os lojistas
- Filtros: localização (cidade/estado), faixa de preço
- Ordenação por data/preço

### 3. Contato:
- Sem chat integrado no MVP
- Informações de contato do lojista visíveis

## O que preciso que você gere:

1. **Modelagem de Dados Completa**:
   - Entidades principais com todos os atributos
   - Relacionamentos entre entidades
   - Tipos de dados e constraints
   - Índices sugeridos

2. **Diagramas Mermaid**:
   - Diagrama ER (Entidade-Relacionamento)
   - Diagrama de arquitetura do sistema
   - Fluxo de usuário principal
   - Diagrama de casos de uso

3. **Especificação da API REST**:
   - Endpoints principais
   - Métodos HTTP
   - Estrutura de request/response
   - Códigos de status

4. **Estrutura do Projeto Frontend**:
   - Organização de pastas
   - Componentes principais
   - Páginas/rotas
   - Estados globais necessários

5. **Casos de Uso Principais**:
   - Fluxo de cadastro de lojista
   - Fluxo de publicação de produto
   - Fluxo de busca e filtros
   - Fluxo de contato entre lojistas

6. **Requisitos Não-Funcionais**:
   - Performance esperada
   - Segurança básica
   - Escalabilidade inicial

Por favor, organize tudo em um documento Markdown bem estruturado com seções claras, tabelas quando necessário, e diagramas Mermaid inline. Foque na clareza técnica para facilitar o desenvolvimento do MVP.