import { ArrowRight, Sparkles, Target, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-complement/5 rounded-full blur-3xl"></div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-primary rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-accent-bright rounded-full"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-complement rotate-12"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-neutral-100 rounded-full mb-6">
              <Sparkles className="text-primary mr-2" size={16} />
              <span className="text-sm font-medium text-text">Inovação com Propósito</span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-dark mb-6 leading-tight">
              Liderança e Inovação para um{' '}
              <span className="text-gradient-primary">
                Futuro Sustentável
              </span>
            </h1>
            
            <p className="text-xl text-text/80 mb-8 leading-relaxed max-w-xl">
              Transformando comunidades através da educação, pesquisa e inovação social. 
              Juntos construímos um futuro mais justo, tecnológico e sustentável.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#sobre"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary rounded-full hover:bg-accent transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Conheça Nossa Missão
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#participar"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white border-2 border-primary rounded-full hover:bg-neutral-100 transition-all duration-300"
              >
                Como Participar
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-neutral-200">
              <div>
                <div className="flex items-center mb-2">
                  <Target className="text-primary mr-2" size={20} />
                  <p className="text-3xl font-bold text-primary-dark">50+</p>
                </div>
                <p className="text-sm text-text/70">Projetos Ativos</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Users className="text-accent mr-2" size={20} />
                  <p className="text-3xl font-bold text-primary-dark">5K+</p>
                </div>
                <p className="text-sm text-text/70">Vidas Impactadas</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Sparkles className="text-complement mr-2" size={20} />
                  <p className="text-3xl font-bold text-primary-dark">15+</p>
                </div>
                <p className="text-sm text-text/70">Anos de Experiência</p>
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Main circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-accent/20 rounded-full animate-float"></div>
              
              {/* Floating cards */}
              <div className="absolute top-10 right-10 bg-white p-6 rounded-2xl shadow-xl border border-neutral-200 animate-float animation-delay-2000">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl mb-3 flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <p className="text-sm font-semibold text-text">Inovação Social</p>
              </div>
              
              <div className="absolute bottom-10 left-10 bg-white p-6 rounded-2xl shadow-xl border border-neutral-200 animate-float animation-delay-4000">
                <div className="w-12 h-12 bg-gradient-to-r from-complement to-complement-light rounded-xl mb-3 flex items-center justify-center">
                  <Sparkles className="text-white" size={24} />
                </div>
                <p className="text-sm font-semibold text-text">Sustentabilidade</p>
              </div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" 
                  alt="Team collaboration"
                  className="w-64 h-64 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
