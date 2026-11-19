import { Target, Eye, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full border border-neutral-200 mb-6">
            <span className="text-sm font-semibold text-primary">Quem Somos</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Sobre Nós
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            Fundado em 2024, o Centro de Inovação, Empreendedorismo e Tecnologia de Roraima (CIENTEC-RR) conecta produtores rurais, empreendedores e comunidades a conhecimento científico, capacitações e soluções de gestão.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-neutral-200 hover-lift">
            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Target className="text-white" size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-dark mb-4">Missão</h3>
            <p className="text-text/80 leading-relaxed">
              Tornar o conhecimento acessível e útil para todos, promovendo o desenvolvimento sustentável de Roraima.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-neutral-200 hover-lift">
            <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-white" size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-dark mb-4">Visão</h3>
            <p className="text-text/80 leading-relaxed">
              Ser reconhecido até 2030 como um centro de excelência em inovação, educação e empreendedorismo em Roraima e no Brasil, com impacto internacional, fomentando novos negócios, modelos sustentáveis e a troca de conhecimento.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-neutral-200 hover-lift">
            <div className="w-14 h-14 bg-complement rounded-xl flex items-center justify-center mb-6">
              <Heart className="text-white" size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-dark mb-4">Valores</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <p className="text-text/80">Inovação e Excelência</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                <p className="text-text/80">Sustentabilidade</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-complement rounded-full mr-3"></div>
                <p className="text-text/80">Ética e Transparência</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-light rounded-full mr-3"></div>
                <p className="text-text/80">Inclusão e Empreendedorismo e Desenvolvimento Regional</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent-bright rounded-full mr-3"></div>
                <p className="text-text/80">Colaboração</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
