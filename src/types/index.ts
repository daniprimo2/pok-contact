// Tipos principais do sistema Contact B2B

export interface Lojista {
  id: string;
  nome: string;
  email: string;
  empresa: string;
  telefone: string;
  cidade: string;
  estado: string;
  cep: string;
  createdAt: string;
  updatedAt: string;
  ativo: boolean;
}

export interface LojistaCreate {
  nome: string;
  email: string;
  senha: string;
  empresa: string;
  telefone: string;
  cidade: string;
  estado: string;
  cep: string;
}

export interface Produto {
  id: string;
  lojistaId: string;
  nome: string;
  descricao?: string;
  modelo: string;
  cor: string;
  preco: number;
  quantidade: number;
  status: 'disponivel' | 'vendido' | 'reservado';
  fotos: string[];
  categoria: 'celular' | 'notebook' | 'acessorio';
  createdAt: string;
  updatedAt: string;
  ativo: boolean;
  lojista?: Lojista;
}

export interface ProdutoCreate {
  nome: string;
  descricao?: string;
  modelo: string;
  cor: string;
  preco: number;
  quantidade: number;
  categoria: 'celular' | 'notebook' | 'acessorio';
  fotos: string[];
}

export interface ProdutoUpdate extends Partial<ProdutoCreate> {
  status?: 'disponivel' | 'vendido' | 'reservado';
  ativo?: boolean;
}

export interface FiltrosProdutos {
  cidade?: string;
  estado?: string;
  precoMin?: number;
  precoMax?: number;
  categoria?: string[];
  status?: 'disponivel' | 'vendido' | 'reservado';
  busca?: string;
}

export interface PaginacaoRequest {
  page?: number;
  limit?: number;
}

export interface PaginacaoResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface AuthResponse {
  token: string;
  lojista: Lojista;
}

export interface LoginCredentials {
  email: string;
  senha: string;
}

// Estados globais
export interface AuthState {
  lojista: Lojista | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface ProductsState {
  produtos: Produto[];
  filtros: FiltrosProdutos;
  loading: boolean;
  error: string | null;
  pagination: PaginacaoResponse<any>['pagination'] | null;
}

export interface UIState {
  sidebarOpen: boolean;
  loading: boolean;
  modals: {
    productDetails: boolean;
    contactModal: boolean;
  };
}

// Constantes
export const CATEGORIAS = [
  { value: 'celular', label: 'Celulares' },
  { value: 'notebook', label: 'Notebooks' },
  { value: 'acessorio', label: 'Acessórios' }
] as const;

export const STATUS_PRODUTO = [
  { value: 'disponivel', label: 'Disponível', color: 'text-success' },
  { value: 'vendido', label: 'Vendido', color: 'text-error' },
  { value: 'reservado', label: 'Reservado', color: 'text-warning' }
] as const;

export const ESTADOS_BRASIL = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 
  'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 
  'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
] as const;
