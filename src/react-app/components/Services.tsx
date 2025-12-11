import { BookOpen, Lightbulb, Users, FileText, Globe, Calendar, TrendingUp, Briefcase } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Educação & Pesquisa',
      description: 'Programas educacionais e pesquisas aplicadas que geram conhecimento e capacitam profissionais.',
      color: 'primary',
    },
    {
      icon: TrendingUp,
      title: 'Empreendedorismo',
      description: 'Apoio a empreendedores e startups com mentoria, capacitação e desenvolvimento de negócios.',
      color: 'accent',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Desenvolvimento de soluções inovadoras para desafios sociais, ambientais e econômicos.',
      color: 'primary-light',
    },
    {
      icon: Briefcase,
      title: 'Assessoria Técnica',
      description: 'Consultoria especializada em gestão, planejamento estratégico e desenvolvimento organizacional.',
      color: 'accent-bright',
    },
    {
      icon: Users,
      title: 'Projetos Sociais',
      description: 'Iniciativas voltadas para inclusão social, desenvolvimento comunitário e geração de impacto positivo.',
      color: 'complement',
    },
    {
      icon: FileText,
      title: 'Estudos Técnicos e Econômicos',
      description: 'Análises aprofundadas e estudos de viabilidade para projetos de desenvolvimento regional.',
      color: 'primary',
    },
    {
      icon: Calendar,
      title: 'Eventos',
      description: 'Organização de conferências, workshops e seminários sobre temas estratégicos e inovação.',
      color: 'accent',
    },
    {
      icon: Globe,
      title: 'Internacionalização',
      description: 'Conexões globais e parcerias internacionais para expandir horizontes e compartilhar conhecimento.',
      color: 'primary-light',
    },
  ];

  const colorClasses = {
    'primary': 'bg-primary',
    'accent': 'bg-accent',
    'primary-light': 'bg-primary-light',
    'accent-bright': 'bg-accent-bright',
    'complement': 'bg-complement',
  };

  return (
    <section id="areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-neutral-100 rounded-full border border-neutral-200 mb-6">
            <span className="text-sm font-semibold text-primary">Nossos Serviços</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto">
            Atuamos em diversas frentes para promover desenvolvimento sustentável e inovação social
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl border border-neutral-200 hover:border-primary-light hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 ${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
