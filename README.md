# Contact B2B - MVP Marketplace para Lojistas

![Contact B2B](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop&q=80)

> **Plataforma B2B para compartilhamento e negociação de estoques de produtos eletrônicos entre lojistas**

## 📋 Visão Geral

Contact B2B é um marketplace que conecta lojistas para compartilhamento e negociação de estoques de produtos eletrônicos (celulares, notebooks e acessórios). Esta é a implementação do MVP (Minimum Viable Product) para validação do conceito.

### 🎯 Objetivos do MVP
- ✅ Permitir publicação de produtos pelos lojistas
- ✅ Criar feed público de produtos disponíveis
- ✅ Implementar sistema de filtros avançados
- ✅ Facilitar contato entre lojistas interessados
- ✅ Sistema de gestão de perfil e produtos

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 15.5.4** - Framework React com SSR
- **React 19.1.0** - Biblioteca para interfaces
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones
- **Headless UI** - Componentes acessíveis

### Design System
- **Gradientes inspirados na tela de referência** (azul/roxo/verde)
- **Glass morphism** e efeitos modernos
- **Responsivo mobile-first**
- **Animações suaves** e micro-interações

## 🎨 Design e Interface

### Paleta de Cores
```css
/* Gradiente Principal */
--primary-gradient: linear-gradient(135deg, #14b8a6 0%, #3b82f6 50%, #8b5cf6 100%);

/* Cores Principais */
--primary-teal: #14b8a6;
--primary-blue: #3b82f6;
--primary-purple: #8b5cf6;
```

### Características do Design
- **Inspirado na tela de login fornecida** com gradientes suaves
- **Interface moderna** com glass morphism e sombras
- **Componentes reutilizáveis** seguindo design system
- **Acessibilidade** com foco e navegação por teclado
- **Responsividade** completa para todos os dispositivos

## 📦 Funcionalidades Implementadas

### 🔐 Autenticação
- **Login/Registro** com validação em tempo real
- **Persistência** via localStorage
- **Redirecionamento** automático baseado no status

### 🏪 Gestão de Produtos
- **Publicação** com upload múltiplo de imagens
- **Listagem** com cards visuais e informações detalhadas
- **Filtros avançados** por localização, preço, categoria
- **Busca textual** em tempo real
- **Gestão de status** (disponível, reservado, vendido)

### 👤 Perfil do Lojista
- **Edição de dados** pessoais e empresa
- **Alteração de senha** com validação
- **Histórico da conta** e informações

### 📱 Interface Responsiva
- **Header dinâmico** com navegação adaptável
- **Sidebar de filtros** retrátil no mobile
- **Cards de produto** otimizados para touch
- **Modais** para detalhes e ações

## 🚦 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/mvp-contact

# Entre no diretório
cd mvp-contact

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### Acessar a aplicação
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🔑 Credenciais de Demo

Para testar a aplicação, use as seguintes credenciais:

```
Email: joao@loja.com
Senha: senha123
```

Ou crie uma nova conta através da página de registro.

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Pages (App Router)
│   ├── dashboard/         # Feed de produtos
│   ├── login/            # Página de login
│   ├── register/         # Cadastro de usuário
│   ├── publicar/         # Publicação de produtos
│   ├── meus-produtos/    # Gestão de produtos
│   └── perfil/          # Perfil do lojista
├── components/           # Componentes reutilizáveis
│   ├── ui/              # Componentes base (Button, Input, Card, Modal)
│   ├── layout/          # Layout (Header, Footer)
│   └── produto/         # Componentes de produto
├── hooks/               # Custom hooks
│   └── useAuth.tsx      # Context de autenticação
├── lib/                 # Utilitários
│   ├── utils.ts         # Funções auxiliares
│   └── mockData.ts      # Dados de desenvolvimento
└── types/               # Definições TypeScript
    └── index.ts         # Interfaces e tipos
```

## 📊 Dados Mock

O sistema utiliza dados mockados para desenvolvimento:

### Lojistas
- **João Silva** (Tech Store SP) - São Paulo/SP
- **Maria Santos** (Eletro Shop RJ) - Rio de Janeiro/RJ  
- **Pedro Costa** (Digitech MG) - Belo Horizonte/MG

### Produtos
- **Celulares**: iPhone 15 Pro Max, Samsung Galaxy S24 Ultra
- **Notebooks**: MacBook Air M2, Dell XPS 13, Lenovo ThinkPad
- **Acessórios**: AirPods Pro, Mouse Logitech, Carregadores

## 🎯 Próximos Passos (Roadmap)

### Fase 2 - Backend Integration
- [ ] API Spring Boot
- [ ] Banco PostgreSQL
- [ ] Autenticação JWT real
- [ ] Upload de imagens (AWS S3)

### Fase 3 - Funcionalidades Avançadas
- [ ] Sistema de notificações
- [ ] Chat entre lojistas
- [ ] Histórico de transações
- [ ] Analytics e relatórios

### Fase 4 - Melhorias
- [ ] Busca por geolocalização
- [ ] Sistema de avaliações
- [ ] APP mobile (React Native)
- [ ] Integração com marketplaces

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvimento

Desenvolvido seguindo as melhores práticas de:
- **Clean Code** e princípios SOLID
- **Design System** consistente
- **Responsividade** e acessibilidade
- **Performance** otimizada
- **TypeScript** para type safety

---

**Contact B2B MVP** - Conectando lojistas, impulsionando negócios 🚀
