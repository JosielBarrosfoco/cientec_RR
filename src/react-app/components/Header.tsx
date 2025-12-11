import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Diretoria', href: '#diretoria' },
    { name: 'Como Participar', href: '#participar' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/98 backdrop-blur-md border-b border-neutral-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-primary-dark">
                CienTec
              </h1>
              <p className="text-xs text-neutral-300 -mt-1">Inovação & Sustentabilidade</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-text hover:text-primary transition-colors rounded-lg hover:bg-neutral-100"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#participar"
              className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-primary rounded-full hover:bg-accent transition-all hover:shadow-lg"
            >
              Participe
              <ChevronRight className="ml-1" size={16} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text hover:text-primary p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-text hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#participar"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-primary rounded-full hover:bg-accent transition-all"
            >
              Participe
              <ChevronRight className="ml-1" size={16} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
