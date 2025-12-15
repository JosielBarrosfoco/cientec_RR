import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full border border-neutral-200 mb-6">
            <span className="text-sm font-semibold text-primary">Entre em Contato</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Contato
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto">
            Estamos aqui para ouvir você. Entre em contato e vamos conversar sobre como podemos trabalhar juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-neutral-200">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">Endereço</h3>
                <p className="text-text/80 leading-relaxed">
                  Av. Brigadeiro Eduardo Gomes, 74<br />
                  Bairro dos Estados<br />
                  Boa Vista-Roraima<br />
                  CEP: 69.305-455
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-neutral-200">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">Telefone</h3>
                <p className="text-text/80">
                  +55 95 991597963
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-neutral-200">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">E-mail</h3>
                <p className="text-text/80">
                  cientecrr@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-neutral-200">
              <div className="w-12 h-12 bg-complement rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">Horário de Atendimento</h3>
                <p className="text-text/80">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-200">
            <h3 className="text-2xl font-bold text-primary-dark mb-6">Envie uma Mensagem</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-text mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-text mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-text mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-text mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center py-4 px-6 bg-primary text-white font-bold rounded-xl hover:bg-accent hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Enviar Mensagem
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-neutral-200 h-96 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8186!2d-60.6753!3d2.8235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNDknMjQuNiJOIDYwwrA0MCczMS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização CienTec"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
