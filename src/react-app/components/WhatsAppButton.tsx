import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '5595991597963'; // Número sem espaços e caracteres especiais
  const message = 'Olá! Gostaria de saber mais sobre o CIENTEC-RR.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 group animate-bounce-slow"
      aria-label="Fale conosco no WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" fill="currentColor" />
    </a>
  );
}
