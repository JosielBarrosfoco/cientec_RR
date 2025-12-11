import { Handshake, Heart, Briefcase, Users, DollarSign, ArrowRight } from 'lucide-react';

export default function Participate() {
  const ways = [
    {
      icon: Handshake,
      title: 'Torne-se Parceiro',
      description: 'Estabeleça parcerias estratégicas e colabore em projetos de impacto social e inovação.',
      cta: 'Saiba Mais',
    },
    {
      icon: Briefcase,
      title: 'Contrate Serviços',
      description: 'Utilize nossa expertise em assessoria técnica, estudos e desenvolvimento de projetos.',
      cta: 'Ver Serviços',
    },
    {
      icon: Users,
      title: 'Seja Voluntário',
      description: 'Contribua com seu tempo e conhecimento em projetos sociais e educacionais.',
      cta: 'Inscreva-se',
    },
    {
      icon: Heart,
      title: 'Apoie Projetos',
      description: 'Apoie iniciativas específicas que transformam vidas e comunidades.',
      cta: 'Conhecer Projetos',
    },
    {
      icon: DollarSign,
      title: 'Faça uma Doação',
      description: 'Contribua financeiramente para a continuidade de nossos programas e projetos.',
      cta: 'Doar Agora',
    },
  ];

  return (
    <section id="participar" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-neutral-100 rounded-full border border-neutral-200 mb-6">
            <span className="text-sm font-semibold text-primary">Faça Parte</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Como Participar
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto">
            Junte-se a nós na construção de um futuro mais sustentável e inovador
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-neutral-200 hover:border-primary-light hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary-light/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-primary group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-3">
                  {way.title}
                </h3>
                <p className="text-text/80 leading-relaxed mb-6">
                  {way.description}
                </p>
                <button className="inline-flex items-center text-primary hover:text-accent font-semibold transition-colors group">
                  {way.cta}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="relative bg-gradient-to-r from-primary to-accent rounded-3xl p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-complement rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative text-center text-white">
            <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Pronto para fazer a diferença?
            </h3>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos trabalhar juntos para transformar o futuro
            </p>
            <a
              href="#contato"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Fale Conosco
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
