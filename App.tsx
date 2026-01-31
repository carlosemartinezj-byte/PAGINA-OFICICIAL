import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Mail,
  Droplets,
  MessageCircle,
  Phone,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Zap,
  Sprout,
  Award,
  HardHat,
  User,
  ArrowUpRight,
  Timer,
  Wind,
  Target,
  Sparkles,
  Globe
} from 'lucide-react';
import InteractiveNodes from './components/InteractiveNodes';
import EngineeringCard from './components/EngineeringCard';

/**
 * CONFIGURACIÓN CENTRALIZADA
 */
const CONFIG = {
  // Logo actualizado con el nuevo enlace proporcionado
  logoUrl: "https://i.postimg.cc/qR5n2cwh/SYNC-PARTY-7.png",
  heroImageUrl: "https://i.postimg.cc/vTKXXxxz/DJI-Agras-T50-2.webp",
  formDroneUrl: "https://i.postimg.cc/ZKrS6vHB/T50-whitepropeller-moving-20240322-080084-T50.webp",
  whatsappNumber: "+593985226265",
  displayEmail: "fumiagridron@gmail.com",
  formspreeId: "mreeyvzq",
  // Metadatos SEO solicitados
  seoTitle: "FUMIAGRIDRON | Fumigacion Agricola en Ecuador",
  seoDescription: "FUMIAGRO Servicio de fumigación agrícola con drone, para todo tipo de cultivo. contáctanos: info@fumiagroec.com 0988713995.",
  siteUrl: "https://fumiagridron.lat"
};

const CULTIVOS = [
  "Banano", "Arroz", "Maíz", "Cacao", "Café", "Flores", "Aguacate",
  "Palma Africana", "Caña de Azúcar", "Papa", "Pitahaya", "Teca / Balsa", "Otros"
];

const PROVINCIAS = ["Guayas", "Los Ríos", "El Oro", "Manabí", "Esmeraldas", "Santa Elena", "Pichincha", "Loja", "Azuay"];

const COMPARATIVA_VISUAL = [
  {
    icon: Timer,
    title: "Ahorro de Tiempo",
    subtitle: "Operatividad Inmediata",
    dron: { val: "Despegue en 2 min", percent: 95, color: "from-amber-400 to-amber-600" },
    trad: { val: "Logística Pesada", percent: 25, color: "bg-slate-300" }
  },
  {
    icon: Target,
    title: "Precisión",
    subtitle: "Margen de Error",
    dron: { val: "±2 cm (RTK)", percent: 98, color: "from-emerald-500 to-green-700" },
    trad: { val: "Avioneta (±10m)", percent: 35, color: "bg-slate-300" }
  },
  {
    icon: Wind,
    title: "Impacto Ambiental",
    subtitle: "Deriva y Emisiones",
    dron: { val: "Cero Emisiones", percent: 100, color: "from-cyan-400 to-blue-600" },
    trad: { val: "Combustión Fósil", percent: 20, color: "bg-slate-300" }
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Removed mousePos state and handleHeroMouseMove as inline style attributes are disallowed.
  const heroImgRef = useRef<HTMLDivElement>(null); // Type for div element

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // 1. Configurar Título de la pestaña
    document.title = CONFIG.seoTitle;

    // 2. Actualizar o crear Meta Description para Google
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    // Fix: Assert metaDescription as HTMLMetaElement
    (metaDescription as HTMLMetaElement).content = CONFIG.seoDescription;

    // 3. Actualizar Favicon (Logo en la pestaña)
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    // Fix: Assert link as HTMLLinkElement
    (link as HTMLLinkElement).href = CONFIG.logoUrl;

    // 4. Agregar Link Canónico (Ayuda al Sitemap y SEO)
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    // Fix: Assert canonical as HTMLLinkElement
    (canonical as HTMLLinkElement).href = CONFIG.siteUrl;

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); // eslint-disable-line react-hooks/exhaustive-deps


  const services = [
    {
      icon: Droplets,
      title: "Fumigación agrícola con Dron",
      description: "Aplicación a cualquier cultivo con drones agrícolas.",
      color: "eng-orange"
    },
    {
      icon: ShieldCheck,
      title: "Asesoría técnica",
      description: "Consultoría especializada para optimizar sus cultivos y monitoreo de precisión.",
      color: "eng-yellow"
    },
    {
      icon: Sprout,
      title: "Venta de insumos agrícolas",
      description: "Suministro de productos de alta calidad diseñados para optimizar el rendimiento de su producción agrícola.",
      color: "eng-cyan"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#3A432E] font-sans selection:bg-[#FFAD1E] selection:text-white overflow-x-hidden">

      {/* WhatsApp Flotante */}
      <a
        href={`https://wa.me/${CONFIG.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] group"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity animate-pulse"></div>
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center">
          <MessageCircle size={32} />
        </div>
      </a>

      {/* Navegación */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className={`transition-all duration-700 rounded-2xl flex items-center justify-center overflow-hidden bg-white shadow-xl ${scrolled ? 'h-10 w-10' : 'h-16 w-16 md:h-20 md:w-20'}`}>
              <img src={CONFIG.logoUrl} alt="Logo" className="w-full h-full object-cover scale-110" />
            </div>
            <div className="flex flex-col">
              <span className={`font-black tracking-tighter uppercase leading-none transition-all duration-500 ${scrolled ? 'text-lg text-[#3A432E]' : 'text-2xl md:text-3xl text-white'}`}>
                FUMIAGRI<span className="text-[#FFAD1E]">DRON</span>
              </span>
              {!scrolled && <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#FFAD1E] animate-pulse">TECNOLOGIA DJI AGRAS</span>}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Inicio', 'Ventajas', 'Servicios'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-xs font-bold uppercase tracking-[0.2em] hover:text-[#FFAD1E] transition-all relative group ${scrolled ? 'text-[#3A432E]' : 'text-white/80'}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFAD1E] transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#solicitud" className="bg-[#FFAD1E] text-[#3A432E] px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95 border-2 border-[#FFAD1E]">
              Cotizar Ahora
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden p-2 transition-colors ${scrolled ? 'text-[#3A432E]' : 'text-white'}`}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-[#3A432E] flex items-center justify-center transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-10 text-center">
          {['Inicio', 'Ventajas', 'Servicios', 'Solicitud'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-black text-white uppercase tracking-tighter hover:text-[#FFAD1E] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center bg-[#3A432E] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={CONFIG.heroImageUrl}
            className="w-full h-full object-cover opacity-40 blur-[4px] brightness-[0.5]"
            alt="Fondo Dron"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3A432E] via-transparent to-[#3A432E]/40"></div>
        </div>

        <InteractiveNodes />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-20 w-full">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#FFAD1E] text-xs font-black uppercase tracking-[0.2em] animate-fade-in">
              <Sparkles size={16} /> Innovación en el campo
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white leading-[0.95] tracking-tighter uppercase drop-shadow-2xl">
              LO MEJOR PARA <br />
              TU <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFAD1E] to-amber-200">COSECHA</span>
            </h1>

            <p className="text-lg text-white/80 max-w-lg leading-relaxed font-medium border-l-2 border-[#FFAD1E] pl-8">
              Transformamos la agricultura tradicional con tecnología DJI Agras. Mayor precisión, menor costo y máximo respeto ambiental.
            </p>

            <div className="flex flex-wrap gap-6 pt-6">
              <a href="#solicitud" className="px-10 py-5 bg-[#FFAD1E] text-[#3A432E] rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-2xl flex items-center gap-3 group">
                Solicitar Servicio <ChevronRight className="group-hover:translate-x-2 transition-transform"/>
              </a>
              <div className="flex items-center gap-4 text-white/60">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <Wind size={20} className="animate-spin-slow" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Tecnología de<br/>vuelo autónomo</span>
              </div>
            </div>
          </div>

          <div
            className="relative group cursor-crosshair overflow-visible py-10"
            ref={heroImgRef}
          >
            {/* Removed dynamic blur circle due to inline style attribute restriction. */}
            <img
              src={CONFIG.heroImageUrl}
              alt="Dron DJI"
              className="relative w-full drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)] z-10 transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-30 -mt-24 px-6">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl rounded-[3rem] p-12 shadow-2xl border border-white/50 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Ahorro Agua", val: "95%", icon: Droplets, color: "text-blue-500" },
            { label: "Rendimiento", val: "+45%", icon: Zap, color: "text-[#FFAD1E]" },
            { label: "Precisión", val: "±2cm", icon: Target, color: "text-emerald-500" },
            { label: "Operatividad", val: "24/7", icon: Timer, color: "text-purple-500" },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-3">
              <div className={`w-12 h-12 ${stat.color} bg-slate-50 rounded-2xl flex items-center justify-center mx-auto shadow-inner`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-4xl font-black text-[#3A432E] tracking-tighter">{stat.val}</p>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section id="ventajas" className="py-24 bg-[#FDFDFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-[#FFAD1E] font-black uppercase tracking-[0.3em] text-[10px]">Análisis Comparativo</span>
                <h2 className="text-3xl md:text-4xl font-black text-[#3A432E] uppercase tracking-tighter leading-none">
                  DRON VS <br/><span className="text-slate-300">TRADICIONAL</span>
                </h2>
              </div>
              <div className="space-y-8">
                {COMPARATIVA_VISUAL.map((item, idx) => (
                  <div key={idx} className="group p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-slate-50 rounded-xl text-[#3A432E] group-hover:bg-[#FFAD1E] transition-colors">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-black text-lg uppercase leading-none">{item.title}</h4>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-black uppercase text-[#3A432E]">
                          <span>FumiAgriDron</span>
                          <span className="text-[#FFAD1E]">{item.dron.val}</span>
                        </div>
                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                          {/* Using Tailwind's arbitrary value feature for dynamic width */}
                          <div className={`h-full bg-gradient-to-r ${item.dron.color} transition-all duration-1000 delay-300 w-[${item.dron.percent}%]`}></div>
                        </div>
                      </div>
                      <div className="space-y-1 opacity-40">
                        <div className="flex justify-between text-[10px] font-black uppercase">
                          <span>Método Tradicional</span>
                          <span>{item.trad.val}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          {/* Using Tailwind's arbitrary value feature for dynamic width */}
                          <div className={`h-full ${item.trad.color} w-[${item.trad.percent}%]`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#3A432E] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFAD1E] rounded-full blur-[100px] opacity-20"></div>
                <div className="relative z-10 space-y-8">
                  <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center border border-white/10">
                    <Sparkles className="text-[#FFAD1E]" size={40} />
                  </div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter leading-tight">
                    ELIMINA EL <br/> DAÑO POR <br/> PISOTEO
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Al operar desde el aire con precisión centimétrica, eliminamos el 100% del daño mecánico al cultivo y al suelo causado por maquinaria pesada o personal terrestre.
                  </p>
                  <div className="pt-8 flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-5xl font-black text-[#FFAD1E]">0%</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Compactación</p>
                    </div>
                    <div className="w-px h-12 bg-white/10"></div>
                    <div className="text-center">
                      <p className="text-5xl font-black text-[#FFAD1E]">15%</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Más Cosecha</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-[#3A432E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#FFAD1E_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center mb-12 space-y-3 relative z-10">
          <span className="text-[#FFAD1E] font-black uppercase tracking-[0.3em] text-[10px]">Nuestras Soluciones</span>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">NUESTROS SERVICIOS</h2>
          <div className="h-1 w-16 bg-[#FFAD1E] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 relative z-10">
          {services.map((service, i) => (
            <EngineeringCard
              key={i}
              title={service.title}
              description={service.description}
              icon={service.icon}
              colorClass={service.color}
            />
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section id="solicitud" className="py-20 relative overflow-hidden bg-[#3A432E]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#FFAD1E_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:row-reverse lg:flex-row">
            <div className="lg:w-2/5 bg-[#4a543b] p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#FFAD1E] rounded-full blur-[100px] opacity-20"></div>
              <div className="space-y-8 relative z-10">
                <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">
                  COTIZA <br/><span className="text-[#FFAD1E]">TU VUELO</span>
                </h2>
                <div className="h-1 w-16 bg-[#FFAD1E]"></div>
                <p className="text-white/60 text-sm font-medium">
                  Optimiza tus costos hoy mismo. Nuestro equipo técnico analizará tu solicitud y te enviará una propuesta personalizada.
                </p>
                <div className="space-y-5 pt-6">
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10"><Phone size={18} /></div>
                    <div>
                      <p className="text-[9px] uppercase font-bold text-white/40">WhatsApp</p>
                      <p className="font-bold text-sm">{CONFIG.whatsappNumber}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10"><Mail size={18} /></div>
                    <div>
                      <p className="text-[9px] uppercase font-bold text-white/40">Email</p>
                      <p className="font-bold text-xs">{CONFIG.displayEmail}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 pt-12 overflow-visible">
                <img src={CONFIG.formDroneUrl} alt="Drone Animado" className="w-48 mx-auto opacity-30 animate-float-slow transform -rotate-12" />
              </div>
            </div>

            <div className="lg:w-3/5 p-8 lg:p-12">
              <form action={`https://formspree.io/f/${CONFIG.formspreeId}`} method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="client-name" className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Hacienda / Cliente</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                      <input type="text" id="client-name" name="Cliente" required className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-[#FFAD1E] outline-none transition-all font-bold text-sm text-[#3A432E]" placeholder="Nombre comercial" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="whatsapp-phone" className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Teléfono WhatsApp</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                      <input type="tel" id="whatsapp-phone" name="Teléfono" required className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-[#FFAD1E] outline-none transition-all font-bold text-sm text-[#3A432E]" placeholder="Ej: 099..." />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="client-email" className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Correo Electrónico</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                      <input type="email" id="client-email" name="Email_Cliente" required className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-[#FFAD1E] outline-none transition-all font-bold text-sm text-[#3A432E]" placeholder="su-correo@ejemplo.com" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="exact-location" className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Ubicación / Sector</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                      <input type="text" id="exact-location" name="Ubicacion_Exacta" required className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-[#FFAD1E] outline-none transition-all font-bold text-sm text-[#3A432E]" placeholder="Parroquia, Km, Vía..." />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="province-select" className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Provincia</label>
                    <select id="province-select" name="Provincia" required className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-[#FFAD1E] outline-none transition-all font-bold text-sm text-[#3A432E] appearance-none">
                      <option value="">Provincia...</option>
                      {PROVINCIAS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="crop-select" className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Cultivo</label>
                    <select id="crop-select" name="Cultivo" required className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-[#FFAD1E] outline-none transition-all font-bold text-sm text-[#3A432E] appearance-none">
                      <option value="">Cultivo...</option>
                      {CULTIVOS.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="hectares-input" className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Hectáreas</label>
                    <input type="number" id="hectares-input" name="Hectáreas" required className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-[#FFAD1E] outline-none transition-all font-bold text-sm text-[#3A432E]" placeholder="Cantidad" />
                  </div>
                </div>
                <button type="submit" className="w-full py-4 bg-[#FFAD1E] text-[#3A432E] rounded-xl font-black uppercase tracking-[0.2em] text-sm hover:bg-emerald-500 hover:text-white transition-all shadow-lg flex items-center justify-center gap-3 group">
                  Enviar Solicitud <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img src={CONFIG.logoUrl} alt="Logo" className="h-10 w-10 grayscale opacity-50" />
            <div className="flex flex-col">
              <span className="font-black text-[#3A432E] tracking-tighter text-lg uppercase">FUMIAGRIDRON</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">© 2026 Todos los derechos reservados</span>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-2 text-slate-400 hover:text-[#FFAD1E] transition-colors cursor-pointer">
              <Award size={18} /> <span className="text-[10px] font-bold uppercase tracking-widest">Certificados</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 hover:text-[#FFAD1E] transition-colors cursor-pointer">
              <HardHat size={18} /> <span className="text-[10px] font-bold uppercase tracking-widest">Seguridad</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-9 h-9 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#FFAD1E] transition-all"><Mail size={16}/></a>
            <a href="#" className="w-9 h-9 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#FFAD1E] transition-all"><MessageCircle size={16}/></a>
          </div>
        </div>
      </footer>

      <style>{`
        /* Global Animations and Utilities not directly convertible to Tailwind classes */
        .animate-spin-slow { animation: spin 12s linear infinite; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float-slow {
          0% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-30px) rotate(-10deg); }
          100% { transform: translateY(0px) rotate(-12deg); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}