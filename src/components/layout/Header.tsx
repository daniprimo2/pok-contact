'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  Smartphone, 
  Home, 
  Package, 
  PlusCircle, 
  User, 
  LogOut,
  Search,
  Bell
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';

interface HeaderProps {
  onSearchChange?: (search: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {
  const { lojista, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const navItems = [
    { 
      href: '/dashboard', 
      icon: Home, 
      label: 'Feed',
      active: pathname === '/dashboard'
    },
    { 
      href: '/meus-produtos', 
      icon: Package, 
      label: 'Meus Produtos',
      active: pathname === '/meus-produtos'
    },
    { 
      href: '/publicar', 
      icon: PlusCircle, 
      label: 'Publicar',
      active: pathname === '/publicar'
    },
    { 
      href: '/perfil', 
      icon: User, 
      label: 'Perfil',
      active: pathname === '/perfil'
    },
  ];

  return (
    <header className="bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-xl mr-3 shadow-md">
              <Smartphone className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gradient-text">Contact B2B</h1>
              <p className="text-xs text-slate-300">Marketplace para lojistas</p>
            </div>
          </div>

          {/* Search Bar (only on dashboard) */}
          {pathname === '/dashboard' && onSearchChange && (
            <div className="flex-1 max-w-lg mx-8 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent text-white placeholder-slate-400"
                />
              </div>
            </div>
          )}

          {/* Navigation & User Menu */}
          <div className="flex items-center space-x-4">
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.href}
                    variant={item.active ? "primary" : "ghost"}
                    size="sm"
                    onClick={() => router.push(item.href)}
                    className="flex items-center space-x-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden lg:block">{item.label}</span>
                  </Button>
                );
              })}
            </nav>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs"></span>
            </Button>

            {/* User Menu */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-white">{lojista?.nome}</p>
                <p className="text-xs text-slate-300">{lojista?.empresa}</p>
              </div>
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-medium text-sm">
                {lojista?.nome?.charAt(0).toUpperCase()}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-slate-800/50">
        <nav className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.href}
                variant={item.active ? "primary" : "ghost"}
                size="sm"
                onClick={() => router.push(item.href)}
                className="flex flex-col items-center space-y-1 px-2 py-1"
              >
                <Icon className="h-4 w-4" />
                <span className="text-xs">{item.label}</span>
              </Button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
