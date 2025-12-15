import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/images/logo-cientec.png" 
                alt="CienTec - Centro de Inovação, Empreendedorismo e Tecnologia de Roraima" 
                className="h-12 md:h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Liderança e Inovação para um Futuro Sustentável. Transformando comunidades através da educação, 
              pesquisa e inovação social com impacto real e duradouro.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-light transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-light transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#sobre" className="text-white/80 hover:text-primary-light transition-colors">Sobre Nós</a></li>
              <li><a href="#areas" className="text-white/80 hover:text-primary-light transition-colors">Áreas de Atuação</a></li>
              <li><a href="#diretoria" className="text-white/80 hover:text-primary-light transition-colors">Diretoria</a></li>
              <li><a href="#participar" className="text-white/80 hover:text-primary-light transition-colors">Como Participar</a></li>
              <li><a href="#contato" className="text-white/80 hover:text-primary-light transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-primary-light flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">Av. Brigadeiro Eduardo Gomes, 74<br />Bairro dos Estados<br />Boa Vista-Roraima<br />CEP: 69.305-455</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-primary-light flex-shrink-0" />
                <span className="text-white/80 text-sm">+55 95 991597963</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-primary-light flex-shrink-0" />
                <span className="text-white/80 text-sm">cientecrr@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} CienTec. Todos os direitos reservados.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-primary-light transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary-light transition-colors">Termos de Uso</a>
              <span className="hidden md:inline">|</span>
              <a 
                href="https://portifolio-woad-iota.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                Criado por <span className="font-semibold">Josiel.dev</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
