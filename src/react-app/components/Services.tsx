import { BookOpen, Lightbulb, Sprout, FileText, Globe, Calendar, TrendingUp, Briefcase, MonitorSmartphone } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: BookOpen, title: 'Educação e Pesquisa', description: 'Capacitações, formação e produção de conhecimento aplicado às demandas regionais.', color: 'primary' },
    { icon: TrendingUp, title: 'Empreendedorismo', description: 'Formação empreendedora e estímulo a negócios sustentáveis em Roraima.', color: 'accent' },
    { icon: Lightbulb, title: 'Inovação', description: 'Conexão entre conhecimento científico, tecnologia e soluções para a sociedade.', color: 'primary-light' },
    { icon: Briefcase, title: 'Assessoria Técnica', description: 'Apoio técnico e orientação para melhorar processos, projetos e gestão.', color: 'accent-bright' },
    { icon: Sprout, title: 'Assistência Técnica Rural', description: 'Assistência Técnica e Extensão Rural (ATER), com acompanhamento no campo e apoio aos produtores.', color: 'complement' },
    { icon: FileText, title: 'Estudos Técnicos', description: 'Estudos e análises para subsidiar o planejamento e o desenvolvimento territorial.', color: 'primary' },
    { icon: Calendar, title: 'Eventos', description: 'Congressos, seminários e encontros para disseminar conhecimentos e conectar pessoas.', color: 'accent' },
    { icon: Globe, title: 'Internacionalização', description: 'Iniciativas de comércio exterior, integração fronteiriça e conexões com novos mercados.', color: 'primary-light' },
    { icon: MonitorSmartphone, title: 'Inserção Digital', description: 'Formação em ferramentas digitais, e-commerce e marketing digital para empreendedores.', color: 'complement' },
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
            <span className="text-sm font-semibold text-primary">Nossas Frentes</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto">
            Atuação em Roraima, integrando tecnologia, conhecimento, empreendedorismo e desenvolvimento rural.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
