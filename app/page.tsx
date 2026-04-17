import { SplineSceneBasic } from '@/components/ui/demo'
import { TestimonialsSection } from '@/components/testimonials'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] bg-[#121212]/80 backdrop-blur-md border-b border-[#2a2a2a]">
        <div className="w-full max-w-[1200px] mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tight">Ján Novák</a>
          <ul className="hidden md:flex list-none gap-8">
            <li><a href="#sluzby" className="text-sm text-white/80 hover:text-white transition-colors">Služby</a></li>
            <li><a href="#vyhody" className="text-sm text-white/80 hover:text-white transition-colors">Výhody</a></li>
            <li><a href="#referencie" className="text-sm text-white/80 hover:text-white transition-colors">Referencie</a></li>
            <li><a href="#kontakt" className="text-sm text-white/80 hover:text-white transition-colors">Kontakt</a></li>
          </ul>
          <a href="tel:+421999999445" className="inline-flex items-center justify-center font-semibold rounded-full bg-[#FFCF23] text-black hover:bg-[#EBB816] transition-transform hover:-translate-y-[1px] px-5 py-2.5 text-sm gap-2">
            Pohotovosť: 0999 999 445
          </a>
        </div>
      </nav>

      {/* HERO SECTION WITH SPLINE */}
      <div className="pt-[80px]">
        <SplineSceneBasic />
      </div>

      {/* TRUST BAR */}
      <section className="bg-[#0d0d0d] border-y border-[#2a2a2a] py-6 relative z-10 w-full">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 text-sm font-medium">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="#FFCC00"><path d="M234.29,114.85l-45,38.83,14.11,61.69a12,12,0,0,1-17.87,13L128,195.72,70.43,228.36a12,12,0,0,1-17.87-13l14.11-61.69-45-38.83a12,12,0,0,1,6.86-21.08l62.46-5.13L116,30.41a12,12,0,0,1,24.06,0l25,58.21,62.46,5.13a12,12,0,0,1,6.86,21.08Z"></path></svg>
              ))}
            </div>
            <span>5.0 Hodnotenie na Google</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="#7DF9FF"><path d="M104,188a12,12,0,0,1-8.49-3.51l-40-40a12,12,0,1,1,17-17l31.52,31.52,79.51-79.52a12,12,0,1,1,17,17l-88,88A12,12,0,0,1,104,188Z"></path></svg>
            <span>Osvedčenie §21 a vyššie</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="#A1D2F7"><path d="M208.26,62l-72-24a12,12,0,0,0-7.6,0l-72,24A12,12,0,0,0,48,73.18c0,53.25,23.11,103.3,64.44,139.63a12,12,0,0,0,15.91,0C178.6,180.52,208,127,208,73.18A12,12,0,0,0,208.26,62ZM128,188.42c-31.78-29-56-65.09-56-107.54L128,62.15l56,18.73C184,123.33,159.78,159.39,128,188.42Z"></path></svg>
            <span>Plne poistené práce</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="sluzby" className="py-24">
        <div className="w-full max-w-[1000px] mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-3">Naše Služby</h2>
          <p className="text-[#9ca3af] text-base mb-12 max-w-[500px]">Komplexné riešenia pre vaše elektroinštalácie, od malých opráv po kompletné realizácie projektov.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1e1e1e] rounded-2xl p-8 border border-white/[0.03] hover:-translate-y-1 hover:border-[#7DF9FF]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="#7DF9FF"><path d="M216,72H168V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM104,56h48V72H104ZM216,200H40V88H88v16a8,8,0,0,0,16,0V88h48v16a8,8,0,0,0,16,0V88h48V200Z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Domové elektroinštalácie</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">Kompletné rekonštrukcie elektrických rozvodov v bytoch a domoch. Návrh a realizácia osvetlenia, zásuvkových obvodov a slaboprúdových systémov.</p>
            </div>
            
            <div className="bg-[#1e1e1e] rounded-2xl p-8 border border-white/[0.03] hover:-translate-y-1 hover:border-[#7DF9FF]/20 transition-all duration-300 relative">
              <div className="absolute top-4 right-4 bg-[#FFCF23] text-black text-[10px] font-extrabold px-2 py-1 rounded-md">24/7</div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="#FFCC00"><path d="M226.83,165.17a8,8,0,0,1-11.32,11.32l-21.17-21.18L171.31,178.3a24.1,24.1,0,0,1-34,0l-17-17L86.83,194.83a8,8,0,0,1-11.32-11.32L109.06,150,92,133a24.1,24.1,0,0,1,0-34l22.92-22.92L93.71,54.91A8,8,0,0,1,105,43.6l31.7,31.7,46-46a8,8,0,1,1,11.32,11.32L171.06,63.51l17,17a24.1,24.1,0,0,1,0,34l-33.51,33.51L173,166.5Z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Opravy a údržba</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">Rýchla lokalizácia a odstránenie porúch. Oprava vypadávajúcich ističov, skratov a poškodených káblov s dôrazom na bezpečnosť.</p>
            </div>

            <div className="bg-[#1e1e1e] rounded-2xl p-8 border border-white/[0.03] hover:-translate-y-1 hover:border-[#7DF9FF]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="#ffffff"><path d="M208.57,98.66A8,8,0,0,0,200,96H144V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,5.66,13.66H96v64a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,208.57,98.66ZM112,180.69V128a8,8,0,0,0-8-8H59.31L128,63.31V112a8,8,0,0,0,8,8h44.69Z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Bleskozvody a revízie</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">Montáž aktívnych a pasívnych bleskozvodov. Východiskové a pravidelné odborné prehliadky a skúšky elektrických zariadení.</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FOOTER */}
      <footer className="border-t border-[#2a2a2a] py-8 bg-[#0d0d0d] relative z-10 w-full">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#9ca3af] gap-4">
          <div className="font-bold text-white text-sm">Ján Novák</div>
          <div>&copy; 2024 Ján Novák - Elektrikár Poprad. Všetky práva vyhradené.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Ochrana údajov</a>
            <a href="#" className="hover:text-white transition-colors">Obchodné podmienky</a>
            <a href="#" className="hover:text-white transition-colors">Mapa stránok</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
