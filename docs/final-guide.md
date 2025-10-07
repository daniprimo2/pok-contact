---
id: final
title: Final Guide
specVersion: 1.0
generatedAt: 2025-10-03T20:36:05.075Z
scope:
  domain: web
  language: web
  framework: react
  architecture: ssr
  version:
    java: 
    python: 
mustIncludeAnchors:
  - global.agent-folder
  - global.agent-folder.precheck
  - global.agent-folder.postchange-trigger
  - global.anti-duplication
  - global.decision-versioning
  - global.comments-docs
  - global.privacy
  - global.process-analysis
index:
  anchors:
    - { id: "global.agent-folder", path: "# [global.agent-folder]" }
    - { id: "global.agent-folder.atomicity", path: "# [global.agent-folder.atomicity]" }
    - { id: "global.agent-folder.auto-detect", path: "# [global.agent-folder.auto-detect]" }
    - { id: "global.agent-folder.blocking-policy", path: "# [global.agent-folder.blocking-policy]" }
    - { id: "global.agent-folder.edge-cases", path: "# [global.agent-folder.edge-cases]" }
    - { id: "global.agent-folder.error-handling", path: "# [global.agent-folder.error-handling]" }
    - { id: "global.agent-folder.examples", path: "# [global.agent-folder.examples]" }
    - { id: "global.agent-folder.fs-compat", path: "# [global.agent-folder.fs-compat]" }
    - { id: "global.agent-folder.ids", path: "# [global.agent-folder.ids]" }
    - { id: "global.agent-folder.ids.determinism", path: "# [global.agent-folder.ids.determinism]" }
    - { id: "global.agent-folder.mapping", path: "# [global.agent-folder.mapping]" }
    - { id: "global.agent-folder.pendencias", path: "# [global.agent-folder.pendencias]" }
    - { id: "global.agent-folder.postchange-trigger", path: "# [global.agent-folder.postchange-trigger]" }
    - { id: "global.agent-folder.precheck", path: "# [global.agent-folder.precheck]" }
    - { id: "global.agent-folder.schema-versioning", path: "# [global.agent-folder.schema-versioning]" }
    - { id: "global.agent-folder.schemas", path: "# [global.agent-folder.schemas]" }
    - { id: "global.agent-folder.security", path: "# [global.agent-folder.security]" }
    - { id: "global.agent-folder.sop", path: "# [global.agent-folder.sop]" }
    - { id: "global.agent-folder.sync-command", path: "# [global.agent-folder.sync-command]" }
    - { id: "global.agent-folder.sync-command.invoke", path: "# [global.agent-folder.sync-command.invoke]" }
    - { id: "global.anti-duplication", path: "# [global.anti-duplication]" }
    - { id: "global.comments-docs", path: "# [global.comments-docs]" }
    - { id: "global.decision-adr", path: "# [global.decision-adr]" }
    - { id: "global.decision-versioning", path: "# [global.decision-versioning]" }
    - { id: "global.privacy", path: "# [global.privacy]" }
    - { id: "global.process-analysis", path: "# [global.process-analysis]" }
    - { id: "global.process-analysis.steps", path: "# [global.process-analysis.steps]" }
    - { id: "web.arch.ssr", path: "# [web.arch.ssr]" }
    - { id: "web.arch.ssr.performance", path: "# [web.arch.ssr.performance]" }
    - { id: "web.arch.ssr.render", path: "# [web.arch.ssr.render]" }
    - { id: "web.css.bootstrap", path: "# [web.css.bootstrap]" }
    - { id: "web.css.bootstrap.a11y", path: "# [web.css.bootstrap.a11y]" }
    - { id: "web.css.bootstrap.setup", path: "# [web.css.bootstrap.setup]" }
    - { id: "web.stack.react", path: "# [web.stack.react]" }
    - { id: "web.stack.react.a11y", path: "# [web.stack.react.a11y]" }
    - { id: "web.stack.react.performance", path: "# [web.stack.react.performance]" }
    - { id: "web.stack.react.platform", path: "# [web.stack.react.platform]" }
    - { id: "web.stack.react.routing", path: "# [web.stack.react.routing]" }
    - { id: "web.stack.react.state", path: "# [web.stack.react.state]" }
    - { id: "web.stack.react.testing", path: "# [web.stack.react.testing]" }
    - { id: "final.immediate-actions", path: "# [final.immediate-actions]" }
    - { id: "final.introduction", path: "# [final.introduction]" }
    - { id: "final.validity", path: "# [final.validity]" }
---

# [final.introduction]
## Como usar este guia

- Este documento consolida as seções globais e específicas da seleção do usuário.
- Use o índice em `index.anchors` para saltar diretamente para a seção desejada.

<!-- REQUIRED: O gerador DEVE inserir aqui o conteúdo de docs/global/agent-folder.md -->

# [global.agent-folder]
## 🎯 Estrutura e responsabilidades do agente

**IMPORTANTE**: Você é um agente de desenvolvimento profissional. Siga estas diretrizes rigorosamente.

### 📁 Estrutura Obrigatória
- **`.agente/contexto.json`** - Contexto técnico do projeto
- **`.agente/contexto.md`** - Documentação legível do contexto
- **`.agente/decisoes.log`** - Log de todas as decisões tomadas
- **`.agente/pendencias.json`** - Lista de pendências e bloqueios
- **`.agente/rastreamento/*`** - Rastreamento de artefatos criados

### ⚠️ Regras Críticas
- **🚨 REGRA PRINCIPAL**: **NUNCA** interagir com Git sem autorização expressa do usuário
- **🚨 GIT**: A cada nova iteração com Git, **PERGUNTAR** e **REVALIDAR** novamente
- **NUNCA** sobrescreva arquivos sem autorização explícita
- **SEMPRE** mantenha JSON e MD consistentes
- **OBRIGATÓRIO** registrar decisões, inferências e pendências a cada iteração

### ✅ Checklist Obrigatório
- [ ] **🚨 GIT**: Verificar se há autorização expressa antes de qualquer operação Git
- [ ] **Ler `.agente/*`** antes de gerar qualquer código
- [ ] **Atualizar contexto** e decisões após cada passo
- [ ] **Bloquear implementação** se houver pendências abertas
- [ ] **Validar consistência** entre todos os arquivos de contexto

Ver também
- `# [global.anti-duplication]`
- `# [global.decision-versioning]`
- `# [global.comments-docs]`
- `# [global.process-analysis]`


# [global.agent-folder.sop]
## 🔄 Procedimento Operacional Padrão (SOP) - WORKFLOW OBRIGATÓRIO

**CRÍTICO**: Este fluxo é OBRIGATÓRIO a cada interação com o usuário. Não pule etapas.

### 🚨 **ETAPA 1: Pré-checagem (ANTES de responder)**
**Você DEVE executar esta etapa SEMPRE:**
- ✅ **🚨 GIT**: Verificar se há autorização expressa para operações Git
- ✅ Executar `# [global.agent-folder.precheck]` - verificar estrutura `.agente/`
- ✅ Aplicar `# [global.process-analysis]` - análise estruturada de 5 etapas
- ⚠️ **Se faltas ou pendências bloqueantes forem detectadas**: Responder com bloqueio e próxima ação objetiva

### 🎯 **ETAPA 2: Execução da ação solicitada**
**Apenas após a Etapa 1 ser concluída:**
- ✅ Validar pendências relacionadas; se bloqueado, **NÃO prosseguir**
- ✅ Implementar mudança mínima necessária (DRY, KISS, YAGNI)
- ✅ Seguir padrões de arquitetura e framework especificados

### 🔄 **ETAPA 3: Gatilho pós-implementação**
**IMEDIATAMENTE após qualquer mudança:**
- ✅ Executar `# [global.agent-folder.postchange-trigger]` - atualizar rastreamento
- ✅ Registrar todas as mudanças nos arquivos de contexto

### 📋 **ETAPA 4: Registro e validação**
**Antes de comunicar ao usuário:**
- ✅ Conferir `rastreamento/*` e `contexto.json` consistentes
- ✅ Adicionar linha em `decisoes.log` descrevendo a ação
- ✅ Validar que não há inconsistências

### 💬 **ETAPA 5: Comunicação ao usuário**
**Formato obrigatório da resposta:**
- 📝 **Resumo objetivo**: O que foi feito
- 🎯 **Impacto**: Como afeta o projeto
- ➡️ **Próximos passos**: Se houver (se não houver, informar "Concluído")


# [global.agent-folder.edge-cases]
## Casos-limite e tratamento

- `.agente/` ausente: criar via `# [global.agent-folder.sync-command]` (ramo de criação).
- Divergência entre código e `rastreamento/*`: marcar pendência (severity=medium|high) e não sobrescrever automaticamente.
- Decisão antiga conflitante: registrar conflito e sugerir alternativa; não invalidar sem confirmação.
- Entradas duplicadas em rastreamento: consolidar e marcar `status` mais restritivo até revisão.
- Arquivos corrompidos/JSON inválido: criar backup (`*.bak`) e regenerar a partir do estado do projeto; registrar ocorrência.


# [global.agent-folder.ids]
## Geração de IDs e ordenação de eventos

- `decisoes.log`: linha cronológica, timestamp ISO-8601 em UTC.
- `pendencias.json.items[].id`: `PEND-YYYY-NNNN` (sequencial diário ou global).
- Determinismo: o mesmo artefato não deve gerar múltiplas entradas idênticas; reutilizar a chave do artefato como índice lógico no `rastreamento`.


# [global.agent-folder.atomicity]
## Escrita atômica e segurança de I/O

- Escrever em arquivo temporário (`*.tmp`) e fazer `rename` atômico.
- Nunca truncar arquivos críticos sem backup imediato (`*.bak`).
- Operações: leitura → validação → escrita temporária → `fsync` → `rename`.


# [global.agent-folder.mapping]
## Mapeamento de artefatos → rastreamento

- Java
  - Entidade: classe de domínio sem dependências de framework → `entidades.json[ClassName]` com `package`, `fields`, `status`.
  - Adaptador REST: controllers/spring → `adaptadores.json[ControllerName]` com `type=rest`, `route`, `package`.
  - Teste: classes `*Test`/JUnit → `testes.json[TestName]` com `type=unit|integration`, `status`, `coverage?`.
- Python
  - Entidade: modelos/domínio puros → `entidades.json` com `module`, `fields`.
  - Adaptador: views/routers (Django/Flask/FastAPI) → `adaptadores.json` com `type=rest`, `route`.
  - Teste: `tests/*` (pytest/unittest) → `testes.json`.
- Web
  - Componentes/UI e rotas mapeadas como adaptadores `type=rest` (se API) ou `type=cli`/`type=frontend` (quando aplicável e previsto pelo projeto).


# [global.agent-folder.auto-detect]
## Heurísticas de auto-detecção (criação inicial)

- Linguagem/stack:
  - Java: `pom.xml`/`build.gradle`, `src/main/java`.
  - Python: `pyproject.toml`/`requirements.txt`, `src/` ou raiz de pacote.
  - Web: `package.json`, frameworks detectados por dependências.
- Arquitetura: presença de pastas `domain`, `application`, `adapter` (hexagonal); `controller`/`service`/`repository` (MVC).
- Infra: `Dockerfile`, `.github/workflows/*`, `.gitlab-ci.yml`.
- API: anotações/routers e arquivos OpenAPI.


# [global.agent-folder.blocking-policy]
## Política de bloqueio por severidade de pendência

- `high`: bloqueia geração/alteração de artefatos relacionados até resolução.
- `medium`: permite avanço controlado, mas exige confirmação antes de etapas de risco.
- `low`: não bloqueia, mas deve ser resolvida oportunamente.

Checklist
- [ ] Classificar severidade ao registrar pendência
- [ ] Comunicar bloqueio com ação sugerida
- [ ] Remover pendência ao resolver e registrar no `decisoes.log`

# [global.agent-folder.precheck]
## Pré-checagem obrigatória antes de qualquer resposta/ação

- Antes de responder ao usuário ou iniciar implementação, validar:
  - Existência da pasta `.agente/`.
  - Consistência mínima de `contexto.json` e `decisoes.log`.
  - Pendências em `pendencias.json` (bloquear se houver pendências críticas).

Checklist
- [ ] `.agente/` existe? Se não, preparar criação guiada
- [ ] `contexto.json` válido e coerente com o projeto
- [ ] Sem pendências bloqueantes


# [global.agent-folder.postchange-trigger]
## Gatilho após criação/alteração de artefatos

- Após implementar classe, método ou funcionalidade, acionar atualização de contexto:
  - Adicionar/atualizar entradas em `rastreamento/*` conforme tipo (entidade, adaptador, teste).
  - Registrar evento em `decisoes.log` (data, ação, artefato, evidência).
  - Ajustar `contexto.json` se novas tecnologias/decisões forem introduzidas.

Checklist
- [ ] Atualizar rastreamento do artefato criado/alterado
- [ ] Registrar ação no `decisoes.log`
- [ ] Revalidar consistência do `contexto.json`


# [global.agent-folder.sync-command]
## Comando "sincronizar contexto" — fluxo operacional

Objetivo: alinhar `.agente/` ao estado real do projeto quando solicitado pelo usuário.

- Se `.agente/` não existir:
  - Detectar stack/arquitetura/infra a partir do repositório.
  - Criar `.agente/` com `contexto.json/md`, `decisoes.log`, `pendencias.json`, `rastreamento/*`.
- Se `.agente/` existir:
  - Ler conteúdo atual e escanear o projeto (código, configs, pipelines).
  - Calcular diferenças e atualizar somente se houver consistência (sem sobrescrever decisões ativas sem justificativa).
  - Em caso de divergência relevante, registrar em `pendencias.json` e solicitar confirmação.

Checklist
- [ ] Pasta criada quando ausente com contexto mínimo
- [ ] Diferenças reconciliadas e registradas
- [ ] Divergências pendentes documentadas


# [global.agent-folder.examples]
## Exemplos de arquivos padronizados

### `.agente/contexto.json`
```json
{
  "language": "java",
  "framework": "spring-boot",
  "architecture": "hexagonal",
  "versions": {
    "java": "21"
  },
  "testing": {
    "unit": "junit5",
    "coverage_min": 80
  },
  "infrastructure": {
    "containers": true,
    "ci": "github-actions"
  },
  "api": {
    "style": "rest",
    "openapi": "3.1"
  },
  "updatedAt": "2025-01-18T10:00:00Z"
}
```

### `.agente/decisoes.log` (append-only)
```
[2025-01-18T10:01:12Z] infer: language=java (pom.xml)
[2025-01-18T10:02:05Z] adopt: architecture=hexagonal (user-confirmed)
[2025-01-18T10:05:30Z] create: domain entity Usuario (src/main/java/...)
[2025-01-18T10:06:00Z] update: contexto.json (java=21; openapi=3.1)
```

### `.agente/rastreamento/entidades.json`
```json
{
  "Usuario": {
    "package": "br.com.app.domain.usuario",
    "fields": ["id", "nome", "email"],
    "status": "complete"
  }
}
```

### `.agente/rastreamento/adaptadores.json`
```json
{
  "UsuarioController": {
    "type": "rest",
    "route": "/usuarios",
    "package": "br.com.app.adapter.controller",
    "status": "complete"
  }
}
```

### `.agente/rastreamento/testes.json`
```json
{
  "UsuarioServiceTest": {
    "type": "unit",
    "status": "implemented",
    "coverage": 92
  }
}
```


# [global.agent-folder.pendencias]
## `.agente/pendencias.json` — formato e exemplo

### Formato
```json
{
  "items": [
    {
      "id": "PEND-2025-0001",
      "title": "Definir SGBD padrão",
      "severity": "high", 
      "status": "open", 
      "createdAt": "2025-01-18T10:10:00Z",
      "context": {
        "area": "infra.database",
        "blockedActions": ["generate-repository", "run-migrations"]
      }
    }
  ]
}
```

### Exemplo
```json
{
  "items": [
    {
      "id": "PEND-2025-0002",
      "title": "Confirmar arquitetura: hexagonal",
      "severity": "medium",
      "status": "open",
      "createdAt": "2025-01-18T10:12:00Z",
      "context": {"area": "architecture"}
    }
  ]
}
```


# [global.agent-folder.schemas]
## Pseudo-JSON Schema para validação (referência)

### Schema: `contexto.json`
```json
{
  "type": "object",
  "required": ["language", "architecture", "updatedAt"],
  "properties": {
    "language": {"type": "string"},
    "framework": {"type": "string"},
    "architecture": {"type": "string", "enum": ["hexagonal", "mvc", "spa", "ssr", "microfrontends"]},
    "versions": {"type": "object"},
    "testing": {"type": "object"},
    "infrastructure": {"type": "object"},
    "api": {"type": "object"},
    "updatedAt": {"type": "string", "format": "date-time"}
  },
  "additionalProperties": true
}
```

### Schema: `rastreamento/entidades.json`
```json
{
  "type": "object",
  "additionalProperties": {
    "type": "object",
    "required": ["package", "fields", "status"],
    "properties": {
      "package": {"type": "string"},
      "fields": {"type": "array", "items": {"type": "string"}},
      "status": {"type": "string", "enum": ["incomplete", "complete"]}
    }
  }
}
```

### Schema: `rastreamento/adaptadores.json`
```json
{
  "type": "object",
  "additionalProperties": {
    "type": "object",
    "required": ["type", "package", "status"],
    "properties": {
      "type": {"type": "string", "enum": ["rest", "messaging", "persistence", "cli"]},
      "route": {"type": "string"},
      "package": {"type": "string"},
      "status": {"type": "string", "enum": ["incomplete", "complete"]}
    }
  }
}
```

### Schema: `rastreamento/testes.json`
```json
{
  "type": "object",
  "additionalProperties": {
    "type": "object",
    "required": ["type", "status"],
    "properties": {
      "type": {"type": "string", "enum": ["unit", "integration", "e2e"]},
      "status": {"type": "string", "enum": ["planned", "implemented"]},
      "coverage": {"type": "number", "minimum": 0, "maximum": 100}
    }
  }
}
```

### Formato: `decisoes.log`
```
[ISO-8601] <action>: <key>=<value> (<evidence|note>)
action ∈ {infer, adopt, create, update, block}
```


# [global.anti-duplication]
## Regras e fluxo

- Verificar `contexto.json`, `rastreamento/` e o repositório antes de criar artefatos.
- Em caso de conflito: sugerir reaproveitar/estender; nunca duplicar sem justificativa.
- Política de abortamento: registrar bloqueios em `decisoes.log`.

Checklist
- [ ] Checagens concluídas antes de criar/alterar artefatos
- [ ] Conflitos comunicados e registrados
- [ ] Rastreamento atualizado em cada iteração


# [global.decision-versioning]
## Sistema de versionamento de decisões

- Manter `.agente/decisoes/contexto-atual.json` e histórico `historico/`.
- Aplicar decisões ativas automaticamente; perguntar apenas o que é novo.

Checklist
- [ ] Decisões ativas consultadas antes de agir
- [ ] Novas decisões registradas com justificativa e impacto
- [ ] Conflitos entre decisões identificados e resolvidos


# [global.comments-docs]
## Comentários e documentação (JavaDoc/Docstring/OpenAPI)

- Evitar comentários em linha; priorizar nomes claros e documentação estruturada.
- APIs REST: OpenAPI 3.x obrigatório (anotações/geração automática quando disponível).

Checklist
- [ ] Documentar interfaces públicas e contratos
- [ ] Gerar/atualizar OpenAPI quando houver API
- [ ] Usar JavaDoc/Docstring conforme linguagem



# [global.agent-folder.error-handling]
## Tratamento de erros e integridade

- Qualquer escrita deve ser acompanhada de validação pós-escrita (read-back e parse/JSON.parse quando aplicável).
- Em falha de escrita/rename, criar backup imediato (`*.bak`) e manter o artefato anterior intacto.
- Manter logs de erro com mensagem, contexto e ação recomendada; nunca incluir dados sensíveis.
- Recuperação transacional: se uma etapa falhar, reverter alterações parciais e registrar pendência.

Checklist
- [ ] Validar conteúdo após escrita (read-back)
- [ ] Backup automático antes de alterações críticas
- [ ] Pendência criada quando a recuperação não for possível


# [global.agent-folder.fs-compat]
## Compatibilidade de filesystem (Windows/POSIX)

- Rename atômico: preferir `rename`/`move` sobre `write-in-place`; em POSIX, considerar `fsync` do arquivo e do diretório pai.
- Windows pode bloquear arquivos abertos por outros processos; repetir com backoff exponencial antes de falhar.
- Normalização de novas linhas e encoding: usar UTF-8 com BOM ausente; padronizar `\n`.

Checklist
- [ ] `fsync` (ou equivalente) no arquivo e diretório quando disponível
- [ ] Backoff em locks do Windows
- [ ] Encoding e novas linhas padronizados


# [global.agent-folder.schema-versioning]
## Versionamento de schemas e metadados

- Incluir `$schema` (URL de referência) e `schemaVersion` nos arquivos JSON controlados.
- Alterações incompatíveis exigem incremento de `schemaVersion` e rotina de migração registrada em `decisoes.log`.

Exemplo mínimo
```json
{
  "$schema": "https://example.com/schemas/contexto.schema.json",
  "schemaVersion": 1,
  "language": "java",
  "architecture": "hexagonal",
  "updatedAt": "2025-01-18T10:00:00Z"
}
```

Checklist
- [ ] `$schema` e `schemaVersion` presentes
- [ ] Migração documentada para mudanças incompatíveis


# [global.decision-adr]
## Registros de Decisão de Arquitetura (ADR — MADR)

- Manter ADRs em `.agente/decisoes/adr/` seguindo formato MADR (Context, Decision, Status, Consequences, Alternatives).
- Relacionar ADR a entradas de `decisoes.log` via ID/slug.
- Status recomendado: `proposed` → `accepted`/`rejected` → `superseded`.

Checklist
- [ ] ADR criado para decisões arquiteturais relevantes
- [ ] Status e consequências claros
- [ ] Link com `decisoes.log`


# [global.agent-folder.sync-command.invoke]
## Forma de invocação do comando "sincronizar contexto"

- Disparo por comando de usuário (texto): "sincronizar contexto".
- Opcional CLI: `rg-agent sync` (quando tooling estiver disponível).
- Pré-condições: repositório acessível; leitura non-invasive; executar dry-run primeiro e reportar difs.
- Política: atualizar somente quando consistente; divergências viram pendências com severidade adequada.

Checklist
- [ ] Dry-run executado e difs reportados
- [ ] Atualização somente quando consistente
- [ ] Pendências criadas para divergências


# [global.agent-folder.security]
## Segurança e privacidade (LGPD)

- Anonimizar dados pessoais em `rastreamento/*`, `decisoes.log` e exemplos.
- Evitar armazenar segredos/credenciais; usar referências a cofres/variáveis de ambiente.
- Controlar acesso à pasta `.agente/` conforme política do repositório; revisar PRs.

Checklist
- [ ] Sem dados sensíveis em logs/artefatos
- [ ] Segredos fora do repositório
- [ ] Revisões ativas para `.agente/`


# [global.agent-folder.ids.determinism]
## Determinismo na geração de IDs

- Formato: `PEND-YYYY-NNNN` para pendências; sequência monotônica por dia.
- Persistir contador em `.agente/counters.json` para resistir a reinícios; fallback: calcular a partir de itens existentes.
- Evitar colisões: verificar existência antes de confirmar o ID; em colisão, incrementar com backoff.

Checklist
- [ ] Contador persistido em `counters.json`
- [ ] Verificação de colisão antes de confirmar
- [ ] Reuso de chaves lógicas quando aplicável



<!-- REQUIRED: O gerador DEVE inserir aqui o conteúdo de docs/global/process-analysis.md -->

# [global.process-analysis]
## 🔍 Processo de Análise para Resolução de Problemas e Implementação

**OBRIGATÓRIO**: Este processo DEVE ser aplicado antes de qualquer implementação de código.

## 📋 Visão Geral

Este documento descreve o processo sistemático de análise e resolução de problemas técnicos, com foco em contextualização completa antes da implementação de soluções.

**IMPORTANTE**: Você DEVE seguir este processo de 5 etapas em TODAS as situações. Não implemente código sem completar a análise.

**🚨 REGRA CRÍTICA**: **NUNCA** interagir com Git sem autorização expressa do usuário. A cada nova iteração com Git, **PERGUNTAR** e **REVALIDAR** novamente.

## 🎯 Princípios Fundamentais

### 1. **Contexto Antes de Código**
- Sempre analisar o contexto completo antes de implementar
- Entender o fluxo de dados e dependências
- Mapear todos os componentes envolvidos

### 2. **Análise Estruturada**
- Dividir problemas complexos em partes menores
- Identificar causas raiz, não apenas sintomas
- Validar hipóteses antes de implementar

### 3. **Implementação Incremental**
- Implementar soluções em etapas pequenas e testáveis
- Validar cada etapa antes de prosseguir
- Manter rastreabilidade das decisões

# [global.process-analysis.steps]
## 🔍 Processo de Análise (5 Etapas OBRIGATÓRIAS)

**CRÍTICO**: Execute cada etapa na ordem. Não pule etapas.

### **🚨 ETAPA 1: Análise do Problema (OBRIGATÓRIA)**
**Você DEVE responder estas perguntas:**

```
1.0 🚨 GIT: Verificar autorização
    ✅ Há autorização expressa para operações Git?
    ✅ Se não houver, PERGUNTAR antes de prosseguir

1.1 Identificar o sintoma
    ✅ O que está acontecendo exatamente?
    ✅ Qual o comportamento esperado vs atual?
    ✅ Quando o problema ocorre?

1.2 Mapear o contexto
    ✅ Quais arquivos estão envolvidos?
    ✅ Qual o fluxo de execução?
    ✅ Quais dependências existem?
    ✅ Qual a arquitetura do sistema?

1.3 Analisar logs e erros
    ✅ Ler mensagens de erro completas
    ✅ Identificar stack traces
    ✅ Verificar logs de debug
    ✅ Buscar padrões de erro similares

1.4 🔍 ESCLARECER CONTEXTO (se necessário)
    ✅ Problema mal elaborado? Solicitar mais detalhes
    ✅ Falta de informações? Perguntar especificamente
    ✅ Contexto ambíguo? Pedir exemplos concretos
    ✅ Escopo indefinido? Delimitar o problema
    ✅ Prioridade não clara? Definir urgência
```

**Validação**: Você só pode prosseguir se conseguir responder TODAS as perguntas acima, incluindo a autorização Git E ter esclarecido qualquer ambiguidade.

### **🔍 ETAPA 2: Investigação Técnica (OBRIGATÓRIA)**
**Use as ferramentas disponíveis para investigar:**

```
2.1 Examinar código relacionado
    ✅ Ler arquivos envolvidos (use read_file)
    ✅ Entender estruturas de dados
    ✅ Mapear fluxos de controle
    ✅ Identificar pontos de falha

2.2 Verificar dependências
    ✅ Analisar imports e conexões (use grep)
    ✅ Verificar versões e compatibilidade
    ✅ Identificar componentes ausentes
    ✅ Validar configurações

2.3 Buscar padrões similares
    ✅ Como outros componentes fazem? (use codebase_search)
    ✅ Existem exemplos no código?
    ✅ Qual a arquitetura esperada?
    ✅ Há padrões estabelecidos?

2.4 🔍 INVESTIGAÇÃO EXTERNA (OBRIGATÓRIA se causa não encontrada)
    ✅ Pesquisar na web (use web_search) sobre o erro específico
    ✅ Consultar documentação oficial da tecnologia
    ✅ Buscar em fóruns (Stack Overflow, GitHub Issues)
    ✅ Verificar changelogs e breaking changes
    ✅ Procurar por bugs conhecidos e workarounds
    ✅ Analisar exemplos de código similares online

2.5 🎯 DIREÇÃO PROATIVA (quando usuário não sabe direcionar)
    ✅ Adicionar logs de debug estratégicos
    ✅ Implementar rastreabilidade de fluxo
    ✅ Criar pontos de verificação (checkpoints)
    ✅ Monitorar execução passo a passo
    ✅ Identificar onde o fluxo quebra
    ✅ Corrigir causa raiz baseada em evidências
```

**Validação**: Você deve ter uma compreensão completa do código E ter investigado externamente se a causa não foi encontrada internamente.

### **💡 ETAPA 3: Formulação de Hipóteses (OBRIGATÓRIA)**
**Pense sistematicamente sobre as possíveis causas:**

```
3.1 Identificar possíveis causas
    ✅ Listar TODAS as possibilidades (internas + externas)
    ✅ Priorizar por probabilidade
    ✅ Considerar cenários edge case
    ✅ Avaliar impactos de cada causa

3.2 Validar hipóteses
    ✅ Testar cada hipótese sistematicamente
    ✅ Usar logs para confirmar
    ✅ Descartar opções inválidas
    ✅ Documentar evidências

3.3 Definir causa raiz
    ✅ Identificar a causa principal
    ✅ Entender por que aconteceu
    ✅ Mapear impactos secundários
    ✅ Confirmar com evidências

3.4 🚨 SE CAUSA NÃO ENCONTRADA - ESCALAR INVESTIGAÇÃO
    ✅ Repetir investigação externa com termos mais específicos
    ✅ Consultar especialistas/community (se disponível)
    ✅ Verificar se é bug conhecido sem solução
    ✅ Considerar workarounds temporários
    ✅ Documentar limitações encontradas
```

**Validação**: Você deve ter identificado a causa raiz com evidências OU documentado claramente as limitações encontradas antes de prosseguir.

### **📋 ETAPA 4: Planejamento da Solução (OBRIGATÓRIA)**
**Planeje a implementação antes de codificar:**

```
4.1 Definir estratégia
    ✅ Qual abordagem usar?
    ✅ Quais alternativas existem?
    ✅ Qual o trade-off de cada opção?
    ✅ Qual abordagem é mais robusta?

4.2 Criar plano de implementação
    ✅ Dividir em etapas pequenas e testáveis
    ✅ Definir critérios de sucesso
    ✅ Identificar riscos e mitigações
    ✅ Estimar tempo e complexidade

4.3 Preparar testes
    ✅ Como validar a solução?
    ✅ Quais cenários testar?
    ✅ Como garantir regressão?
    ✅ Quais edge cases considerar?
```

**Validação**: Você deve ter um plano detalhado e testável antes de implementar.

### **🚀 ETAPA 5: Implementação e Validação (OBRIGATÓRIA)**
**Implemente seguindo o plano e valide cada passo:**

```
5.1 Implementar incrementalmente
    ✅ Uma etapa por vez
    ✅ Validar após cada mudança
    ✅ Manter logs de progresso
    ✅ Usar ferramentas de escrita (write, search_replace)

5.2 Testar completamente
    ✅ Cenários positivos e negativos
    ✅ Edge cases identificados
    ✅ Integração com outros componentes
    ✅ Validar que não quebrou nada existente

5.3 Documentar decisões
    ✅ Registrar mudanças feitas
    ✅ Explicar rationale
    ✅ Atualizar documentação
    ✅ Atualizar arquivos de contexto (.agente/)
```

**Validação**: Você deve ter implementado, testado e documentado completamente antes de finalizar.

## 🛠️ Ferramentas de Análise

### **Leitura de Código**
- **`read_file`**: Examinar arquivos completos ou seções específicas
- **`grep`**: Buscar padrões e conexões no código
- **`codebase_search`**: Busca semântica por funcionalidades

### **Rastreamento de Dependências**
- **`glob_file_search`**: Encontrar arquivos relacionados
- **`list_dir`**: Explorar estrutura de diretórios
- **Análise de imports**: Mapear dependências entre módulos

### **Investigação Externa (OBRIGATÓRIA)**
- **`web_search`**: Pesquisar na web sobre erros específicos
- **Documentação oficial**: Consultar docs da tecnologia
- **Fóruns e comunidades**: Stack Overflow, GitHub Issues, Reddit
- **Changelogs**: Verificar breaking changes e bugs conhecidos

### **Direção Proativa e Rastreabilidade**
- **Logs de debug**: Adicionar pontos estratégicos de monitoramento
- **Rastreabilidade**: Implementar checkpoints de execução
- **Análise de fluxo**: Mapear execução passo a passo
- **Evidências**: Coletar dados concretos para correção

### **Validação de Implementação**
- **`read_lints`**: Verificar qualidade do código
- **Testes incrementais**: Validar cada mudança
- **Logs de debug**: Rastrear execução

## 📊 Checklist de Análise

### **Antes de Implementar:**
- [ ] **Contexto esclarecido**: Problema bem definido e sem ambiguidades?
- [ ] **Contexto mapeado**: Entendi todos os componentes envolvidos?
- [ ] **Causa raiz identificada**: Sei exatamente o que está causando o problema?
- [ ] **Dependências verificadas**: Analisei todas as conexões e imports?
- [ ] **Investigação externa**: Pesquisei na web e documentação oficial?
- [ ] **Rastreabilidade preparada**: Tenho logs de debug e checkpoints?
- [ ] **Hipóteses validadas**: Testei minhas suposições?
- [ ] **Plano definido**: Tenho uma estratégia clara de implementação?

### **Durante a Implementação:**
- [ ] **Implementação incremental**: Estou fazendo mudanças pequenas e testáveis?
- [ ] **Validação contínua**: Estou testando após cada mudança?
- [ ] **Logs de debug ativos**: Estou monitorando execução em tempo real?
- [ ] **Checkpoints funcionando**: Estou rastreando o fluxo corretamente?
- [ ] **Logs mantidos**: Estou registrando o progresso e decisões?
- [ ] **Riscos monitorados**: Estou atento a possíveis problemas?

### **Após Implementação:**
- [ ] **Testes completos**: Validei todos os cenários?
- [ ] **Documentação atualizada**: Registrei as mudanças feitas?
- [ ] **Impactos verificados**: Confirmei que não quebrei nada?
- [ ] **Solução validada**: O problema foi realmente resolvido?

## 🎯 Exemplo Prático: Resolução do Erro de Sinal

### **Problema**: `AttributeError: 'LotterySelectorWithHistory' object has no attribute 'validation_error'`

### **Etapa 1: Análise do Problema**
```python
# Sintoma: Erro ao inicializar aplicação
# Contexto: PlayTab tentando conectar sinal inexistente
# Log: AttributeError específico sobre validation_error
```

### **Etapa 2: Investigação Técnica**
```python
# Examinar LotterySelectorWithHistory
grep "validation_error" lottery_selector_with_history.py
# Resultado: Sinal não existe

# Examinar HistoryUpload
grep "validation_error" history_uploader.py  
# Resultado: Sinal existe

# Examinar conexões em PlayTab
grep "validation_error" play_tab.py
# Resultado: Tentativa de conectar sinal inexistente
```

### **Etapa 3: Formulação de Hipóteses**
```python
# Hipótese 1: Sinal não foi declarado no wrapper
# Hipótese 2: Sinal não está sendo exposto corretamente
# Hipótese 3: Conexão está sendo feita incorretamente

# Validação: Hipótese 1 confirmada
```

### **Etapa 4: Planejamento da Solução**
```python
# Estratégia: Adicionar sinal validation_error ao wrapper
# Implementação:
#   1. Declarar sinal no LotterySelectorWithHistory
#   2. Atualizar documentação
#   3. Implementar forwarding no método de tratamento
#   4. Testar conexão
```

### **Etapa 5: Implementação e Validação**
```python
# Implementação incremental:
#   1. ✅ Adicionar sinal à documentação
#   2. ✅ Declarar Signal(str)
#   3. ✅ Implementar forwarding
#   4. ✅ Testar inicialização
#   5. ✅ Validar funcionamento completo
```

## 🚀 Benefícios do Processo

### **Para o Desenvolvedor:**
- **Reduz tentativa e erro**: Análise estruturada evita chutes
- **Aumenta confiança**: Entendimento completo do problema
- **Melhora qualidade**: Soluções mais robustas e testáveis

### **Para o Projeto:**
- **Menos bugs**: Problemas resolvidos na raiz
- **Código mais limpo**: Implementações bem pensadas
- **Manutenibilidade**: Decisões documentadas e rastreáveis

### **Para a Equipe:**
- **Comunicação clara**: Processo padronizado
- **Conhecimento compartilhado**: Decisões documentadas
- **Onboarding facilitado**: Processo replicável

## 📝 Regras de Ouro

### **1. Nunca Implemente Sem Entender**
- Se não entendeu completamente, pergunte
- Se tem dúvidas, investigue mais
- Se não tem certeza, valide primeiro

### **2. Sempre Analise o Contexto Completo**
- Não foque apenas no sintoma
- Mapeie todas as dependências
- Entenda o fluxo completo

### **3. Implemente Incrementalmente**
- Mudanças pequenas e testáveis
- Valide após cada etapa
- Mantenha rastreabilidade

### **4. Documente Decisões**
- Registre o que foi feito e por quê
- Atualize documentação
- Mantenha logs de progresso

### **5. Teste Completamente**
- Cenários positivos e negativos
- Edge cases identificados
- Integração com outros componentes

## ✅ Validação Rápida do Processo (antes de concluir)

- [ ] Evidências citadas (arquivos/linhas/anchors) estão referenciadas na resposta
- [ ] Contexto esclarecido (problema bem definido, sem ambiguidades)
- [ ] Investigação externa realizada (web_search, documentação, fóruns)
- [ ] Rastreabilidade implementada (logs de debug, checkpoints)
- [ ] Decisões registradas em `.agente/decisoes.log` e contexto atualizado
- [ ] Pendências em `.agente/pendencias.json` revisadas e sem bloqueios críticos

---

## 🎯 Conclusão

Este processo de análise sistemática garante que problemas sejam resolvidos de forma eficiente e robusta, evitando implementações baseadas em tentativa e erro. A chave é sempre **analisar completamente antes de implementar** e **implementar incrementalmente com validação contínua**.

**Lembre-se**: O conhecimento técnico sem processo estruturado pode levar a soluções inadequadas. O processo estruturado sem conhecimento técnico pode levar a soluções ineficientes. A combinação dos dois é o que gera soluções excelentes.


<!-- REQUIRED: O gerador DEVE inserir aqui o conteúdo de docs/global/privacy.md -->

# [global.privacy]
## 🔒 Privacidade e LGPD — Regras Globais (OBRIGATÓRIO)

**CRÍTICO**: Aplique estas diretrizes em TODO projeto que trate dados pessoais.

### 🎯 Princípios
- Minimização de dados: coletar e reter apenas o necessário
- Finalidade explícita: documentar a base legal e o propósito
- Transparência: registrar decisões e fluxos de dados
- Segurança: proteger dados em repouso e em trânsito

### ✅ Checklist LGPD
- [ ] Base legal documentada (contrato, consentimento, legítimo interesse, etc.)
- [ ] Minimização aplicada (campos e retenção)
- [ ] Políticas de retenção e descarte definidas
- [ ] Dados sensíveis mascarados/anonimizados em logs
- [ ] Acesso e trilhas de auditoria controlados
- [ ] Export/erase requests (DSAR) mapeados no processo

### 🧪 Validação
- [ ] Revisão de logs para evitar dados pessoais
- [ ] Testes para anonimização/pseudonimização
- [ ] Verificação de criptografia (em trânsito/em repouso)

Ver também
- `# [global.agent-folder.security]`
- `# [global.process-analysis]`




# [final.immediate-actions]
## 🛠️ Ação imediata (OBRIGATÓRIA)

- Criar/sincronizar a pasta `.agente/` conforme `# [global.agent-folder.sync-command]`
- Executar a pré-checagem `# [global.agent-folder.precheck]` antes de qualquer implementação
- Após qualquer alteração, acionar `# [global.agent-folder.postchange-trigger]`

<!-- Depois, inserir os blocos específicos selecionados pelo usuário -->

# <!-- desc: Biblioteca reativa para UI; foco em componentes, hooks e performance. -->
# [web.stack.react]
## Diretrizes

- Componentes funcionais, hooks, memoização controlada; roteamento e code-splitting.
- Estado: preferir libs leves (Zustand/Context) quando adequado; evitar global desnecessário.

Checklist
- [ ] Evitar renders desnecessários (memo/useMemo/useCallback)
- [ ] Lazy-loading para rotas/páginas pesadas
 
Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
- `# [global.agent-folder.precheck]`
- `# [global.agent-folder.postchange-trigger]`


# [web.stack.react.platform]
## Plataforma e compatibilidade

- React 18+; Vite/Next.js conforme necessidade; TypeScript recomendado.

Checklist
- [ ] TS habilitado
- [ ] Tooling (Vite/Next) definido


# [web.stack.react.state]
## Estado e arquitetura

- Context para escopo local; Zustand/Recoil para casos moderados; evitar global desnecessário.

Checklist
- [ ] Mapa de estado por domínio
- [ ] Evitar prop-drilling excessivo


# [web.stack.react.routing]
## Roteamento e code-splitting

- React Router/Next routes; lazy e suspense em páginas pesadas.

Checklist
- [ ] Rotas definidas e segmentadas
- [ ] Lazy aplicado


# [web.stack.react.a11y]
## Acessibilidade

- Semântica, foco, ARIA; testes com axe.

Checklist
- [ ] Audit de a11y
- [ ] Teclado e leitores de tela


# [web.stack.react.performance]
## Performance

- Memoização controlada; RSC/SSR quando apropriado; imagens otimizadas.

Checklist
- [ ] Profiling em componentes críticos
- [ ] Imagens otimizadas


# [web.stack.react.testing]
## Testes

- Vitest/Jest + Testing Library; e2e com Playwright.

Checklist
- [ ] Cobertura mínima
- [ ] E2E crítico





# <!-- desc: Renderização no servidor; melhor SEO e performance inicial. -->
# [web.arch.ssr]
## Diretrizes

- Server-Side Rendering para SEO/perf inicial; considerar streaming e cache.

Checklist
- [ ] Cache de páginas/respostas
- [ ] Estrutura para dados assíncronos no servidor
 
# [web.arch.ssr.render]
## Renderização e dados

- Streaming/partial hydration quando disponível; pré-busca de dados; erros controlados.

Checklist
- [ ] Streaming/hidratação configurados
- [ ] Estratégia de erro/timeout


# [web.arch.ssr.performance]
## Performance e SEO

- Cache (CDN/edge); tags meta/OG; sitemaps.

Checklist
- [ ] CDN configurada
- [ ] SEO básico garantido

Ver também
- `# [global.comments-docs]`
- `# [global.anti-duplication]`
- `# [global.agent-folder.precheck]`
- `# [global.agent-folder.postchange-trigger]`





# <!-- desc: Framework popular e responsivo; componentes prontos e grid flexível. -->
# [web.css.bootstrap]
## Diretrizes

- Usar grid/utilitários; customização via SASS; evitar override profundo.

Checklist
- [ ] Theming via variables
- [ ] Componentes reutilizados e acessíveis
 
Ver também
- `# [global.comments-docs]`
- `# [global.agent-folder.postchange-trigger]`


# [web.css.bootstrap.setup]
## Setup e theming

- Variáveis SASS/SCSS para tema; importar apenas o necessário; icons via pacote.

Checklist
- [ ] Variáveis definidas
- [ ] Import seletivo de componentes


# [web.css.bootstrap.a11y]
## Acessibilidade

- Usar componentes com ARIA correta; foco visível.

Checklist
- [ ] ARIA correta
- [ ] Foco destacado




# [final.validity]
## Validação do documento

- Este guia é válido somente se TODAS as âncoras de `mustIncludeAnchors` estiverem presentes no `index.anchors`.
- Se faltar alguma âncora obrigatória, o agente deve interromper, reportar o problema e solicitar a regeneração do documento final.

# [final.index.json]

```json
{
  "scope": {
    "domain": "web",
    "language": "web",
    "framework": "react",
    "architecture": "ssr",
    "version": {
      "java": "",
      "python": ""
    },
    "distribution": ""
  },
  "anchors": [
    {
      "id": "global.agent-folder",
      "path": "# [global.agent-folder]"
    },
    {
      "id": "global.agent-folder.atomicity",
      "path": "# [global.agent-folder.atomicity]"
    },
    {
      "id": "global.agent-folder.auto-detect",
      "path": "# [global.agent-folder.auto-detect]"
    },
    {
      "id": "global.agent-folder.blocking-policy",
      "path": "# [global.agent-folder.blocking-policy]"
    },
    {
      "id": "global.agent-folder.edge-cases",
      "path": "# [global.agent-folder.edge-cases]"
    },
    {
      "id": "global.agent-folder.error-handling",
      "path": "# [global.agent-folder.error-handling]"
    },
    {
      "id": "global.agent-folder.examples",
      "path": "# [global.agent-folder.examples]"
    },
    {
      "id": "global.agent-folder.fs-compat",
      "path": "# [global.agent-folder.fs-compat]"
    },
    {
      "id": "global.agent-folder.ids",
      "path": "# [global.agent-folder.ids]"
    },
    {
      "id": "global.agent-folder.ids.determinism",
      "path": "# [global.agent-folder.ids.determinism]"
    },
    {
      "id": "global.agent-folder.mapping",
      "path": "# [global.agent-folder.mapping]"
    },
    {
      "id": "global.agent-folder.pendencias",
      "path": "# [global.agent-folder.pendencias]"
    },
    {
      "id": "global.agent-folder.postchange-trigger",
      "path": "# [global.agent-folder.postchange-trigger]"
    },
    {
      "id": "global.agent-folder.precheck",
      "path": "# [global.agent-folder.precheck]"
    },
    {
      "id": "global.agent-folder.schema-versioning",
      "path": "# [global.agent-folder.schema-versioning]"
    },
    {
      "id": "global.agent-folder.schemas",
      "path": "# [global.agent-folder.schemas]"
    },
    {
      "id": "global.agent-folder.security",
      "path": "# [global.agent-folder.security]"
    },
    {
      "id": "global.agent-folder.sop",
      "path": "# [global.agent-folder.sop]"
    },
    {
      "id": "global.agent-folder.sync-command",
      "path": "# [global.agent-folder.sync-command]"
    },
    {
      "id": "global.agent-folder.sync-command.invoke",
      "path": "# [global.agent-folder.sync-command.invoke]"
    },
    {
      "id": "global.anti-duplication",
      "path": "# [global.anti-duplication]"
    },
    {
      "id": "global.comments-docs",
      "path": "# [global.comments-docs]"
    },
    {
      "id": "global.decision-adr",
      "path": "# [global.decision-adr]"
    },
    {
      "id": "global.decision-versioning",
      "path": "# [global.decision-versioning]"
    },
    {
      "id": "global.privacy",
      "path": "# [global.privacy]"
    },
    {
      "id": "global.process-analysis",
      "path": "# [global.process-analysis]"
    },
    {
      "id": "global.process-analysis.steps",
      "path": "# [global.process-analysis.steps]"
    },
    {
      "id": "web.arch.ssr",
      "path": "# [web.arch.ssr]"
    },
    {
      "id": "web.arch.ssr.performance",
      "path": "# [web.arch.ssr.performance]"
    },
    {
      "id": "web.arch.ssr.render",
      "path": "# [web.arch.ssr.render]"
    },
    {
      "id": "web.css.bootstrap",
      "path": "# [web.css.bootstrap]"
    },
    {
      "id": "web.css.bootstrap.a11y",
      "path": "# [web.css.bootstrap.a11y]"
    },
    {
      "id": "web.css.bootstrap.setup",
      "path": "# [web.css.bootstrap.setup]"
    },
    {
      "id": "web.stack.react",
      "path": "# [web.stack.react]"
    },
    {
      "id": "web.stack.react.a11y",
      "path": "# [web.stack.react.a11y]"
    },
    {
      "id": "web.stack.react.performance",
      "path": "# [web.stack.react.performance]"
    },
    {
      "id": "web.stack.react.platform",
      "path": "# [web.stack.react.platform]"
    },
    {
      "id": "web.stack.react.routing",
      "path": "# [web.stack.react.routing]"
    },
    {
      "id": "web.stack.react.state",
      "path": "# [web.stack.react.state]"
    },
    {
      "id": "web.stack.react.testing",
      "path": "# [web.stack.react.testing]"
    },
    {
      "id": "final.immediate-actions",
      "path": "# [final.immediate-actions]"
    },
    {
      "id": "final.introduction",
      "path": "# [final.introduction]"
    },
    {
      "id": "final.validity",
      "path": "# [final.validity]"
    }
  ]
}
```