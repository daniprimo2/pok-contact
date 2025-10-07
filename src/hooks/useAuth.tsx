'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import type { AuthState, Lojista } from '../types';
import { mockLogin, mockRegister } from '../lib/mockData';

type AuthAction = 
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: { token: string; lojista: Lojista } }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'CLEAR_ERROR' };

const initialState: AuthState = {
  lojista: null,
  token: null,
  loading: false,
  error: null,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { 
        ...state, 
        loading: false, 
        lojista: action.payload.lojista, 
        token: action.payload.token,
        error: null 
      };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'LOGOUT':
      return initialState;
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
}

interface AuthContextType extends AuthState {
  login: (email: string, senha: string) => Promise<void>;
  register: (dados: any) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

// Criar o contexto
const ContactAuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Recuperar dados do localStorage na inicialização
  useEffect(() => {
    const token = localStorage.getItem('contact_b2b_token');
    const lojistaData = localStorage.getItem('contact_b2b_lojista');
    
    if (token && lojistaData) {
      try {
        const lojista = JSON.parse(lojistaData);
        dispatch({ 
          type: 'LOGIN_SUCCESS', 
          payload: { token, lojista } 
        });
      } catch (error) {
        // Se houver erro no parse, limpar dados corrompidos
        localStorage.removeItem('contact_b2b_token');
        localStorage.removeItem('contact_b2b_lojista');
      }
    }
  }, []);

  const login = async (email: string, senha: string) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const response = await mockLogin(email, senha);
      
      // Salvar no localStorage
      localStorage.setItem('contact_b2b_token', response.token);
      localStorage.setItem('contact_b2b_lojista', JSON.stringify(response.lojista));
      
      dispatch({ 
        type: 'LOGIN_SUCCESS', 
        payload: response 
      });
    } catch (error) {
      dispatch({ 
        type: 'LOGIN_FAILURE', 
        payload: error instanceof Error ? error.message : 'Erro desconhecido' 
      });
    }
  };

  const register = async (dados: any) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const response = await mockRegister(dados);
      
      // Salvar no localStorage
      localStorage.setItem('contact_b2b_token', response.token);
      localStorage.setItem('contact_b2b_lojista', JSON.stringify(response.lojista));
      
      dispatch({ 
        type: 'LOGIN_SUCCESS', 
        payload: response 
      });
    } catch (error) {
      dispatch({ 
        type: 'LOGIN_FAILURE', 
        payload: error instanceof Error ? error.message : 'Erro desconhecido' 
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('contact_b2b_token');
    localStorage.removeItem('contact_b2b_lojista');
    dispatch({ type: 'LOGOUT' });
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const value = {
    ...state,
    login,
    register,
    logout,
    clearError
  };

  return (
    <ContactAuthContext.Provider value={value}>
      {children}
    </ContactAuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(ContactAuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}