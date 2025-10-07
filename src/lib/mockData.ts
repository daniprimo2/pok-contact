import { Lojista, Produto } from '@/types';

import fotos from '../../public/assets/iphone-17-pro-max-laranja-cosmico.png';

export const mockLojistas: Lojista[] = [
  {
    id: '1',
    nome: 'João Silva',
    email: 'joao@loja.com',
    empresa: 'Tech Store SP',
    telefone: '(11) 99999-9999',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '01234-567',
    createdAt: '2025-01-01T10:00:00Z',
    updatedAt: '2025-01-01T10:00:00Z',
    ativo: true,
  },
  {
    id: '2',
    nome: 'Maria Santos',
    email: 'maria@eletroshop.com',
    empresa: 'Eletro Shop RJ',
    telefone: '(21) 88888-8888',
    cidade: 'Rio de Janeiro',
    estado: 'RJ',
    cep: '20000-000',
    createdAt: '2025-01-02T10:00:00Z',
    updatedAt: '2025-01-02T10:00:00Z',
    ativo: true,
  },
  {
    id: '3',
    nome: 'Pedro Costa',
    email: 'pedro@digitech.com',
    empresa: 'Digitech MG',
    telefone: '(31) 77777-7777',
    cidade: 'Belo Horizonte',
    estado: 'MG',
    cep: '30000-000',
    createdAt: '2025-01-03T10:00:00Z',
    updatedAt: '2025-01-03T10:00:00Z',
    ativo: true,
  },
];

export const mockProdutos: Produto[] = [
  {
    id: '1',
    lojistaId: '1',
    nome: 'iPhone 15 Pro',
    descricao: 'iPhone 15 Pro 128GB, Laranja Natural, novo na caixa lacrada com todos os acessórios originais',
    modelo: 'A3101',
    cor: 'Laranja Natural',
    preco: 6999.99,
    quantidade: 4,
    status: 'disponivel',
    fotos: [
      'https://images.unsplash.com/photo-1632633173522-35e36c80ae1e?w=400',
      'https://images.unsplash.com/photo-1664490669517-514922e45b6a?w=400',
    ],
    categoria: 'celular',
    createdAt: '2025-10-01T10:00:00Z',
    updatedAt: '2025-10-01T10:00:00Z',
    ativo: true,
    lojista: mockLojistas[0],
  },
  {
    id: '1a',
    lojistaId: '2',
    nome: 'iPhone 15 Pro Max Orange',
    descricao: 'iPhone 15 Pro Max 512GB cor Laranja, estado impecável, com caixa original, carregador e fones. Bateria 100%. Único dono.',
    modelo: 'A3101',
    cor: 'Laranja',
    preco: 8499.99,
    quantidade: 1,
    status: 'disponivel',
    fotos: [
      'https://images.unsplash.com/photo-1664491342951-85ce9c2e6915?w=400',
      'https://images.unsplash.com/photo-1632633173522-35e36c80ae1e?w=400',
    ],
    categoria: 'celular',
    createdAt: '2025-10-06T14:30:00Z',
    updatedAt: '2025-10-06T14:30:00Z',
    ativo: true,
    lojista: mockLojistas[1],
  },
  {
    id: '2',
    lojistaId: '1',
    nome: 'MacBook Air M2',
    descricao: 'MacBook Air 13" com chip M2, 8GB RAM, 256GB SSD, Cinza Espacial',
    modelo: 'MLY33BZ/A',
    cor: 'Cinza Espacial',
    preco: 8999.99,
    quantidade: 2,
    status: 'disponivel',
    fotos: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    ],
    categoria: 'notebook',
    createdAt: '2025-10-01T11:00:00Z',
    updatedAt: '2025-10-01T11:00:00Z',
    ativo: true,
    lojista: mockLojistas[0],
  },
  {
    id: '3',
    lojistaId: '2',
    nome: 'Samsung Galaxy S24 Ultra',
    descricao: 'Galaxy S24 Ultra 512GB, Preto Titânio, S Pen incluída',
    modelo: 'SM-S928B',
    cor: 'Preto Titânio',
    preco: 6499.99,
    quantidade: 5,
    status: 'disponivel',
    fotos: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
      'https://images.unsplash.com/photo-1607934811217-b9b7399a825d?w=400',
    ],
    categoria: 'celular',
    createdAt: '2025-10-01T12:00:00Z',
    updatedAt: '2025-10-01T12:00:00Z',
    ativo: true,
    lojista: mockLojistas[1],
  },
  {
    id: '3a',
    lojistaId: '3',
    nome: 'iPhone 15 Pro Laranja Premium',
    descricao: 'iPhone 15 Pro 256GB na cor Laranja Natural exclusiva. Aparelho seminovo, apenas 2 meses de uso, sem riscos ou marcas. Acompanha caixa, carregador USB-C, cabo e documentos. Bateria com saúde de 98%. Uma oportunidade única!',
    modelo: 'A3101',
    cor: 'Laranja Natural',
    preco: 7299.99,
    quantidade: 1,
    status: 'disponivel',
    fotos: [
      'https://images.unsplash.com/photo-1664491342951-85ce9c2e6915?w=400',
      'https://images.unsplash.com/photo-1632633173522-35e36c80ae1e?w=400',
    ],
    categoria: 'celular',
    createdAt: '2025-10-07T09:15:00Z',
    updatedAt: '2025-10-07T09:15:00Z',
    ativo: true,
    lojista: mockLojistas[2],
  },
  {
    id: '4',
    lojistaId: '2',
    nome: 'Dell XPS 13',
    descricao: 'Dell XPS 13 Plus, Intel i7 12ª geração, 16GB RAM, 512GB SSD',
    modelo: 'XPS-9320',
    cor: 'Prata',
    preco: 7299.99,
    quantidade: 1,
    status: 'disponivel',
    fotos: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    ],
    categoria: 'notebook',
    createdAt: '2025-10-01T13:00:00Z',
    updatedAt: '2025-10-01T13:00:00Z',
    ativo: true,
    lojista: mockLojistas[1],
  },
  {
    id: '5',
    lojistaId: '3',
    nome: 'AirPods Pro 2ª Geração',
    descricao: 'AirPods Pro com cancelamento ativo de ruído e case MagSafe',
    modelo: 'MTJV3AM/A',
    cor: 'Branco',
    preco: 1799.99,
    quantidade: 10,
    status: 'disponivel',
    fotos: [
      'https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?w=400',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400',
    ],
    categoria: 'acessorio',
    createdAt: '2025-10-01T14:00:00Z',
    updatedAt: '2025-10-01T14:00:00Z',
    ativo: true,
    lojista: mockLojistas[2],
  },
  {
    id: '6',
    lojistaId: '3',
    nome: 'Mouse Logitech MX Master 3S',
    descricao: 'Mouse wireless profissional com precisão de 8K DPI',
    modelo: 'MX-Master-3S',
    cor: 'Preto',
    preco: 649.99,
    quantidade: 15,
    status: 'disponivel',
    fotos: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
      'https://images.unsplash.com/photo-1563297007-0686b7003af7?w=400',
    ],
    categoria: 'acessorio',
    createdAt: '2025-10-01T15:00:00Z',
    updatedAt: '2025-10-01T15:00:00Z',
    ativo: true,
    lojista: mockLojistas[2],
  },
  {
    id: '7',
    lojistaId: '1',
    nome: 'Carregador MagSafe Apple',
    descricao: 'Carregador sem fio MagSafe original Apple para iPhone',
    modelo: 'MHXH3AM/A',
    cor: 'Branco',
    preco: 349.99,
    quantidade: 8,
    status: 'reservado',
    fotos: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
    ],
    categoria: 'acessorio',
    createdAt: '2025-10-01T16:00:00Z',
    updatedAt: '2025-10-01T16:00:00Z',
    ativo: true,
    lojista: mockLojistas[0],
  },
  {
    id: '8',
    lojistaId: '2',
    nome: 'Lenovo ThinkPad X1 Carbon',
    descricao: 'ThinkPad X1 Carbon Gen 11, Intel i7, 32GB RAM, 1TB SSD',
    modelo: 'X1-Carbon-G11',
    cor: 'Preto',
    preco: 12999.99,
    quantidade: 1,
    status: 'vendido',
    fotos: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400',
    ],
    categoria: 'notebook',
    createdAt: '2025-09-28T10:00:00Z',
    updatedAt: '2025-10-01T17:00:00Z',
    ativo: true,
    lojista: mockLojistas[1],
  }
];

// Função para simular API de login
export const mockLogin = async (email: string, senha: string): Promise<{ token: string; lojista: Lojista }> => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simula delay da API
  
  const lojista = mockLojistas.find(l => l.email === email);
  if (!lojista || senha !== 'senha123') {
    throw new Error('Email ou senha incorretos');
  }

  return {
    token: 'mock-jwt-token-12345',
    lojista
  };
};

// Função para simular criação de conta
export const mockRegister = async (dados: any): Promise<{ token: string; lojista: Lojista }> => {
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simula delay da API
  
  const existeEmail = mockLojistas.find(l => l.email === dados.email);
  if (existeEmail) {
    throw new Error('Este email já está cadastrado');
  }

  const novoLojista: Lojista = {
    id: (mockLojistas.length + 1).toString(),
    nome: dados.nome,
    email: dados.email,
    empresa: dados.empresa,
    telefone: dados.telefone,
    cidade: dados.cidade,
    estado: dados.estado,
    cep: dados.cep,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ativo: true,
  };

  mockLojistas.push(novoLojista);

  return {
    token: 'mock-jwt-token-' + novoLojista.id,
    lojista: novoLojista
  };
};
