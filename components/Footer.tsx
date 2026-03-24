import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t-4 border-brand-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-brown text-brand-brown font-serif text-xl italic font-bold">
                BP
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-white leading-none tracking-tight">
                  BOTO PREMIUM
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                  Harmonização Facial & Estética
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
              Referência em estética de alta performance em São Paulo. Realçamos sua beleza natural com segurança e tecnologia.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/botopremium" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-brown transition-colors border border-white/10">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 font-serif tracking-wide">Acesso Rápido</h4>
            <ul className="space-y-3">
              <li><a href="#sobre" className="text-gray-400 hover:text-brand-brown transition-colors font-light">Sobre a Clínica</a></li>
              <li><a href="#tratamentos" className="text-gray-400 hover:text-brand-brown transition-colors font-light">Tratamentos</a></li>
              <li><a href="#equipe" className="text-gray-400 hover:text-brand-brown transition-colors font-light">Corpo Clínico</a></li>
              <li><a href="#localizacao" className="text-gray-400 hover:text-brand-brown transition-colors font-light">Localização</a></li>
            </ul>
          </div>

          {/* Especialidades */}
          <div>
            <h4 className="text-lg font-medium mb-6 font-serif tracking-wide">Especialidades</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 font-light">Harmonização Facial</li>
              <li className="text-gray-400 font-light">Toxina Botulínica</li>
              <li className="text-gray-400 font-light">Bioestimuladores</li>
              <li className="text-gray-400 font-light">Rinomodelação</li>
              <li className="text-gray-400 font-light">Preenchimento Labial</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-medium mb-6 font-serif tracking-wide">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-brown shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-light leading-relaxed">Av. Paulista, 1000<br/>Bela Vista, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-brown shrink-0" />
                <span className="text-gray-400 text-sm font-light">(11) 99911-2234</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left font-light">
            © {new Date().getFullYear()} Boto Premium. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
